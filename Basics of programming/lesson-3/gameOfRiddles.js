var numberOfCorrectAnswers = 0;
var riddle1 = prompt('Каких камней не бывает в речке?'); // сухих

if (riddle1 == 'Сухих' || riddle1 == 'сухих') {
   alert('Поздравляю, ты угадал!');
   numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
} else {
   alert('Ты не угадал!\nПравильный ответ: сухих');
}

var riddle2 = prompt('Что может в одно и то же время стоять и ходить, висеть и стоять, ходить и лежать?'); // часы

if (riddle2 == 'Часы' || riddle2 == 'часы') {
   alert('Поздравляю, ты угадал!');
   numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
} else {
   alert('Ты не угадал!\nПравильный ответ: часы');
}

var riddle3 = prompt('Где впервые был обнаружен картофель?'); // в земле

if (riddle3 == 'В земле' || riddle3 == 'в земле') {
   alert('Поздравляю, ты угадал!\nИгра окончена.');
   numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
} else {
   alert('Ты не угадал!\nПравильный ответ: в земле');
}

var riddle4 = prompt('Что не вместится даже в самую большую кастрюлю?'); // крышка от этой кастрюли

if (riddle4 == 'Крышка от этой кастрюли' || riddle4 == 'крышка от этой кастрюли' ||
   riddle4 == 'Крышка этой кастрюли' || riddle4 == 'крышка этой кастрюли' ||
   riddle4 == 'Крышка кастрюли' || riddle4 == 'крышка кастрюли' ||
   riddle4 == 'Крышка от кастрюли' || riddle4 == 'крышка от кастрюли' ||
   riddle4 == 'Крышка' || riddle4 == 'крышка') {
   alert('Поздравляю, ты угадал!\nИгра окончена.');
   numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
} else {
   alert('Ты не угадал!\nПравильный ответ: крышка от этой кастрюли');
}

alert('Количество правильных ответов: ' + numberOfCorrectAnswers + ' из 4');