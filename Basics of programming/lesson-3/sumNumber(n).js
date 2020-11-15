var sum = 0;

do {
   var n = +prompt('Введите положительное число');
}
while (isNaN(n) || n < 0);


for (var i = 0; i <= n; i++) {
   document.write(i + '<br/>');
   sum = sum + i; // sum += i
}

document.write('Сумма чисел равна: ' + sum);