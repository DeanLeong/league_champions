//http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json

const getOptions = async () => {
  const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json'
  try {
    const response = await axios.get(url)
    console.log(response.data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getOptions()
