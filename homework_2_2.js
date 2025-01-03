// undefined не является числом, и в попытке выполнить математическое действие мы получаем NaN
undefined + 1;

// строка 'true' не преобразовывается в число, потому сравнение строки с булевым значение дает false (разные типы)
'true' == true

// строка 'false' не преобразовывается в число, потому сравнение строки с булевым значение дает false (разные типы)
false == 'false'

// пустая строка это false, а null при не строгом сравнении равен только себе или undefined
null == ''

// сначала выполняется (9 / 3) = 3, затем возводим в степень и получаем 27 (3 ** 3)
3 ** (9 / 3);

// оператор НЕ (!) первый раз преобразовывает строку в false, второй раз в true, получается true == true и в итоге это true
!!'false' == !!'true'

// 0 - это false, после идет оператор "или" значит код выполняется далее, '0' - это true, (пока это наше возвращаемое значение в связке с ||), после идет оператор "и", '0' это true и 1 это true, условие возвращает 1
0 || '0' && 1

// здесь возвращает true
1 < 2 < 3

// третий плюс перед строкой пытается преобразовать в число, но так как строка имеет символы мы получаем NaN, и в результате происходит конкатенация, что дает нам 'fooNaN'
'foo'+ + +'bar'

// слева на право: 3 ** 2 = 9, затем 9 / 3 = 3
3 ** 2 / 3;

// 1 < 2 = true, но 2 > 3 = false, в результате false
1 < 2 > 3;

// +null - это 0, 0 == false - это true, true < 1 - это false (так как 1 == true)
(+null == false) < 1;

// на первом этапе false && true возвращает false и далее идет условно false || true и возвращает true
false && true || true

// сначала вычисляем в скобках (true || true) - возвращает true, затем false && true = false
false && (true || true);

// сначала вычисляем левую сторону: +null - это 0, 0 == false - это true
// вычисляем правую сторону: 1 в любом степени это 1
// true < 1 = false
(+null == false) < 1 ** 5;