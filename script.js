const containerVideos = document.querySelector(".videos__container")
//criei essa variavel


async function buscarEMostrarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos")
        const videos = await busca.json()
        videos.forEach((video) => {
            if (video.categoria == "") {
                throw new Error('Vídeo não possui categoria')
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src=${video.imagem} alt="logo-do-canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" style="display:none">${video.categoria}</p>
                </div>
            </li>
            `
        }
        )
    } catch (error) {
        containerVideos.innerHTML = `
        <p> Houve um erro ao carregar os videos: ${error}</p>
        `
    }
}
buscarEMostrarVideos()

const barraDePesquisa = document.querySelector(".pesquisar__input")
barraDePesquisa.addEventListener("input", filtrarPesquisa)

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item")
    let valorFiltro = barraDePesquisa.value.toLowerCase()
    videos.forEach((video) => {
        const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
        video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
    });
}

const botaoCategoria = document.querySelectorAll('.superior__item')
botaoCategoria.forEach((botao) =>{
    let nomeCategoria = botao.getAttribute('name')
    botao.addEventListener('click', ()=> filtrarCategoria(nomeCategoria))
})

function filtrarCategoria(filtro){
    const videos = document.querySelectorAll(".videos__item")
    for (let video of videos){
        let categoria = video.querySelector('.categoria').textContent.toLowerCase()
        let valorFiltro = filtro.toLowerCase()
        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = 'none'
        }else{
            video.style.display = 'block'
        }
    }
}
