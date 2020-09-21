//An async/await function that calls the JSON and awaits its response. Done by getOptions.
//Make a list of each class that I want to appear in the search dropdown. Done by championTagSearch.
//Set up an e handler that puts up the images of six champions that are of the correct tag.
//I think that I need to set a variable that let me access each champion's name through a loop and grab tags.
//ex. response.data.data.${name}.tags
//Alternatively I can hardcode the list values to the Tags and then use dot notation to access each champion's tags.
//Now I need a function that will take the const list's strings and search them in each champion's tags.
//Object.keys(response.data.data)
// Object.keys(response.data.data)
//let championTags = response.data.data.Aatrox.


const getOptions = async () => { //Grabs the JSON and uses the JSON info to populate the list.
  const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json' //The JSON
  try { //Try catch to run the JSON through axios and if it does, list will equal response.data.data
    const response = await axios.get(url)
    console.log(response.data.data)
    const classList = ["Controller", "Fighter", "Mage", "Marksman", "Slayer", "Tank", "Support"] //Array for the dropdown options.
    championClassSearch(classList) //runs championClassSearch on list, which populates the dropdown bar with the provided info
  } catch (error) {
    console.log(`Error: ${error}`) //Detailed error logging
  }
}

getOptions() //Calls getOptions

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

async function getChampions() {
  const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json'
  try {
    const response = await axios(url)
    const championPic = response.data.message
    champPic(championPic)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}