alert('Hello, World!');
/*
        Итак, инструкции — синтаксические функции и команды, которые выполняют действия. 
        Отделять их нужно точкой с запятой.
        При переходе на новую строку их можно не ставить, но хорошим тоном считается их 
        ставить даже тогда. Обычно каждая инструкция на
        новой строке. 

        alert('Hi, mom');

    */

/*
    'use strict' для перехода в строгий режим или же современный, изменит поведение 
    некоторых функций. Рекомендуектся всегла начинать с
    этого свои скрипты. Некоторые функции языка автоматически включают строгий режим. 
*/

/*
    Итак, переменные должны хранить в себе какие-то значения. 

    Пример: 

    let Hello = 'Hi';
    alert('Hi');

    var — устаревший способ обновления переменной, подробднее о отличиях поговорим позже 

    const — переменная, значение которой не может изменяться, 
    верхний регистр если значение жесткое, известно заранее и не меняется и разный
    регистр если вычисляется. 

    Разрешенные символы: _ $ abcABC, некоторые слова зарезервированы

    Осмысленные имена переменных!

    let name = 'Джон';
    let admin = name;
    alert(admin);

    let currentUserName = 'Пользователь';
    let ourPlanetName = 'Earth';

*/

/*
    Итак, какие же типы данных у нас могут хранится в переменных?

    1. number

    let myNumber = 12345; Без кавычек

    Infinity - бесконечность, больше любого числа. А еще -Infinity, бесконечность, меньше любого числа.
    NaN - вычислительная ошибка.

    BigInt - числах не может быть больше 16 цифр, но если надо, то ставим b в конце, целыми числами, важно.

    2. строка string, заключена может быть в три типа кавычек.

    Двойные и одинарные — одно и то же. `` Обратные же интереснее. В них уже можно встраивать значения
    с помощью ${…}.

    Например

    let userName = `Имя`;
    alert(`Привет, ${userName}`);

    3. boolean, логические. Только true или false

    let iAmOldMan = false;

    let itIsTrue = 4 > 1;
    alert(itIsTrue);

    4. null

    Пусто, ничего, неизвестно.

    let name = null;
    alert(name);

    5. undefined

    Значение не было присвоено.

    let x;
    alert(x);

    6. object

    Хранит в себе более сложные объекты или же коллекции данных.

    symbol используют для создания уникальных id объектов.

    7. typeof возвращает тип аргумента

    Работает с кавычками и без.

    typeof Math; объект, который представляет математические операции и константы

    typeof null; объект, но это не верно

    typeof alert; функция, но в JS нет такого типа, они относятся к объектам. Но на практике это удобно.

*/

/*
    Иногда нужно преобразовать данные хотя чаще всего функции и операторы сами приводят значения к
    нужному типу.

    1. Строковое преобразование

    alert(awfa); string

    let myName = String(true);
    alert(typeof myName); тоже string

    2. Численное преобразование в матем функциях и выражениях, например, когда операция деления применяется
    не к числу. Но с + такое уже вроде не пройдет

    alert('6' + '2')

    let num = Number('123');
    alert(typeof num);

    Полезно, когда тебе с формы что-то приходит текстом

    Если строка не может быть приведена к числу, то нам вернут значение NaN(не удалось)

    let num = Number('undefined');
    alert(num); NaN

    let num = Number('null');
    alert(num); 0

    let num = Number('true/false');
    alert(num); 1/0

    let num = Number('');
    alert(num); Если пусто, то 0, пробелы игнор, если не цифры, то не удалось

    3. Логическое преобразование

    Может быть в логических операторах, но так же можно задать явно Boolean(true)

    Пустые значения: 0, NaN, null, undefined, становятся false.

    Но строка с пробелом у нас уже будет true, с нулем так же true, но строка. Если строка пустая,
    то false, если полная, то true.

    "" + 1 + 0 //1 Неправильно, олжно быть '10' "" считает за пустую сроку и тупо делает "1",
     а дальше дело техники

    "" - 1 + 0 //-1 Правильно. Отнимание арпиори с числами, поэтому "0" - 1, а дальше нормально
    true + false //1 Правильно. true это 1, false 0
    6 / "3" //2 Правильно. Деление априори к цифрам
    "2" * "3" //6 Правильно. Тоже, что и с делением
    4 + 5 + "px" //"9px" Правильно. Сначала сложение, поэтому 9, затем + строка
    "$" + 4 + 5 //$9 Неправильно. Сначала у нас строка складывается с числом, поэтому получается '$4', а
    заем уже и "$45"
    "4" - 2 //2 Правильно, строка 4 преобразовывается в число.
    "4px" - 2 // NaN Правильно, при отнимании строка преобразовывается читается как число, но там не
    только цифра
    7 / 0 //0   Неправильно. На ноль можно делить бесконечное кол-во раз. Будет infinity
    "  -9  " + 5 //-95 Неправильно. Добаляем строку, поэтому пробелы сохраняются   "-9  5"
    "  -9  " - 5 //-14 Правильно, математическое действие, пробелы у -9 игнорируются, получается -14
    null + 1 //1 Правильно, null после преобразования становится нулем
    undefined + 1 //NaN Правильно. undefined после преобразования в число выбьет NaN
    " \t \n" - 2 //NAn Неправильно \t \n какие-то спец символы. Поэтому будет 0 - 2 = -2. Эти символы
    обрежутся как пробелы и останется пустая строка
*/

