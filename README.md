# # Project Overview

https://deanleong.github.io/league_champions/

## Project Name

League of Legends Champion Finder

## Project Description
The final design on this project is to make a website targeted towards people who have never played the game league of legends before. There are currently 150 champions in the game with new releases on a regular basis. The idea is to help new players find champions they may like by searching via a character's "class" so a search for "Fighter" is going to return champions that have "Fighter" in their descriptions.

## API and Data Sample
The API I'm going to be using is http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json This seems like a really solid API and it is updated by League of Legends' developer, Riot Games. For some reason on Riot's own API list there is not an API specifically for champions, but there is this one on ddragon that is up to date to the latest patch of the game. Main site: https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html

```
{type: "champion", format: "standAloneComplex", version: "10.19.1", data: {…}}
data:
Aatrox:
blurb: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find..."
id: "Aatrox"
image:
full: "Aatrox.png"
group: "champion"
h: 48
sprite: "champion0.png"
w: 48
x: 0
y: 0
__proto__: Object
info: {attack: 8, defense: 4, magic: 3, difficulty: 4}
key: "266"
name: "Aatrox"
partype: "Blood Well"
stats: {hp: 580, hpperlevel: 90, mp: 0, mpperlevel: 0, movespeed: 345, …}
tags: (2) ["Fighter", "Tank"]
title: "the Darkin Blade"
version: "10.19.1"
__proto__: Object
Ahri: {version: "10.19.1", id: "Ahri", key: "103", name: "Ahri", title: "the Nine-Tailed Fox", …}
Akali: {version: "10.19.1", id: "Akali", key: "84", name: "Akali", title: "the Rogue Assassin", …}
Alistar: {version: "10.19.1", id: "Alistar", key: "12", name: "Alistar", title: "the Minotaur", …}
Amumu: {version: "10.19.1", id: "Amumu", key: "32", name: "Amumu", title: "the Sad Mummy", …}
```

## Wireframes

https://imgur.com/a/PgLN4s8

![wireframe homepage](https://i.imgur.com/Iy4gvO1.png)
![mobile homepage](https://i.imgur.com/7NzQ0mT.png)

Homepage - Homepage is the primary desktop page of the website. This page will contain the search bar and/or buttons. 

Homepage Mobile - Same as Homepage but scaled to mobile screens. This will be my primary media query.

Champion Page - This page is what will show after a champion's image is clicked. It will display the champion's image and their blurb description. I it will also include a back button or a search bar if I can figure out how to implement that.

Champion Page Mobile - Same as champion page but scaled to mobile screens. 

### MVP/PostMVP

MPV -
1. The champion images are pulled up along with their names and titles. x
2. I want each search to return six results. x
3. The page adjusts to a mobile screen. x

Post MVP -
1. Extra UI Interaction. x
2. Show abilities of champion - Might require more APIs.
3. Another API
4. Second page with more detain when champion is clicked on.
5. A hover function so that when images are hovered over they enlarge and it is clear that the image is clickable. x - Hover function yes but not clickable.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes / README| Complete
|Sept 21| Project Approval / Basic HTML Setup / Basic JS Functionality - The Searchbox or Buttons| Incomplete
|Sept 22| CSS Design - Make the six boxes to hold the champion info. JS - Make the boxes clickable and go to the second page? | Incomplete
|Sept 23| MVP - Search function works, Six results come up, The images are hoverable.| Incomplete
|Sept 24| Post MVP/Styling - More interactive buttons or loading icons, Show abilities, second API| Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix
https://imgur.com/a/QvflsbV

![priority matrix](https://i.imgur.com/f2dFG1h.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| JS Axios | H | 2hrs| 30mins | 30mins |
| Basic HTML of site | H | 3hrs| 2hrs | 2hrs |
| JS Search Functionality | H | 8hrs| 10hrs | 10hrs |
| JS General| H | 3hrs| 5hrs | 5hrs |
| JS Refactor/Cleanup| H | 2hrs| 1hrs | 1hrs |
| Image Results | H | 3hrs| 3hrs | 3hrs |
| Clear old Images | l | 3hrs| 1hrs | 1hrs |
|Breakpoints/Media Query| H | 5hrs| 3hrs | 3hrs |
| General CSS Design | H | 3hrs| 4hrs | 4hrs |
| Post-MVP CSS Design | l | 3hrs| 4hrs | 5hrs |
| Image File Organization | l | 2hrs| 2hrs | 2hrs |
| Remove duplicates | l | 5hrs| 2hrs | 2hrs |
| Total | H | 38hrs| 38.5hrs | 38.5hrs |

## Code Snippet

This code snippet is something that I'm proud of because it is something of a crossroad in my code. Within it are callbacks to several other functions and they all come together here to actually make the array of the desired champions, that are then displayed on page later in the program. I'm impressed with this code mainly becuase of all of the callbacks and methods involved. One of the few ways that this could have been improved is using the set method to remove duplicates.

```
function randomizeChampions(filteredChampions) { //use an if else statement for search? If support, run randomize champions etc? - the filter takes care of this.
  let randomizedChampions = [] //Empty array that the randomized champions are going to be pushed into
  for (let i = 0; i < 6; i++) { //for loop so that only six champions actually go into the array
    let num = Math.floor(Math.random() * filteredChampions.length) //This is the part where the filered champions are randomized
    randomizedChampions.push(filteredChampions[num]) //The randomized champions are then pushed into the array

  }
  renderChampions(randomizedChampions) //Runs renderChampions for each randomizedChampions
}
```

## Change Log
The initial plan was to have a second page as a post-MVP project. The second page would be accessed by clicking on the champion image and would take the user to a more detailed page about that champion. The reason this wasn't done in post-MVP is that there wasn't an applicable API that fit the scope of the project.

Images had to be downloaded and then uploaded to Github. Some also had to be renamed to show on page.
