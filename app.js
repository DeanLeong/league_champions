//An async/await function that calls the JSON and awaits its response. Done by getOptions.
//Make a list of each class that I want to appear in the search dropdown. Done by championTagSearch.
//Set up an e handler that puts up the images of six champions that are of the correct tag.
//I think that I need to set a variable that let me access each champion's name through a loop and grab tags.
//ex. response.data.data.${name}.tags
//Alternatively I can hardcode the list values to the Tags and then use dot notation to access each champion's tags.
//Now I need a function that will take the const list's strings and search them in each champion's tags.
//Then I will need a way that pulls up a champion's image and blurb and puts them on the webpage.
//Object.keys(response.data.data)
// Object.keys(response.data.data)
//let championTags = response.data.data.Aatrox.
//const championsList = Object.keys(response.data.data)
//console.log(championsList)
//Object.values(response.data.data)


//make a new array for renderchampions
//update the divs within the champion containers
//another function that is like a select champion function that takes the champions object
//create a new array and push into the array via a for loop with i > 5 for 6
//array at the index of the math.random, then render the new array.
//math.random is the index



function searchOptions() { //Refactored above code, don't need to run JSON yet.
  const classList = ["Support", "Fighter", "Mage", "Marksman", "Assassin", "Tank"] //Makes the dropdown search menu use the strings in this array.
  championClassSearch(classList)
}


searchOptions() //Calls getOptions

function championClassSearch(classList) { //Creates the extra options needed to have a dropdown list according to what is passed into it.
  const select = document.querySelector('select') //The select is the dropdown menu
  return classList.forEach((championClass) => { //In this function is where I need to have the searched dropdown item compare to the champion tags.
    console.log(championClass)
    const option = document.createElement('option')
    option.value = `${championClass}`
    option.textContent = `${championClass}`
    select.append(option)
  })
}


const getChampions = async (optionValue) => { //Grabs the JSON and the champions
  removePic()
  const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json' //The JSON
  try { //Try catch to run the JSON through axios and if it does, list will equal response.data.data
    const response = await axios.get(url)
    let champions = Object.values(response.data.data) //Array for the dropdown options.
    filterChampions(champions, optionValue)
  } catch (error) {
    console.log(`Error: ${error}`) //Detailed error logging
  }
}


const champ = document.querySelector('.champContainer')




function filterChampions(allChampions, optionValue) {
  let filteredChampions = allChampions.filter(champion =>
    champion.tags.includes(optionValue)
  )
  console.log(filteredChampions)
  randomizeChampions(filteredChampions)
}


function randomizeChampions(filteredChampions) { //use an if else statement for search? If support, run randomize champions etc?
  let randomizedChampions = []
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * filteredChampions.length)
    randomizedChampions.push(filteredChampions[num])

  }
  console.log(randomizedChampions)
  renderChampions(randomizedChampions)
}


function renderChampions(randomizedChampions) { //This function will grab the champions with the appropriate tags when compared to class and display them on screen. There will most likley
  randomizedChampions.map((champion) => { //need to be an if else to compare the search to the champion tags.
    const championName = document.createElement('h3')
    championName.className = "champName"
    championName.innerText = `${champion.name}`
    champ.appendChild(championName);

    const championTitle = document.createElement('h5')
    championTitle.innerText = `${champion.title}`
    champ.appendChild(championTitle);

    const championImage = document.createElement('img')
    championImage.setAttribute('src', `./champions/${champion.name}.png`) //parent div and append each element
    champ.appendChild(championImage)


    console.log(championName)

  })
  //randomizeChampions(champions)
}


function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector('#select-class').value
  console.log(optionValue)
  getChampions(optionValue)
}


function removePic() {
  const oldPic = document.querySelector('.champContainer')
  while (oldPic.lastChild) {
    oldPic.removeChild(oldPic.lastChild)
  }
}

const form = document.querySelector('form')
form.addEventListener('submit', getValue)