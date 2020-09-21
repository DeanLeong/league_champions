//An async/await function that calls the JSON and awaits its response. Done by getOptions.
//Make a list of each class that I want to appear in the search dropdown. Done by championTagSearch.
//Set up an e handler that puts up the images of six champions that are of the correct tag.
//I think that I need to set a variable that let me access each champion's name through a loop and grab tags.
//ex. response.data.data.${name}.tags
//Alternatively I can hardcode the list values to the Tags and then use dot notation to access each champion's tags.

list.forEach(element => {
  console.log(response.data.data.name)
});

const getOptions = async () => {
  const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json'
  try {
    const response = await axios.get(url)
    console.log(response.data.data)
    const list = Object.keys(response.data.data)
    championTagSearch(list)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getOptions()

function championTagSearch(list) {
  const select = document.querySelector('select')
  return list.forEach((champion) => {
    console.log(champion)
    const option = document.createElement('option')
    option.value = `${champion}`
    option.textContent = `${champion}`
    select.append(option)
  })
}