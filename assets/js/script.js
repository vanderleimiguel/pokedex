// ***********************************************************
//Variaveis gerais
let page = 1

// ***********************************************************
//Função para extrair dados da API
async function pokedex() {
  let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${page}.png`

  let response2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${page}`
  )
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)

  let data = await response.json()
  let data2 = await response2.json()

  let pokeName = data.name
  let pokeId = data.id
  let pokeType = data.types[0].type.name
  let pokeDescrip = data2.flavor_text_entries[0].flavor_text

  document.querySelector('#cards').insertAdjacentHTML(
    'beforeend',
    `
  <article class="card">
    <div class="flip">
      <div class="card_front">
          <img class="image" src=${pokeImage}>

          <div class="card-text">
              <h2 class="name">${pokeName}</h2>
              <p class="descrip">Nº ${pokeId}</p>
              <h4>Type</h4>
              <p class="descrip">${pokeType}</p>
              
          </div>
      </div>
    
      <div class="card_back">
          <div class="card-text">
              <h2 class="name">${pokeName}</h2>
              <h4>Description</h4>
              <p class="descrip">${pokeDescrip}</p>
          </div>
      </div>
    </div>
  </article>
      `
  )
}

//chamada da primeira lista na pagina inicial
let n = 1
while (n < 13) {
  pokedex()
  page++
  n++
}

//função para botão de ver mais pokemons
function viewMore() {
  let n2 = 1
  while (n2 < 13) {
    pokedex()
    page++
    n2++
  }
}
