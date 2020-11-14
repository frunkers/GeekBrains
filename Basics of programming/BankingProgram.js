var sumAmount = +prompt('Введите сумму вклада:');
var percent = +prompt('Введите годовой процент:');
percent = percent / 100;

for (var year = 0; year <= 4; year++) {
   year++;
   alert(year + 'год: ' + sumAmount * percent);
   sumAmount = sumAmount + (sumAmount * percent);
}