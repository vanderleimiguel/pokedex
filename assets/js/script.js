// ***********************************************************
//Variaveis gerais
let page = 1
let pokeDescrip

// ***********************************************************
//Função para extrair descrição da API
async function pokedex1() {
  let response1 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${page}`
  )
  let data1 = await response1.json()
  pokeDescrip = data1.flavor_text_entries[0].flavor_text
}

//Função para extrair nome, id, tipo e imagem da API
async function pokedex2() {
  //extrai imagem
  let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${page}.png`

  //extrai nome, id e tipo
  let response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
  let data2 = await response2.json()
  let pokeName = data2.name
  let pokeId = data2.id
  let pokeType = data2.types[0].type.name

  //dados que serão inseridos no HTML
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
  pokedex1()
  pokedex2()
  page++
  n++
}

//função para botão de ver mais pokemons
function viewMore() {
  let n2 = 1
  while (n2 < 13) {
    pokedex1()
    pokedex2()
    page++
    n2++
  }
}
