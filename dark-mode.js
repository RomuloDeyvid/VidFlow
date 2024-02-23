document.querySelector('#btn').addEventListener("click", ()=>{
    document.body.classList.toggle('dark-mode')
    document.querySelector('.cabecalho__container').classList.toggle('dark-mode')
    document.querySelector('.cabecalho__audio').classList.toggle('dark-mode')
    document.querySelector('.menu__container').classList.toggle('dark-mode')
    document.querySelector('.superior__secao__container').classList.toggle('dark-mode')
    document.querySelector('.superior__slider').classList.toggle('dark-mode')
    
})