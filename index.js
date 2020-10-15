const { create, Client } = require('@open-wa/wa-automate')
const { color } = require('./utils')
const options = require('./utils/options')
const msgHandler = require('./handler/message')

const start = (client = new Client()) => {
    console.log('[DEV]', color('Red Emperor', 'yellow'))
    console.log('[CLIENT] CLIENT Started!')

    // Force it to keep the current session
    client.onStateChanged((state) => {
        console.log('[Client State]', state)
        if (state === 'CONFLICT') client.forceRefocus()
    })

    // listening on message
    client.onMessage((message) => {
        client.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    client.cutMsgCache()
                }
            })
        // Message Handler
        msgHandler(client, message)
    })

    // listen group invitation
    client.onAddedToGroup(({ groupMetadata: { id }, contact: { name } }) =>
        client.getGroupMembersId(id)
            .then((ids) => {
                console.log('[CLIENT]', color(`Invited to Group. [ ${name} : ${ids.length}]`, 'yellow'))
                // precisa ter 10 nego no grupo. Flw otário
                if (ids.length <= 10) {
                    client.sendText(id, 'precisa ter 10 nego no grupo. Flw otário~').then(() => client.leaveGroup(id))
                } else {
                    client.sendText(id, `Salve glr do grupo *${name}*, vão se foder... usem *#menu* pra ver as merdas que tem no bot`)
                }
            }))

    client.onRemovedFromGroup((data) => {
        // console.log(data)
    })

    // listen paricipant event on group (wellcome message)
    client.onGlobalParicipantsChanged((event) => {
        // if (event.action === 'add') client.sendTextWithMentions(event.chat, `Bem-vindo a essa bosta @${event.who.replace('@c.us', '')} \n\nseu otário`)
    })

    client.onIncomingCall((callData) => {
        // client.contactBlock(callData.peerJid)
    })
}

create('Imperial', options(true, start))
    .then((client) => start(client))
    .catch((err) => new Error(err))
