window.addEventListener('DOMContentLoaded', () => {

    const centerCubes = document.querySelector('.center__cubes');
    const arrayNumbers = document.querySelectorAll('.center__numbers');
    const player = document.querySelector('.player');
    const right = document.querySelector('.right');
    const rightQuestion = document.querySelector('.question');
    const score = document.querySelector('.score');
    const button = document.getElementById('btn');
    const btn = document.querySelector('.btn');
    const close = document.querySelector('.left__close');
    const progBar1 = document.querySelector('.progress__bar1');
    const progBar2 = document.querySelector('.progress__bar2');
    const wrapper = document.querySelector('.wrapper');
    const radios = document.querySelectorAll('input[type="radio"]');
    const lesson = document.querySelector('.lesson');
    const rightInfo = document.querySelector('.right__info');
    const label = document.querySelector('label');



    const sounds = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const obj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    const colours = ['red', 'green', 'yellow', 'black', 'white', 'blue', 'purple', 'orange', 'pink'];
    const animals = ['ant', 'bee', 'bird', 'cat', 'elephant', 'fox', 'hippo', 'octopus', 'pig'];
    const clothes = ['boots', 'dress', 'hat', 'jeans', 'shoes', 'shorts', 'skirt', 'sweater', 't-shirt'];
    

    let width = 1;
    let i = randomInteger(1, 9);     
    let numbers = [1,2,3,4,5,6,7,8,9];
    let randNumbers = shuffle(numbers); 
    let randColours = shuffle(colours);
    let randAnimals = shuffle(animals);
    let randClothes = shuffle(clothes);
    
    btn.innerHTML = 'Start';

    /* Start game */

    button.addEventListener('click', () => {
        for (let radio of radios) {
            if (radio.checked && radio.value == 'numbers') {
                up();
                lesson.innerHTML = 'Numbers';
                /* createNumberQuestion(); */
                createNumber();
                gameStartNumbers();
                gameRestartNumbers();
                sayOnButton(sounds);
            } else if (radio.checked && radio.value == 'colours') {
                up();
                lesson.innerHTML = 'Colours';
                /* createColourQuestion(); */
                createColours();
                gameStartColours();
                gameRestartColours();
                sayOnButton(colours);
            } else if (radio.checked && radio.value == 'animals') {
                up();
                lesson.innerHTML = 'Animals';
                /* createAnimalQuestion(); */
                createAnimals();
                gameStartAnimals();
                gameRestartAnimals();
                sayOnButton(animals);
            } else if (radio.checked && radio.value == 'clothes') {
                up();
                lesson.innerHTML = 'Clothess';
                /* createClothesQuestion(); */
                createClothes();
                gameStartClothes();
                gameRestartClothes();
                sayOnButton(clothes);

            }
        }    
    }); 

    /* Play songs */

    function sayOnButton (array) {
        btn.addEventListener('click', () => {
            btn.innerHTML = 'Say';
            stopSongs();
            document.getElementById(array[i-1]).play();
        });

        if (lesson.innerHTML != 'Numbers') {
            document.querySelectorAll(`.center__${lesson.innerHTML.toLowerCase().substr(0, lesson.innerHTML.length - 1)}`).forEach(element => {
                element.addEventListener('click', (e) => {
                    stopSongs();
                    document.getElementById(e.target.innerHTML).play();
                });
            });
        } else if (lesson.innerHTML == 'Numbers') {
            document.querySelectorAll(`.center__number`).forEach(element => {
                element.addEventListener('click', (e) => {
                    console.log(e.target.innerHTML);
                    stopSongs();
                    document.getElementById(obj[e.target.innerHTML]).play();
                });
            });
        }
    } 

    function stopSongs() {
        sounds.forEach (sound => {
            const song = document.getElementById(sound);
            song.pause();
            song.currentTime = 0;
        });
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    } 

    function removeElements(element) {
        element.remove();
    }

    function up() {
        wrapper.classList.add('up');
    }

    /* Create Numbers */

    function createNumber() {
        for (let i = 0; i < sounds.length; i++) {
            const element = document.createElement('div');
            element.classList.add('center__number');
            element.innerHTML = randNumbers[i];
            centerCubes.appendChild(element);
        }
    }

    function createNumberQuestion () {
        const element = document.createElement('h1');
        element.classList.add('newQuestion');
        element.innerHTML = `
        <span>${i}</span>
        `;
        rightQuestion.appendChild(element);
    }

    /* Create Colours */

    function createColourQuestion() {
        const element = document.createElement('h1');
        element.classList.add('newQuestion');
        element.innerHTML = `
        <span>${colours[i-1]}</span>
        `;
        rightQuestion.appendChild(element);
    }

    function createColours() {
        for (let i = 0; i < colours.length; i++) {
            const element = document.createElement('div');
            element.classList.add('center__colour');
            element.innerHTML = randColours[i];
            element.style.background = randColours[i];
            centerCubes.appendChild(element);
        }
    }

    /* Create Animals */

    function createAnimals() {
        for (let i = 0; i < animals.length; i++) {
            const element = document.createElement('div');
            element.classList.add('center__animal');
            element.innerHTML = randAnimals[i];
            element.style.backgroundColor = 'white';
            element.style.backgroundImage = `url(jpg/${randAnimals[i]}.png)`;
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundPosition = 'center';
            centerCubes.appendChild(element);
        }
    }

    function createAnimalQuestion() {
        const element = document.createElement('h2');
        element.classList.add('newQuestion');
        element.innerHTML = `
        <span>${animals[i-1]}</span>
        `;
        rightQuestion.appendChild(element);
    }

    /* Creater Clothes */

    function createClothes() {
        for (let i = 0; i < clothes.length; i++) {
            const element = document.createElement('div');
            element.classList.add('center__clothes');
            element.innerHTML = randClothes[i];
            element.style.backgroundColor = 'white';
            element.style.backgroundImage = `url(jpg/${randClothes[i]}.png)`;
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundPosition = 'center';
            centerCubes.appendChild(element);
        }
    }

    function createClothesQuestion () {
        const element = document.createElement('h2');
        element.classList.add('newQuestion');
        element.innerHTML = `
        <span>${clothes[i-1]}</span>
        `;
        rightQuestion.appendChild(element);
    }

    /* createPlayerName(name);
    createPlayerSurName(name); */
    
    function progBar() {
        width = width + 10;
        progBar1.style.width = `${width}%`;
    }

    function gameRestartNumbers() {
        close.addEventListener('click', () => {
            document.querySelectorAll('.center__number').forEach(element => {
                removeElements(element);
            });
            document.querySelector('.newQuestion').remove();
            i = randomInteger(1, 9);
            randNumbers = shuffle(numbers);
            createNumberQuestion(randNumbers);
            createNumber(randNumbers);
            score.innerHTML = 0;
            btn.innerHTML = 'Start';
            progBar1.style.width = 0;
            width = 1;
        });
    }

    function gameStartNumbers() {
        centerCubes.addEventListener('click', (e) => {
            if (e.target.innerHTML != i) {
                score.innerHTML--;
            } else {
                score.innerHTML++;  
                progBar();
                document.querySelectorAll('.center__number').forEach(element => {
                    removeElements(element);
                });
                document.querySelector('.newQuestion').remove();
                i = randomInteger(1, 9);
                randNumbers = shuffle(numbers);
                createNumber(randNumbers);
                createNumberQuestion(randNumbers);
            }
        });
    }

    function gameRestartColours() {
        close.addEventListener('click', () => {
            document.querySelectorAll('.center__colour').forEach(element => {
                removeElements(element);
            });
            document.querySelector('.newQuestion').remove();
            i = randomInteger(1, 9);
            randColours = shuffle(colours);
            createColourQuestion();   
            createColours(randColours);
            score.innerHTML = 0;
            btn.innerHTML = 'Start';
            progBar1.style.width = 0;
            width = 1;
            sayOnButton(colours); 
        });
    }

    function gameStartColours() {
        centerCubes.addEventListener('click', (e) => {
            if (e.target.innerHTML != randColours[i-1]) {
                score.innerHTML--;
            } else {
                score.innerHTML++;  
                progBar();
                document.querySelectorAll('.center__colour').forEach(element => {
                    removeElements(element);
                });
                document.querySelector('.newQuestion').remove();
                i = randomInteger(1, 9);
                randColours = shuffle(colours);
                createColours(randColours);
                createColourQuestion(randColours);
                sayOnButton(colours);
            }
    
        });
    }
    
    function gameRestartAnimals() {
        close.addEventListener('click', () => {
            document.querySelectorAll('.center__animal').forEach(element => {
                removeElements(element);
            });
            document.querySelector('.newQuestion').remove();
            i = randomInteger(1, 9);
            randAnimals = shuffle(animals);
            createAnimalQuestion();
            createAnimals(randAnimals);
            score.innerHTML = 0;
            btn.innerHTML = 'Start';
            progBar1.style.width = 0;
            width = 1;
            sayOnButton(animals);
        });
    }

    function gameStartAnimals() {
        centerCubes.addEventListener('click', (e) => {
            if (e.target.innerHTML != randAnimals[i-1]) {
                score.innerHTML--;
            } else {
                score.innerHTML++;  
                progBar();
                document.querySelectorAll('.center__animal').forEach(element => {
                    removeElements(element);
                });
                document.querySelector('.newQuestion').remove();
                i = randomInteger(1, 9);
                randAnimals = shuffle(animals);
                createAnimals(randAnimals);
                createAnimalQuestion(randAnimals);
                sayOnButton(animals);
            }
        });
    }

    function gameRestartClothes() {
        close.addEventListener('click', () => {
            document.querySelectorAll('.center__clothes').forEach(element => {
                removeElements(element);
            });
            document.querySelector('.newQuestion').remove();
            i = randomInteger(1, 9);
            randClothes = shuffle(clothes);
            createClothesQuestion();
            createClothes(randClothes);
            score.innerHTML = 0;
            btn.innerHTML = 'Start';
            progBar1.style.width = 0;
            width = 1;
            sayOnButton(clothes); 
        });
    }

    function gameStartClothes() {
        centerCubes.addEventListener('click', (e) => {
            if (e.target.innerHTML != randClothes[i-1]) {
                score.innerHTML--;
            } else {
                score.innerHTML++;  
                progBar();
                document.querySelectorAll('.center__clothes').forEach(element => {
                    removeElements(element);
                });
                document.querySelector('.newQuestion').remove();
                i = randomInteger(1, 9);
                randClothes = shuffle(clothes);
                createClothes(randClothes);
                createClothesQuestion(randClothes);
                sayOnButton(clothes);
            }
        });
    }
    
});


