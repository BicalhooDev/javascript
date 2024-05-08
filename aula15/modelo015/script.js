function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('anotxt')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Tente Novamente !!')
    }else {
        var sex = document.getElementsByName('sextxt')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex [0].checked){
            genero = 'Homem'

            if (idade >=0 && idade <= 15){
                //criança
                img.setAttribute('src', 'criancaHomem.png')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'jovemHomem.png')
            }else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'adultoHomem.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosoHomem.png')
            }
        }else {
            genero = 'Mulher'

            if (idade >=0 && idade <= 15){
                //criança
                img.setAttribute('src', 'criancaMulher.png')

            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'jovemMulher.png')

            }else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'adultoMulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosaMulher.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Você é um(a) ${genero} com ${idade} anos !`
        res.appendChild(img)
    }
}