const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while (personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Вы хотите меня обмануть? Введите правильное значение!', '');
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersolnalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов...');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!!');
        } else {
            alert('Произошла ошибка! :(');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
        }
    }
};
