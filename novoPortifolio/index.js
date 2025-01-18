const divs = document.querySelector('.projetos__Cards')
fetch('novoPortifolio/projetosVideos.json')
    .then(projetos => projetos.json())
    .then(pjt => {
        for (let info of pjt) {
            cards(info)
        }
    })

function cards(info) {
    divs.innerHTML += `
     
        <div class="card  mx-auto" style="width: 25rem; ">
        <div class="tecnologias__card " >${info.tecnologiasUsadas}</div>
        <video src=${info.video} class="object-fit-contain " autoplay></video>
        <div class="card-body">
            <h5 class="card-title fs-3 m-3">${info.titulo}</h5>
            <p class="card-text">${info.texto}</p>
            <a href="${info.linkOnline}" class="btn btn-primary" target="_blank">Projeto Online</a>
            <a href="#" class="btn btn-primary">GitHub</a>  
        </div>
        </div> 
         
        `

}








