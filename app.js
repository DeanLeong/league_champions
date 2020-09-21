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


const searchOptions = async () => { //Grabs the JSON and uses the JSON info to populate the list.
  const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json' //The JSON
  try { //Try catch to run the JSON through axios and if it does, list will equal response.data.data
    const response = await axios.get(url)
    const classList = ["Controller", "Fighter", "Mage", "Marksman", "Slayer", "Tank"] //Array for the dropdown options. hardcodec classes
    championClassSearch(classList) //runs championClassSearch on list, which populates the dropdown bar with the provided info
  } catch (error) {
    console.log(`Error: ${error}`) //Detailed error logging
  }
}

searchOptions() //Calls getOptions

function championClassSearch(classList) { //Creates the extra options needed to have a dropdown list according to what is passed into it.
  const select = document.querySelector('select')
  return classList.forEach((championClass) => {
    console.log(championClass)
    const option = document.createElement('option')
    option.value = `${championClass}`
    option.textContent = `${championClass}`
    select.append(option)
  })
}

const getChampions = async () => { //Grabs the JSON and the champions
  const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json' //The JSON
  try { //Try catch to run the JSON through axios and if it does, list will equal response.data.data
    const response = await axios.get(url)
    const champions = Object.values(response.data.data) //Array for the dropdown options.
    console.log(champions)
    champions.forEach((champion) => {
      console.log(response.data.data.Aatrox.tags)
    })
  } catch (error) {
    console.log(`Error: ${error}`) //Detailed error logging
  }
}

getChampions()



// response.forEach(getChampions) {
//   console.log(tags)
// }

//Code to retrive the champion Images goes here.