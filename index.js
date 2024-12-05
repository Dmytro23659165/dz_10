// function helloWord(arr, callback){
//     return arr
// }
// function helloWinter(){
    
// }
// console.log(helloWord('Hello World!'))
// console.log(helloWinter())


// const trueNumber = 39;
// console.log("Введіть число від 1 до 100:");
// function checkGussss(userGuess) {
//     if (userGussss === trueNumber) {
//         console.log('Відповідь правильна!');
//         return true;
//     } else {
//         console.log('Спробуйте ще раз.');
//     }
//     return false;
// }
// let userGussss = Number(prompt("Введіть число від 1 до 100:"));
// while (userGussss !== trueNumber) {
//     if (checkGuess(userGuess)) {
//         break;
//     }
//     userGuess = Number(prompt("Введіть число від 1 до 100:"));
// }


// let maxTup = 0;
// function maximumTup(callback) {
//     maxTup++;
//     callback(maxTup);
// }
// function maxiTup(count) {
//     console.log(`Ви клікнули на сторінці ${count} разів.`);
// }
// maximumTup(maxiTup);


// const applyCallbackToEachElement = (arr, callback) => {
//     const resultArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         resultArray.push(callback(arr[i]));
//     }
//     return resultArray;
// }

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num;

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result);


// const calculateDiscountedPrice = (price, discount, callback) => {
//     const discountedPrice = price - (price * discount / 100);
//     callback(discountedPrice);
// }
// const showDiscountedPrice = (discountedPrice) => {
//     console.log(`Дисконтна ціна: ${discountedPrice}`);
// }
// calculateDiscountedPrice(100, 10, showDiscountedPrice);
