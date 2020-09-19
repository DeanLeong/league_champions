# # Project Overview

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

Homepage - Homepage is the primary desktop page of the website. This page will contain the search bar and/or buttons. 
Champion Page - This page is what will show after a champion's image is clicked. It will display the champion's image and their blurb description. I it will alos include a back button or a search bar if I can figure out how to implement that.
Homepage Mobile - Same as Homepage but scaled to mobile screens.
Champion Page Mobile - Same as champion page but scaled to mobile screens.

### MVP/PostMVP

MPV -
1. The champion images are pulled up along with their names and titles.
2. I want each search to return six results.
3. A hover function so that when images are hovered over they enlarge and it is clear that the image is clickable.

Post MVP -
1. Extra UI Interaction.
2. Show abilities of champion - Might require more APIs.
3. Another API

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes / README| Incomplete
|Sept 21| Project Approval / Basic HTML Setup / Basic JS Functionality - The Searchbox or Buttons| Incomplete
|Sept 22| CSS Design - Make the six boxes to hold the champion info. JS - Make the boxes clickable and go to the second page? | Incomplete
|Sept 23| MVP - Search function works, Six results come up, The images are hoverable.| Incomplete
|Sept 24| Post MVP/Styling - More interactive buttons or loading icons, Show abilities, second API| Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix
https://imgur.com/a/QvflsbV



## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| JS Axios | H | 2hrs| hrs | hrs |
| Basic HTML of site | H | 3hrs| hrs | hrs |
| JS Search Functionality | H | 4hrs| hrs | hrs |
| Image Results | H | 4hrs| hrs | hrs |
| Clear old Images | l | 3hrs| hrs | hrs |
|Breakpoints| H | 5hrs| hrs | hrs |
| ButtonClick goes to Second page | l | 5hrs| hrs | hrs |
| Second page HTML| l | 2hrs| hrs | hrs |
| Second page js Functionality | l | 4hrs| hrs | hrs |
| Second page CSS| l | 3hrs| hrs | hrs |
| General CSS Design | l | 3hrs| hrs | hrs |
| Total | H | 38hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
