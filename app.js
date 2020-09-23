function searchOptions() { //Refactored above code, don't need to run JSON yet.
  const classList = ["Support", "Fighter", "Mage", "Marksman", "Assassin", "Tank"] //Makes the dropdown search menu use the strings in this array.
  championClassSearch(classList)
}


searchOptions() //Calls getOptions

function championClassSearch(classList) { //Creates the extra options needed to have a dropdown list according to what is passed into it.
  const select = document.querySelector('select') //The select is the dropdown menu
  return classList.forEach((championClass) => { //In this function is where I need to have the searched dropdown item compare to the champion tags.
    console.log(championClass) //Log to help make sure the classes are coming through
    const option = document.createElement('option') //Populates the options actually might not be needed since the dropdown has been hardcoded
    option.value = `${championClass}`
    option.textContent = `${championClass}`
    select.append(option)
  })
}


const getChampions = async (optionValue) => { //Grabs the JSON and the champions
  removePic() //Removes the old set of pictures
  const url = 'https://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json' //The JSON
  try { //Try catch to run the JSON through axios and if it does, list will equal response.data.data
    const response = await axios.get(url) //Nothing happens until the JSON runs through axios
    let champions = Object.values(response.data.data) //Array for the dropdown options
    filterChampions(champions, optionValue) //calls the filter champions function and passes champions, optionValue through it
  } catch (error) {
    console.log(`Error: ${error}`) //Detailed error logging
  }
}


const champ = document.querySelector('.champContainer') //Global champ variable that is set to the champContainer in my HTML just the box that the champion images and info will go into




function filterChampions(allChampions, optionValue) { //This is the filter function
  let filteredChampions = allChampions.filter(champion => //Sets the variable filteredChampions to allChampions.filter which is grabbing just the champion tags that were selected in optionValue
    champion.tags.includes(optionValue)
  )
  console.log(filteredChampions) //Logs all champions of the correct tag
  randomizeChampions(filteredChampions) //Runs the randomize champion on filteredChampions, first all of the champions of the correct class are grabbed and then they are randomized
}


function randomizeChampions(filteredChampions) { //use an if else statement for search? If support, run randomize champions etc?
  let randomizedChampions = [] //Empty array that the randomized champions are going to be pushed into
  for (let i = 0; i < 6; i++) { //for loop so that only six champions actually go into the array
    let num = Math.floor(Math.random() * filteredChampions.length) //This is the part where the filered champions are randomized
    randomizedChampions.push(filteredChampions[num]) //The randomized champions are then pushed into the array

  }
  console.log(randomizedChampions) //Logs the randomized champions
  renderChampions(randomizedChampions) //Runs renderChampions for each randomizedChampions
}


function renderChampions(randomizedChampions) { //This function will grab the champions with the appropriate tags when compared to class and display them on screen.
  randomizedChampions.map((champion) => { //randomizedChampions.map runs like this: it is like a for of loop that grabs the key and value of each champion

    const championImage = document.createElement('img') //the next block of code sets variables for each element I want to display on the page
    championImage.className = "champImage" //gives them classes I can use in css
    championImage.setAttribute('src', `./loading/${champion.name}_0.jpg`, 'alt', `./loading_cntd/${champion.name}_0.jpg`) //parent div and what I want going into it
    champ.appendChild(championImage) //does the actual appending

    const championName = document.createElement('h3')
    championName.className = "champName"
    championName.innerText = `${champion.name}`
    champ.appendChild(championName);

    const championTitle = document.createElement('h5')
    championTitle.className = "champTitle"
    championTitle.innerText = `${champion.title}`
    champ.appendChild(championTitle);

    // const championBlurb = document.createElement('p')//The blurbs are cut short, so sad
    // championBlurb.className = "champBlurb"
    // championBlurb.innerText = `${champion.blurb}`
    // champ.appendChild(championBlurb)

    console.log(championName) //Logs the name of each champion that populates the page

  })
  //randomizeChampions(champions)
}


function getValue(e) { //The search doesn't run until the user selects something and hits search
  e.preventDefault()
  const optionValue = document.querySelector('#select-class').value
  console.log(optionValue)
  getChampions(optionValue)
}


function removePic() { //removes the old pictures on each new search so the page doesn't fill up
  const oldPic = document.querySelector('.champContainer')
  while (oldPic.lastChild) {
    oldPic.removeChild(oldPic.lastChild)
  }
}

const form = document.querySelector('form') //The actual event listener for the form submission
form.addEventListener('submit', getValue)


//Post MVP
//Full Blurbs?
//Fallback for champions with hypens, spaces etc.
//Better Pictures