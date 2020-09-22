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
    championTitle.className = "champTitle"
    championTitle.innerText = `${champion.title}`
    champ.appendChild(championTitle);

    const championImage = document.createElement('img')
    championImage.className = "champImage"
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