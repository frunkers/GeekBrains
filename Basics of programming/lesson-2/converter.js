   var euro = 91.79;
   var dollar = 77.6;
   var numberOfRubles = +prompt('Введите кол-во рублей:');

   alert('Кол-во евро: ' + (numberOfRubles / euro).toFixed(2) + '\n' +
      'Кол-во долларов: ' + (numberOfRubles / dollar).toFixed(2));