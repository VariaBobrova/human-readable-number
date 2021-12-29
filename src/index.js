module.exports = function toReadable(num) {
    let arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];    
    let arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let mod = num % 100;   
    let huns = Math.floor(num / 100);
    let tens = Math.floor(mod / 10);
    let ones = mod % 10;

    let hundreds = arr1[huns];
    let dozens = (mod < 20) ? arr1[mod] : arr2[tens] + ' ' + arr1[ones];
    let word = (num > 0 && num < 100) ? '' : ' hundred ';

    return num ? (hundreds + word + dozens).trim() : 'zero';
}