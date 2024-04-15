async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemon = data.sprites.front_default;
    const pokemonIMG = document.getElementById("pokemon");

    pokemonIMG.src = pokemon;
    pokemonIMG.style.display = "block";
  } catch (err) {
    console.error(err);
  }
}

// fetchData();

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response => response.json()
// .then(data => console.log(data))
// .catch(err => console.error(err)))
