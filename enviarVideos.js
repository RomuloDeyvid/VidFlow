const formulario = document.querySelector("[data-formulario]")
async function enviarVideo(tiulo, descricao, url, imagem, categoria){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers:{
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
            titulo: tiulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
            categoria: categoria 
        })

    })
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}    

async function criarVideo(evento){
    evento.preventDefault()
    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const categoria = document.querySelector("[data-categoria]").value
    const descricao = Math.floor(Math.random()*10).toString()
    
    await enviarVideo(titulo, descricao, url, imagem, categoria)

    window.location.href = "/pages/envio-concluido.html"
}

formulario.addEventListener("submit", evento => criarVideo(evento))