var answer = parseInt(Math.random() * 100);
var userAnswer1 = +prompt('Первый игрок: Угадайте моё число от 0 до 100:');
var userAnswer2 = +prompt('Второй игрок: Угадайте моё число от 0 до 100:');

while ((userAnswer1 || userAnswer2) != answer) {
   while (userAnswer1 != null) {

      if (userAnswer1 == answer) {
         alert('Первый игрок: Поздравляю, Вы угадали!');
         break;
      } else if (userAnswer1 > answer) {
         alert('Первый игрок: Моё число меньше!');
      } else if (userAnswer1 < answer) {
         alert('Первый игрок: Моё число больше!');
      }
   }
   while (userAnswer2 != null) {

      if (userAnswer2 == answer) {
         alert('Второй игрок: Поздравляю, Вы угадали!');
         break;
      } else if (userAnswer2 > answer) {
         alert('Второй игрок: Моё число меньше!');
      } else if (userAnswer2 < answer) {
         alert('Второй игрок: Моё число больше!');
      }

   }
   userAnswer1 = +prompt('Первый игрок: Введите число ещё раз:');
   userAnswer1 = +prompt('Второй игрок: Введите число ещё раз:');
}

document.write('Правильное число: ' + answer);