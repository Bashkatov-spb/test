const personalMovieDB = {
  count: () => {
    var numberOfFilms;
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ''); 
    while (numberOfFilms == '' || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Вы хотите меня обмануть? Введите правильное значение!', '');
    }
    if (numberOfFilms < 10) {
      alert('Просмотрено довольно мало фильмов...');
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
      alert('Вы классический зритель!');
    } else if (numberOfFilms > 30) {
      alert('Вы киноман!!');
    } else {
      alert('Произошла ошибка! :(');
    }
  },
  movies: () => {
      const movies = [];
      for (let i = 0; i < 2; i++) {
          const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько вы его оцените','');
          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              if (!isNaN(b) && b >= 0 && b <= 10) {
                
                movies[i] = b;
              } else {
                  alert('Введите заново название фильма и оцените фильм от 0 до 10!');
                  i--;
              }
          } else {
              alert('Вы ввели неверное значение');
              i--;
          } 
      }
      return movies;
  },
    actors: {},
    genres: () => {
      const genres = [];
      for (let i = 1; i <= 3; i++) {
          genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
          if (genres[i-1] == '' || genres[i-1] === null || genres[i-1].length >= 50) {
            alert('Вы ввели некорректный жанр, попробуйте ещё раз!');
            i--;
          }
      }
      genres.forEach(element => console.log(`Любимый жанр №${(element)} - это ${genres[element - 1]}`)) 
  },
    privat: false
};

personalMovieDB.count();
personalMovieDB.genres();
toggleVisibleMyDB();
/* showMyDB(); */

function toggleVisibleMyDB() {
  if (personalMovieDB.privat) {
    personalMovieDB.privat = false;
  } else {
    personalMovieDB.privat = true;
  }
}

/* function showMyDB(trushka) {
  if (!trushka) {
      console.log(personalMovieDB);
  }
}
 */


/* rememberMyFilms(); */



/*


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
 */