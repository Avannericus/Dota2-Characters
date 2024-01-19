const container = document.getElementById("heroesContainer");
let heroes = [["Axe", "Tank"], ["Crystal Maiden", "Support"]];
let heroesContainer = document.getElementById("heroesContainer");
let nameInput = document.getElementById("heroName");
let classInput = document.getElementById("heroClass");
let newHeroName = nameInput.value;
let newHeroClass = classInput.value;

let newElement = document.createElement("div");
document.body.appendChild(newElement);

function displayHeroes() {
    let heroesContainer = document.getElementById("heroesContainer");
    heroesContainer.innerHTML = '';
    for (let i = 0; i < heroes.length; i++) {
        let heroDiv = document.createElement("div");
        heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;
        heroesContainer.appendChild(heroDiv);
    }
}

document.getElementById("addButton").addEventListener("click", addHero);

function addHero() {
    let nameInput = document.getElementById("heroName");
    let classInput = document.getElementById("heroClass");
    let newHero = [nameInput.value, classInput.value];
    heroes.push(newHero);
    displayHeroes();
    nameInput.value = "";
    classInput.value = "";
}

