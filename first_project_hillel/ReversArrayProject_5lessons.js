const name = 'My worb';
let EmtyString = ' ';
let PolidromName = 'Aba';
let NotPolidromName = '1234';
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const revers_array = array.reverse()


function number_of_characters(name) {
    for (let i = name.length; i >= 0; i--) {
        return i;
    }

};

function revers_worb() {
    for (let i = name.length - 1; i >= 0; i--)
        EmtyString += name[i];
    return console.log(`My default verb is' ${name} ', But my revers worb is ' ${EmtyString} '`)

};

function palindrome(PolidromName) {
    let opt = /[^A-Za-z0-9]/g;
    let lowerCaseStr = PolidromName.toLowerCase().replace(opt, '');
    let reverse_worb = lowerCaseStr.split('').reverse().join('');
    return reverse_worb === lowerCaseStr;
}


function paired_numbers_from_array(array) {
    let emtyArray = [];
    for (let i = 0; i < array.length; i++) {


        if ((array[i] % 2) === 0) {

            emtyArray += array[i];

            console.log(`paired number is: ${array[i]}`);
        }
    }
}



console.log(number_of_characters(name))
console.log(revers_worb(name))
console.log(`================================ \n Polidrome: ${PolidromName}, NotPolidrom: ${NotPolidromName} \n================================`)
console.log(palindrome(PolidromName))
console.log(palindrome(NotPolidromName))
console.log(paired_numbers_from_array(revers_array))