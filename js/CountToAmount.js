
// Функция отлавливает изменения значения одого из двух input типа number
// и после преобразования передает новое значение в другой input

function l2b_CountToAmount (count, sum, price) {

// В переменную l2b_count записываем элемент с id 
// переданный через параметр count
var l2b_count = document.getElementById(count);
// В переменную l2b_sum записываем элемент с id 
// переданный через параметр sum
var l2b_sum = document.getElementById(sum);
// В переменную l2b_price записываем цену с id 
// переданную через параметр price
var l2b_price = price;

l2b_count.oninput = function() {
    // Умножаем количество на сумму
    // приводим к целому
    // и обновляем значение value l2b_sum
    l2b_sum.value = parseInt(l2b_count.value * l2b_price );
  };

l2b_sum.oninput = function() {
    // Делим сумму на количество
    // приводим к целому
    // и обновляем значение value l2b_count
    l2b_count.value = parseInt( l2b_sum.value / l2b_price );
  };

}

// 1-й аргумент это ид input с количеством
// 2-й аргумент это ид input с ценой
// 3-й аргумент это цена за 1 единицу
l2b_CountToAmount ("l2b_count", "l2b_sum" , 15);