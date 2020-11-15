var sumAmount = +prompt('Введите сумму вклада в рублях:');
var percent = +prompt('Введите годовой процент:');
var yearString;
percent = percent / 100;

for (var year = 1; year <= 5; year++) {
   if (year == 1) {
      yearString = ' год';
   } else if (year == 5) {
      yearString = ' лет';
   } else {
      yearString = ' года';
   }

   alert('Через ' + year + yearString + ' у вас будет: ' + (sumAmount * percent).toFixed(2) + ' руб.');
   sumAmount = sumAmount + (sumAmount * percent);
}