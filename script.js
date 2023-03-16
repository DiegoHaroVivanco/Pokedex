document.addEventListener("DOMContentLoaded", ()=>{ // espera a que la API responda
    const geners = ["generation-1","generation-2","generation-3",
                "generation-4", "generation-5", "generation-6", "generation-7"]

    const filters = document.getElementById("filters")
    let gen = ""
    geners.forEach((generation, index) =>{
        gen+=`<input type="radio" class="radio-gens" id=${generation} value=${index+1} name="generation" checked>
            <label for=${generation} class="label-gens">${generation}</label>`
    })
    filters.innerHTML = gen

}) 