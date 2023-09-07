const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 3;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
       <span class="name">${pokemon.name}</span>
       
       <div class="detail">
       <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        
            <h6> Basic Stats</h6>
            <div class="background2"> 
            <div id="stats">
            <div class="stat-row">
                <div class="stat-desc">HP</div>
                <div class="stat-number">045</div>
                <div class="stat-bar">
                    <div class="bar-outer">
                        <div class="bar-inner" style="width: 45%"></div>
                    </div>
                </div>
            </div>
            <div class="stat-row">
                <div class="stat-desc">ATK</div>
                <div class="stat-number">049</div>
                <div class="stat-bar">
                    <div class="bar-outer">
                        <div class="bar-inner" style="width: 49%"></div>
                    </div>
                </div>
            </div>
            <div class="stat-row">
                <div class="stat-desc">DEF</div>
                <div class="stat-number">049</div>
                <div class="stat-bar">
                    <div class="bar-outer">
                        <div class="bar-inner" style="width: 49%"></div>
                    </div>
                </div>
            </div>
            <div class="stat-row">
                <div class="stat-desc">SATK</div>
                <div class="stat-number">065</div>
                <div class="stat-bar">
                    <div class="bar-outer">
                        <div class="bar-inner" style="width: 65%"></div>
                    </div>
                </div>
            </div>
            <div class="stat-row">
                <div class="stat-desc">SDEF</div>
                <div class="stat-number">065</div>
                <div class="stat-bar">
                    <div class="bar-outer">
                        <div class="bar-inner" style="width: 65%"></div>
                    </div>
                </div>
            </div>
            <div class="stat-row">
                <div class="stat-desc">SPD</div>
                <div class="stat-number">045</div>
                <div class="stat-bar">
                    <div class="bar-outer">
                        <div class="bar-inner" style="width: 45%"></div>
                    </div>
                </div>
            </div>
        </div>
             </div>
                   </div>
           
                            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})