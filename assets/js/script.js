// ***********************************************************
//Variaveis gerais
let page = 1

// ***********************************************************
//Função para extrair dados da API
async function pokedex() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
  let data = await response.json()

  let response2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${page}`
  )
  let data2 = await response2.json()

  let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${page}.png`
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

pokedex()

// ***********************************************************
//Função para paginação

window.addEventListener('scroll', function () {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement

  if (scrollTop + clientHeight >= scrollHeight - 300) {
    viewMore()
  }
})

function viewMore() {
  page++
  pokedex()
}
// ***********************************************************
