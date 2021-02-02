<h1>Module 4 Project | Flatiron School</h1>
<h2>Checkers</h2>
<p>
This Checkers app was built as my Module 4 project during my Flatiron School Software Engineering Intensive (Denver, CO). The requirement was to build a web app, starting Monday for presentation Friday afternoon of the same week. I chose to build a checkers app to practice and stengthen programming more complex logic as well as moving state in React.<br>
</p>

<h2>Technologies</h2>

<ul>
 <li>Ruby on Rails</li>
 <li>React.js</li>
 <li>JavaScript</li>
 <li>HTML</li>
 <li>CSS</li>
</ul>

<h2>Setup</h2>
To run this project, install it locally by cloning this GitHub repository and opening it in your code editor.<br><br>
From there, navigate into the folder titled <b>checkers-backend</b> and run <code>bundle install</code>, <code>rails db:migrate</code> and finally, <code>rails s</code> in your terminal. You will need to start the server on port 3000.<br><br>
In a new terminal tab, navigate to the folder titled <b>checkers-frontend</b> and run <code>npm install</code>, then <code>npm start</code>. As the Rails server is running on port 3000, you will be prompted to confirm running the app on another port. Confirm by typing <code>y</code>. This should prompt your browser to open a page at: <code>localhost:3001</code><br><br>.

You are now ready to start using the current iteration of this checkers app! Please see the features section to learn more about the current functionality of the app.<br><br>

<h2>Instructions</h2>
Once you have opened the project through lite-server, you can find all 151 First Generation Pokemon by either searching for its name or browsing Pokemon by type.<br><br>
To clear your search results, just click <i>Reset</i>. <br><br>
To see more information about a specific Pokemon, hover over its card and click on its name!<br><br>
To navigate back to the homepage after being directed to an individual Pokemon page, please click the Pokeball at the top of the page.

<h2>Code Examples</h2>
Our initial fetch call for the main page:


```javascript
const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(pokemonURL) 
            .then(response => response.json())
        )
    }
    Promise.all(promises)
    .then(allPokemon => {
        const firstGenPokemon = allPokemon.map(pokemon => ({
            frontImage: pokemon.sprites['front_default'],
            pokemon_id: pokemon.id,
            name: pokemon.name,
            type: pokemon.types[0].type.name,
            abilities: pokemon.abilities.map(ability => ability.ability.name).join(', '),
            backImage: pokemon.sprites['back_default'],
            description: pokemon.species.url
        }))
        pokemonArray = firstGenPokemon
        createPokemonCards(firstGenPokemon)
    })
    .then(generateTypes)
}
```

Creating elements for Pokemon descriptions after making a request to the PokeAPI:
``` javascript 
function displayDetails(pokemonDetails) {
        const findDetailsContainer = document.querySelector(".details-container")
        const pokemonDescription = document.createElement('p');
        pokemonDescription.classList.add("description")
        pokemonDescription.textContent = `${pokemonDetails.flavor_text_entries[3].flavor_text}`

        findDetailsContainer.append(pokemonDescription)
    }
```


<h2>App Preview</h2>
<b>Flip Pokemon Card Feature:</b>
<img src="https://media.giphy.com/media/xuiGJFyU6dZWnoSYRb/giphy.gif" alt="Flip Pokemon Card" border="0"><br><br>
<b>Individual Pokemon Page:</b>
<img src="https://media.giphy.com/media/y6O2dCx4ofbxTn8ahw/giphy.gif" alt="Individual Pokemon Page"><br><br>
<b>Filter Pokemon by Type:</b><br>
<p>Each Pokemon card is color coded according to its Pokemon Type!</p>
<img src="https://media.giphy.com/media/0VQf1Qse9JBc5YN1Av/giphy.gif" alt="Filter by Type Feature"><br><br>
<b>Filter Pokemon by Name:</b>
<img src="https://media.giphy.com/media/ZjrEc4wtpYK6uc7gfn/giphy.gif" alt="Filter by Name Feature"><br><br>
<h2>User Stories</h2>

<h3>As a user, you will be able to:</h3>

<ol>
 <li>See a list of all first generation Pokemon names and pictures.</li>
 <li>see the list of Pokemon name and picture as a Pokemon card.</li>
 <li>Click on a Pokemon and see a page of its information.</li>
 <li>Search for a Pokemon using its name</li>
 <li>See more information about a pokemon in the back of the card.</li>
</ol>

<h2>Status</h2>

<p>We set out create a functional and aesthetically pleasing Pokedex.</p>

With time, we would like to refactor our code and add features such as:
<li>Adding Favorites</li>
<li>Creating User Log ins</li>
<li>Add Pokemon Ability descriptions.</li>
<li>Update Pokemon photos.</li>
<li>Add a button to navigate back to the top of the page.</li>

<h2>Contact</h2>
<a href="https://www.linkedin.com/in/tiffany-kanjanabout/"><img src="https://user-images.githubusercontent.com/68958970/94946276-dc7b8a00-04a9-11eb-9431-366689b9fa06.png" alt="Tiffany Kanjanabout" style="width:10px;height:10px;"></a>Tiffany Kanjanabout :octocat:<br>
<a href="https://www.linkedin.com/in/paigeamiles/"><img src="https://user-images.githubusercontent.com/68958970/94946276-dc7b8a00-04a9-11eb-9431-366689b9fa06.png" alt="Paige Miles" style="width:10px;height:10px;"></a>Paige Miles :evergreen_tree:<br>

<h2>API Reference</h2>
[PokeAPI](https://pokeapi.co/)
