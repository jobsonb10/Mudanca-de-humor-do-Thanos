let imagem = document.querySelector('#Imagem')
let botao = document.querySelector("#Botao")
let humor = document.querySelector("#FraseHumor")
let cont = 0

botao.addEventListener('click', () => {
    if(cont%2 == 0){
        imagem.src = "./assets/img/Thanos-pó.jpg"
        humor.innerText = "Thanos foi derrotado pelos Vingadores e virou pó!"
    }
    else{
        imagem.src = "./assets/img/thanos feliz_Easy-Resize.com.jpg"
        humor.innerText = "Thanos acabou de juntar as jóias do infinito e está feliz!"
    }
    cont = cont + 1
})