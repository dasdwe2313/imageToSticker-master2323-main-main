exports.textTnC = () => {
    return `
FODASE TUDO E TODOS`
}

exports.textMenu = (pushname) => {
    return `
Fala ${pushname || ''}! seu fdp

Alguns comandos

*#ping*

Sticker:
1. *#sticker*
Para converter uma imagem em adesivo, envie a imagem com a legenda #sticker ou responda à imagem que foi enviada com #sticker.

2. *#stickers* _<Image Url>_
Para mudar a imagem do url para um adesivo.

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
Para transformar um GIF em um adesivo (somente Giphy)

Downloader:

1. *#tiktok* _<post/url do vídeo>_
Retornará vídeo tiktok.

2. *#fb* _<url de postagem/vídeo>_
Retornará o link de download de vídeo do Facebook.

3. *#ig* _<post/url do vídeo>_
Retornará o link de download do vídeo do Instagram.

4. *#twt* _<url de postagem/vídeo>_
Retornará o link de download de vídeo do Twitter.
Etc:

Etc:
1. *#translate* _<código do idioma>_
Para interpretar mensagens no idioma especificado.
Uso: Responder/citar/responder a mensagem que você deseja traduzir com _*#translate id*_ <- id é o código do idioma. os códigos de idiomam podem ser visto usando: */id*

2. *#resi* _<correio>_ _<código>_
Para verificar o status de entrega de mercadorias, lista de mensageiros: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Uso: enviar mensagem com o formato _*#resi jne 1238757632*_

3. *#meme* _<texto superior>_ | _<texto inferior>_
Para criar um meme com texto superior e inferior
Uso: enviar imagem com legenda _*#meme cima | baixo*_, ou você também pode responder a uma imagem existente.


        By: Kennedy`
}

exports.textAdmin = () => {
    return `
*⚠[Administrador de grupo apenas]⚠*
Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!

1. *#kick* @user
Para remover membros do grupo (pode ser mais de 1).

2. *#promote* @user
Para promover membros a administradores do grupo.

3. *#demote* @user
Para rebaixar os administradores do Grupo.

4. *#tagall*
Para mencionar todos os membros do grupo.

5. *#bye*
Remover o bot do grupo.

6. *#del*
Para deletar uma mensagem do bot (responda a mensagem do bot com #del) `
}

