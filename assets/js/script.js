let page = 1

async function pokedex() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
  let data = await response.json()

  let pokeName = data.name
  let pokeId = data.id
  let pokeType = data.types[0].type.name
  let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${page}.png`

  let response2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${page}`
  )
  let data2 = await response2.json()

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
              <p class="descrip">${pokeId}</p>
              <h4>Tipo</h4>
              <p class="descrip">${pokeType}</p>
              
          </div>
      </div>
    
      <div class="card_back">
          <div class="card-text">
              <h2 class="name">${pokeName}</h2>
              <h4>Descrição</h4>
              <p class="descrip">${pokeDescrip}</p>
          </div>
      </div>
    </div>
  </article>


      `
  )
}

pokedex()

function viewMore() {
  page++
  pokedex()
  console.log(page)
}
console.log('teste')
// viewMore()

//paginação infinita
window.addEventListener('scroll', function () {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement

  if (scrollTop + clientHeight >= scrollHeight - 300) {
    viewMore()
  }
})
