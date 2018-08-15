document.addEventListener("DOMContentLoaded", function() {

  let inputValue = document.getElementById("pokemon-search-input")
  let pokemons = pokemonData.pokemons

  // getting the sprites
  // pokemons.forEach(pokemon => (console.log(pokemon.sprites.front)))
  // pokemons.forEach(pokemon => (console.log(pokemon.sprites.back)))

  inputValue.addEventListener("keyup", e =>{
    let typedValues = (e.target.value)
    let filteredPokemons = findMatchedPokemon(typedValues)
    showPokemonCard(filteredPokemons)
  })

  let findMatchedPokemon = (values) =>
     pokemons.filter( (pokemon) => {
       return pokemon.name.includes(values)
    })

  let showPokemonCard = (pokemons) => {
    pokemons.forEach(pokemon => {
      
    })
    // debugger
  }

  function displayPokemon(pokemon) {

  return `<div class="pokemon-container">
        <div style="width: 230px; margin: 10px; background: rgb(254, 205, 47); color: rgb(45, 114, 252); --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#f2c22a; --darkreader-inline-color:#2663e1;" class="pokemon-frame" data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">
        <h1 class="center-text">charizard</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="charizard" data-action="flip-image">flip card</p>
        </div>
      </div>`
  }

})