/*
    Операторы в JS. Нам знакомы + - * и тд со школы. Что в них не входит?

    1. Термины

    ! Операнд, то к чему пременяется оператор. !

    !Унарный оператор пременяется только к одному операнду.!

    !Унарный минус!

    let x = 1;
    x= -x;
    alert(x); //-1

    !Бинарный оператор к двум операндам!

    let x = 1, y = 3;
    alert (y - x); // бинарный минус

    2. Бинарный + и строки и др

    !Если бинарный плюс применить к строкам, то они сложатся!

    let s = "моя" + "строка";
    alert(s); //моястрока

    Если хоть один из операндов с плюсом строка, то все к строке.
    Операция выполняется слева направо, это важно.

    alert(2 + 2 + "1"); //41, а не 221

    3. Унарный +

    У плюса есть и унарная форма, она не поменяет число, но преобразует операнд в число
    Например, с HTML формы пришли две строки, но нам нужно сделать их числами

    let weightApples = "1";
    let weightOranges = "2"'

    alert(+weightApples + +weightOranges); //3, а не 12

    4. Приоритеты

    У операторов есть приоритеты, но скобки всегда важнее приоритета. У унарных всегда приоритет
    выше, нежели у бинарных. Можно не запоминать, гуглить.

    Приоритет	Название	Обозначение
    …	            …	…
    16	        унарный плюс	+
    16	        унарный минус	-
    14	        умножение	    *
    14	        деление	/
    13	        сложение	    +
    13	        вычитание	    -
    …	        …	…
    3	        присваивание    =
    …	        …	…

    4. Присваивание

    У присваивания один из самых низких приоритетов, поэтому сначала выполнится другие операторы,
    а потом присваивание.

    Все операторы возвращают значения. x = value запишет value в x и вернет его.

    let a = 1;
    let b = 2;

    let c = 5 - (a = b + 1); // Сначала b + 1, затем a перезапишется и затем 5 - 3 = 2;

    alert(a); //3
    alert(c); //2

    5. Взятие остатка

    Еще один интересный оператор — взяnия остатка, записывается как % к ним никак не относится.

    alert( 5 % 2); //1

    6. Возведение в степень

    Оператор возведения в степень  **

    let a = 2;
    let b = 3;
    alert(a ** b); //8 , число a на само себя b раз

    Можно и с нецелыми числами

    alert( 16 ** (1/2)); // 4, потому что корень квадратный

    7. ИНКРЕМЕНТ/ДИКРЕМЕНТ

    Увеличивает или уменьшает переменную на еденицу, ++увеличивает --уменьшает

    ++ -- ОПЕРАТОРЫ

    let x = 1;
    ++x
    alert(x)// 2, как x = x + 1, только короче

    Можно применить только к переменной ++5 будет ошибкой.

    Есть две записи, перфиксная ++x, а так же постфиксная x++

    ПРЕФИКСНАЯ ФОРМА СНАЧАЛА УВЕЛИЧИВАЕТ, А ЗАТЕМ ПРИСВАИВАЕТ, ПОСТФИКСНАЯ ПРИСВАИВАЕТ, А ЗАТЕМ
    УВЕЛИЧИВАЕТ

    Можно увидеть, если нам только нужно вернуть значение.

    Префиксная вернет новое значение, а постфиксная старое.

    Например

    let x = 1;
    ++x;
    alert(x); //2

    let x = 1;
    let y = x++; Короче, сам x сначала вернет 1, а потом увеличится
    alert(x);

    Итоги: если результат оператора не используется, а нужно только увеличить переменную, то без
    разницы

    А если будем присваивать, выводить уже с оператором ++x, то разница тогда уже есть.

    ++x сразу вернет результат x++ Увеличит вернет старое, а затем увеличит

    Так же можно внутри выражений

    let x = 1;
    alert( 2 * ++x);//4

    let x = 1;
    alert( 2 * x++); //1
    alert(x); //2

    Но делать так не хорошо. Одна строка и несколько действий.

    let x = 1;
    alert( 2 * x); //1
    x++;


    8. Побитовые операторы работают с 32-разрядными целыми числами, или приводят к ним, на уровне их
    внутреннего двоичного представления.

    9. Если нужно применить оператор к переменной и сохранить результат в ней же.

    let x = 3;
    x = x + 2; // 5

    Но можно это заменить так

    let x = 3;
    x += 5;

    Приоритет такой же как и для обычного присваивания

    let n = 1;
    n += 3 + 1; Сначала 4, потом 1 + 4. А не 1+3, а затем непонято что.

    10. Оператор запятая

    Приоритет ниже присваивания, это очень важно. Позволяет вычислять несколько выражений и вернет
    последнее

    let x = ( 1 + 1, 3 + 2 );
    alert(x); //5

    Но из-за низкого приоритета без скобок будет так.

    let x = 1 + 1, 3 + 2;
    alert(x); //2, сначала будет lex x = 2, 5, затем в порядке очереди 2 присвоят, 5 откинут

    Нихера оно так не будет, ошибку выбьет.

    // три операции в одной строке
    for (a = 1, b = 3, c = a * b; a < 10; a++) {
        ...
    }

    Чет для фреймворка, но пока знать рано наверное.

    Задачки

    let a = 1, b = 1;

    let c = ++a;
    let d = b++;

    alert(a); //2
    alert(b); //2
    alert(c); //2
    alert(d); //1

    У преинкримента приоритет выше, поэтому a сначала увеличится и станет 2, а затем присвоится c, которая
    тоже станет 2. У постинкримента приоритет тоже выше, но сначала d присвоится b, а затем b увеличится
    будет 2.



    let a = 2;
    let x = 1 + (a *= 2);

    alert(a) // 4
    alert(x) // 5

    Сначала a = 4, затем x = 1 + 4


 */

