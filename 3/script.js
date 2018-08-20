let str = "урок-3-был слишком легким";
	

newStr = str.charAt(0).toUpperCase() + str.slice(1);
newStr = newStr.replace(/-/g, " ");
newStr = newStr.substring(0, newStr.lastIndexOf(" "));
newStr = newStr.replace(/ом/g, "о");

console.log(newStr);

let arr = [20, 33, 1, "Человек", 2, 3];
    num = arr[3];

console.log(typeof(num.length));
document.write(num);


/*
Василий Лотыш  http://theory.phphtml.net/javascript/string/lastIndexOf.html вот хорошая статья по  lastIndexOf
Метод lastIndexOf - поиск подстроки в стро...
Метод lastIndexOf осуществляет поиск совпадений справа налево, то есть с конца строки.
@Василий Лотыш у тебя в коде метод substring(start, end) и внутри него myString.lastIndexOf(" "),  в качестве start указан 0 , тоесть первый символ а в качестве end у тебя указан метод  lastIndexOf когда этот метод выполнится то вместо него подставится цифра которая соответствует положению первого найденного пробела в предложении с конца.
@Сергей Лазаренков привет, видел твои сообщения в чате помощь, разобрался или вопрос еще актуален?


 Денис Исаев
В цикле for
Василий Лотыш
как в for указать
Арам Григорян
for (let i =0 ; i<n;i+2)
Роман Гордин
непривычно слушать тебя в x1
Николай Юшин
(2*i +1)?
Сергей Милицын
для каждого второго for(i = 0; i <arr.length; i++){
i++
console.log(i);
}
Владислав Крылов
for(let i =0; i<arr.lenght; i+2) {
console.log(arr[i])
}
Дмитрий Попов
for (i=0; i < 100: i+3) {console_log(arr[i] }; каждый третий элемент
Денис Исаев
let arr = [1, 2, 3, 4, 5];
for (let i=0; i < arr.length; i++) {
 if ( i % 2) {
  console.log(arr[i]);
}
} 
*/