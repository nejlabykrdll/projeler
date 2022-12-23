let numbers = [5, 4, 3, 8, 98]
let number = 6
let a = checkExists(numbers, number)
function checkExists(p_numbers, p_number) {

    for (let i = 0; i <= p_numbers.length - 1; i++) {

        if (p_numbers[i] == p_number) {
            return true;
        }
    }
    return false;
}
if (a == true) {
    console.log('aradiginiz sayi bulundu')
}
else {
    console.log('aradiginiz sayi bulunamadi')
}








// function checkExists1(numbers, number) {
//     let a = "false"
//     for (let i = 0; i <= numbers.length - 1; i++) {

//         if (p_numbers[i] == number) {
//             a = "true"
//         }
//     }
//     return a;
// }
// console.log(checkExists1(numbers, number))




// function checkExists2(numbers, number) {

//     for (let i = 0; i <= numbers.length; i++) {

//         if (p_numbers[i] == number) {
//             console.log("true")
//             break;
//         }
//         if (i == (numbers.length - 1)) {
//             console.log("false")
//             break;
//         }
//     }

// }
// checkExists2(numbers, number)



// function checkExists3(numbers, number) {

//     for (let i = 0; i <= numbers.length; i++) {

//         if (p_numbers[i] == number) {
//             return true;
//         }
//         if (i == (numbers.length - 1)) {
//             return false;
//         }

//     }


// }
// console.log(checkExists3(numbers, number))


