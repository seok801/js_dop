let week = [
         'Понедельник',
         'Вторник',
         'Среда',
         'Четверг',
         'Пятница',
         'Суббота',
         'Воскресенье'
        ];


    for (i = 0; i < week.length; i++) {
        let myweek = week[i];

        if (week[i] == "Суббота" || week[i] == "Воскресенье") {

            document.write('<p><strong>' + myweek + '</strong></p>');

            } else {
                document.write('<p>' + myweek + '</p>');
            }
        }

/*
let saturday = document.getElementsByTagName('p')[5],
    sunday = document.getElementsByTagName('p')[6],
    thursday = document.getElementsByTagName('p')[3];

    saturday.style.fontWeight = 'bold';
    sunday.style.fontWeight = 'bold';
    thursday.style.fontStyle = 'italic';
*/



arr = [];

    arr[0] = '34567';
    arr[1] = '222333';
    arr[2] = '34568';
    arr[3] = '77885';
    arr[4] = '7688999999';
    arr[5] = '8112211';
    arr[6] = '3666664567';
        
for (let i = 0; i < arr.length; i++) {

    let sum = arr[i];
        mySlow = sum.charAt(0);

    if (mySlow == '3' || mySlow == '7') {

       console.log(arr[i]);
    }
        
}

        