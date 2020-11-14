var a = +prompt('Введите первое число: ');
var b = +prompt('Введите второе число: ');
var max;

if (a > b) {
   max = a;
} else if (a == b) {
   alert('Числа равны!');
   max = a;
} else {
   max = b;
}

alert('Максимальное число: ' + max);