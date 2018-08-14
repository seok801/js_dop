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
