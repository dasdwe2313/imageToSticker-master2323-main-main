exports.textTnC = () => {
    return `
FODASE TUDO E TODOS

escala 7359 dentro da própria escuridão das trevas`
}

exports.textMenu = (pushname) => {
    return `
Fala ${pushname || ''}! seu fdp

Alguns comandos

*#ping*

Sticker:
1. *#sticker*
Para converter uma imagem em adesivo, envie a imagem com a legenda #stickerou responda à imagem que foi enviada com #sticker.

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


        By: Kennedy`
}

exports.textAdmin = () => {
    return `
*⚠[Grupo de administradores apenas]⚠*
Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!

1. *#kick* @user
Removendo membros do grupo (pode ser mais de 1).

2. *#promote* @user
Promova membros para administradores do grupo.

3. *#demote* @user
Rebaixar administradores de grupo.

4. *#tagall*
Menção de todos os membros do grupo.

5. *#bye*
Remover o bot do grupo.

6. *#del*
Para deletar uma mensagem do bot (responda a mensagem do bot com #del) `
}

