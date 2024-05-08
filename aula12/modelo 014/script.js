function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `agora são ${hora}h horas!`

if(hora >= 6 && hora < 12){
    img.src = 'manha.png'
    document.body.style.background = '#FC9A3G'

}else if(hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    document.body.style.background = '#B8866A'

}else {
    img.src = 'noite.png'
    document.body.style.background = '#1A2A43'
}
}