let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms.length >= 50) {
        numberOfFilms = +prompt('Вы хотите меня обмануть? Введите правильное значение!', '');
    }
}

/* start();
detectPersolnalLevel(); */

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько вы его оцените','');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            if (!isNaN(b) && b > 0 && b < 10) {
                personalMovieDB.movies[a] = b;
            } else {
                alert('Введите заново название фильма и оцените фильм от 0 до 10!');
                i--;
            }
        } else {
            alert('Вы ввели неверное значение');
            i--;
        } 
    }
}

/* rememberMyFilms(); */

function detectPersolnalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов...');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!!');
    } else {
        alert('Произошла ошибка! :(');
    }
}


function showMyDB(trushka) {
    if (!trushka) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}

//writeYourGenres();

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошёл этот урок');
});