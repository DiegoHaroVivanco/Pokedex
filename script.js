const URL_API = `https://pokeapi.co/api/v2`

document.addEventListener("DOMContentLoaded", ()=>{ // espera a que la API responda
    
    const fetchPokemons = async (endPoint) =>{
        let data = ''
        try {
            const response = await fetch(endPoint, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            data = await response.json()
            
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
        return data.pokemon_species
    }

    const extractStr = (str) =>{
        const mySubString = str.substring(str.lastIndexOf("s/") + 2, str.lastIndexOf("/"))
        return mySubString
    }
    
    const getPokemons = async (num) =>{
        let endPoint = `${URL_API}/generation/${num}/`
        const container = document.getElementById("container")
        container.innerHTML = ""
        let pokemons = []
        pokemons = await fetchPokemons(endPoint) // pokemones que me trae el endpoint
        
        pokemons.forEach((pokemon, index) =>{
            pokemons[index].num = extractStr(pokemon.url)
        })
        pokemons.sort((a, b) => a.num - b.num) // ordeno los pokemones de menor a mayor segun su número
        
        pokemons.forEach((pokemon) => {
            let divItem = document.createElement("li")
            divItem.classList.add("item")
            divItem.innerHTML = `<div> ${extractStr(pokemon.url)}-${pokemon.name}</div>`
            container.appendChild(divItem)        
        })

        console.log(pokemons); 
 
    }
    getPokemons(1)
    
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