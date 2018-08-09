/* Выводим в консоль произведение (умножение) цифр этого числа */

let num = 33721,
    arr = new Array(); //инициализируем объект

//console.log(num%10);
//console.log(arr);

    do { arr.unshift(num%10);} //запускаем цикл, добавляем элемент в начало массива,  num%10 равно 1, в массив папдает число и продолжаются действия
   
    while(num = Math.floor(num/10)); //делай цикл, num = 3372.1, присваиваем округленное число до целого в меньшую сторону num/10, получаем 3372, 
    								//Math.floor() округляет дробь в меньшую сторону
                                     //3372 попадает arr.unshift(num%10) и получается 2, котрое записывается в массив
   //console.log(arr);
    let result = arr[0] * arr[1] * arr[2];
    	console.log(result);

/* Полученный результат возводим в степень 3, используя только 1 оператор */

    let stepen = Math.pow(result, 3);
        console.log(stepen);



/* Выводим на экран первые 2 цифры полученного числа */
    arr_2 = new Array();
        do { arr_2.unshift(stepen%10);}
        while(stepen = Math.floor(stepen/10));


        for (let i = 0; i < arr_2.length-4; i++) {
        	document.write(arr_2[i]);
        }
    
    //let n = 2;
        //console.log(arr_2.slice(0, n));