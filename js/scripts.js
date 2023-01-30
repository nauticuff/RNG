let names = [];
let previousNames = [];
let injectName = document.querySelector('[data-name-inject]');
let button = document.getElementById('button');
button.addEventListener('click', () => {
    callWithAsync()
});

let victimOne = document.querySelector('[data-victim-one]')
let victimTwo = document.querySelector('[data-victim-two]')
let victimThree = document.querySelector('[data-victim-three]')
let victimFour = document.querySelector('[data-victim-four]')
let victimFive = document.querySelector('[data-victim-five]')


async function callWithAsync() {
    try {
        const response = await fetch('../data/data.json');
        names = await response.json();
        
        // Do something with the data
        let rndNum = Math.floor(Math.random() * 31) + 2;
        injectName.textContent = names.names[rndNum];

        previousNames.push(names.names[rndNum]);
        let last = previousNames.length - 1;
        console.log(previousNames)

        victimOne.textContent = previousNames[last];
        victimTwo.textContent = previousNames[last - 1];
        victimThree.textContent = previousNames[last - 2];
        victimFour.textContent = previousNames[last - 3];
        victimFive.textContent = previousNames[last - 4];

    } catch (error) {
        // Handle the error
        console.error(error);
    }
}










