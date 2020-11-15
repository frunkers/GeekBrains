var answer = parseInt(Math.random() * 100);
var userAnswer1 = prompt('Первый игрок: Угадайте моё число от 0 до 100:');
var userAnswer2 = prompt('Второй игрок: Угадайте моё число от 0 до 100:');

do {
   if ((userAnswer1 == answer || userAnswer1 == null) || (userAnswer2 == answer || userAnswer2 == null)) {
      break;
   }
   if (userAnswer1 > answer) {
      alert('Первый игрок: Моё число меньше!');
   } else if (userAnswer1 < answer) {
      alert('Первый игрок: Моё число больше!');
   }

   if (userAnswer2 > answer) {
      alert('Второй игрок: Моё число меньше!');
   } else if (userAnswer2 < answer) {
      alert('Второй игрок: Моё число больше!');
   }
}
while ((userAnswer1 != answer) || (userAnswer2 != answer));

if (userAnswer1 == answer) {
   alert('Первый игрок: Поздравляю, Вы угадали!');
}
if (userAnswer2 == answer) {
   alert('Второй игрок: Поздравляю, Вы угадали!');
}
document.write('<hr>Правильное число: ' + answer + '<hr>');