/*
    Операторы сравнения.

    1. Известные из математики

    a > b; a < b; Больше меньше.
    a >= b; a <= b; Больше или равно, меньше или равно.
    a == b; Равенство, = присваивание
    a != b; Неравенство

    Возвращает логический тип сначения, true or flase.

    let x = 1 > 2;
    alert(x); //false
    Выше присваеваем результат переменной.

    2. Сравнить можно и сторки

    alert("А" > "Я");//false

    Сначала первая буква, потом вторая и пока не определит, верхний регистр проигрывает нижнему

    3. Сравнения разных типов. Строку попытается привести к числу и сравнит, логический тип к 1 или 0
    затем тоже сравнит.

    Может быть такое, что два значения будут равны, хотя одно из них true, а другое false

    let x = 0;
    alert( Boolean(x) ); //false

    let y = "0";
    alert( Boolean(x) ); //true

    alert( x == y ); //true

    Строка "0" не пуста, поэтому она true. Но равенство преведет строчку к числу, поэтому она станет false;
    false == false; //true

    4. Строгое преобрзование

    Обычное сравнение == все преобразует к числам
    alert( 0 == false ); // true, false станет числом и выпонится, тоже самое и с пустой строкой

    Тогда нам поможет строгое сравнение, оно обозначается === и не приводит результаты к числам.
    Такая же история и со строгим неравнством !== оно немедленно что-то сравнит не приводя к числам

    5. null и undefined

    При сторогом сравнении вернет false, т.к типы не равны

    А с обычным сравнением null == undefined и не равно чему либо другому.

    Поэтому alert( null == undefined ); //true, специальное правило, которое надо знать

    При использовании >, <, >=, <= null станет 0, undefined NaN

    Поэтому alert( null > 0 ); приведет null к 0 и вернет false
    Поэтому alert( null == 0 ); тоже false, т.к null НЕ РАВЕН ЧЕМУ ЛИБО ДРУГОМУ
    Поэтому alert( null >= 0); true, null преобразует 0, с точки зрения математики верно

    undefined нельзя с сравнить с чем-то кроме null!

    С осторожностью нужно сравнивать эти значения с чем либо, только если это не строгое неравенство

    6. Задачки
    5 > 4 //true
    "ананас" > "яблоко" //true, неправильно, если идет раньше в алфавите, то значит меньше
    "2" > "12" //false, но думал, что тут сравнение чисел, а тут сравнение строк, т.к обе строки, а не одна
    строка и число
    undefined == null //true undefined == только null и самому себе
    undefined === null //false Строгое сравнение
    null == "\n0\n" //false null == undefined и самому себе
    null === +"\n0\n" //false строгое сравнение разных типов

*/

alert( null ==  null )