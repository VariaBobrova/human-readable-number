function toReadable(num) {
    let str = "";
    let arrOnes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arrTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let huns = Math.floor(num / 100);
    let hunMod = num % 100;
    let tens = Math.floor(hunMod / 10);
    let ones = hunMod % 10;
    let decimals;
    let hundreds;
    let hunWord;

    hundreds = arrOnes[huns];

    if (hunMod < 20) {
        decimals = arrOnes[hunMod];
    } else {
        decimals = arrTens[tens - 2] + ' ' + arrOnes[ones];
    }

    if (num < 100) {
        hunWord = '';
    } else if (hunMod === 0) {
        hunWord = ' hundreds ';
    } else {
        hunWord = ' hundred ';
    }

    str = hundreds + hunWord + decimals;
    return str;
}


// нейминг переменных
// множественное число для сотен
// числа до 100 - убрать hundred
// zero