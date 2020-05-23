    const pokeContainer = document.getElementById('poke-container');
    const pokemonNumbers = 109;
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };
    const mainType = Object.keys(colors)
    // console.log(mainType)
    const getPokemon = async (id) =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(url);
        const pokemonData = await response.json();
        console.log(pokemonData);
        displayPokemon(pokemonData);
    }
    const fetchPokemon = async () => {
        for(let i = 0; i < pokemonNumbers; i++){
            getPokemon(i)
            // console.log(i)
        }
    }
    fetchPokemon()

    function displayPokemon(pokemonData){
        const pokemonElm = document.createElement('div');
        pokemonElm.classList.add('pokemon');
        const pokeType = pokemonData.types.map(elm => elm.type.name);
        const type = mainType.find(type => pokeType.indexOf(type) > -1);
        const pokemonName = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
        console.log(type)
        console.log(pokeType)
        const color = colors[type];
        pokemonElm.style.backgroundColor = color;
        pokemonElm.innerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png"">
        </div>
        <div class="info">
            <span class="number">#${pokemonData.id.toString().padStart(3, '0')}</span>
            <h3> ${pokemonName} </h3>
            <small>Type : <span>${type}</span></small>
        </div>
        `;

        pokeContainer.appendChild(pokemonElm)
    }
