var assert = require("assert");
const {type} = require("mocha/lib/utils");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {});
  });
});
//--------------------------------------------------------------
// let person = {
//   firstName: "Nick",
//   lastName: "Karnackiy",
//   age: 23,
// };
//
// function calculateAge(birthDate) {
//   return 2021 - birthDate;
// }
// const myAge = calculateAge(1998);
// console.log(myAge);
//---------------------------------------------------
//function hui(array) {
//for (let i = 0; i < array.length; i++) {
//console.log(`Индекс элмента = ${i}, значение элемента = ${array[i]}`);
//}
//}

//function findMaxNumber(array) {
//for (let i = 0; i < array.length; i++) {
//if (i < 70);
//}
//}
//------------------------------------------------------
// const resultOfFunction = mathPow(3,5)
// function mathPow(num, pow){
//   if(typeof num=='number'&& num && pow && typeof pow=='number'){
//     return num**pow;
//   }
//   else{
//     console.log("poshli nahui")
//   }
// }
// console.log(resultOfFunction)
//------------------------------------------------------------
// const areaOfRectangle = calculateSqure(3,5)
// function calculateSqure(a,b){
//   if(b){
//     return a*b;
//   }
//   else {
//     return a*a;
//   }
// }
// console.log(areaOfRectangle)
//-----------------------------------------------------------------
// const calculate = calc(3,2,'+');
// function calc(num1,num2,operation){
//   let result = 0
//   switch (operation){
//     case'+':
//        result = num1 + num2;
//     break;
//     case'-':
//       result = num1 - num2;
//     break;
//     case'*':
//       result = num1 * num2;
//     break;
//     case'/':
//       result = num1 / num2;
//     break;
//
//   }
//   console.log(result)
// }
//--------------------------------------------------------------------------
//“Nick has a pet, It is Hamster Homa and it weights 0.5”
// const users = [
//   {
//     name: 'Nick',
//     age: 23,
//     pet: {
//       type: 'Hamster',
//       name: 'Homa',
//       weight: 0.5,
//     },
//   },
//   {
//     name: 'Masha',
//     age: 24,
//     pet: {
//       type: 'Dog',
//       name: 'Soft',
//       weight: 4,
//     },
//   },
//
//   {
//     name: 'Leha',
//     age: 23,
//     pet: {
//       type: 'Dog',
//       name: 'Rex',
//       weight: 10,
//     },
//   },
//
//   {
//     name: 'Lena',
//     age: 35,
//   },
// ];
// for ( let i=0; i<users.length; i++){
//   const currentUser = users[i];
//   if(currentUser.hasOwnProperty('pet')){
//     console.log(currentUser)
//     console.log(`${users[i].name} has a pet, It is ${users[i].pet.type} ${users[i].pet.name} and it weights ${users[i].pet.weight}`)
//   }
// }
//--------------------------------------------------------------------------------
// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
//
// let result = a.concat(b);
// console.log(result)
//---------------------------------------------------------------------
// let arr = ['a', 'b', 'c'];
// arr.push(1,2,3);
// console.log(arr)
//----------------------------------------------------------------------
// let a = [1,2,3];
// let b = [4,5,6];
// let result = a.concat(b);
// console.log(result)
//--------------------------------------------------------------------
// let a = [1,2,3];
// a.reverse();
// console.log(a)
//------------------------------------------------------------------------
// let a = [1,2,3];
// a.push(4,5,6);
// console.log(a)
//--------------------------------------------------------------------------
// let a = [1,2,3];
// a.unshift(4,5,6);
// console.log(a)
//----------------------------------------------------------------------------
// let a = ['js','css','jq'];
// let b = a.shift();
// console.log(b)
//-------------------------------------------------------------------------
// let a = ['js','css','jq'];
// let b = a.pop();
// console.log(b)
//----------------------------------------------------------------------------
// let a = [1,2,3,4,5];
// let b = a.slice(0,3);
// console.log(b)
//---------------------------------------------------------------------------
// let a = [1,2,3,4,5];
// let b = a.slice(-2);
// console.log(b)
//-----------------------------------------------------------------------------
// let a = [1,2,3,4,5];
// a.splice(1,2);
// console.log(a)
//---------------------------------------------------------------------------
// let a = [1,2,3,4,5];
// let b = a.splice(1,3);
// console.log(b)
//-----------------------------------------------------------------------
// let arr = [3,4,1,2,7];
// console.log(arr.sort())
//---------------------------------------------------------------------
// let obj = {a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj))
//---------------------------------------------------------------------------
// const str = 'Вдазущjekrkdk$/@;”(02616)iolwndb0017735059761&&@/;!!(;-):$'
// const splits = str.split('');
// for (let i=0; i<splits.length; i++){
//   if ( splits[i] === '0'|| splits[i] === '1'|| splits[i] === '2'|| splits[i] === '3'|| splits[i] === '4'|| splits[i] === '5'|| splits[i] === '6'|| splits[i] === '7'|| splits[i] === '8'|| splits[i] === '9'){
//     delete splits[i]
//   }
// }
// console.log(splits)
// console.log(str.replace(/\d+/g,''))
//-------------------------------------------------------------------------------
// const arr1 = [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function reverseArray(arr1){
//   // const copy = [];
//   // for (let item of arr1){
//   //   copy.push(item)
//   // }
//   const arr2 = [];
//   for ( let i=arr1.length -1; i>=0; i--) {
//     arr2.push(arr1[i])
//     // let num = copy.pop()
//     // arr2.push(num);
//   }
//   return arr2
// }
//
// console.log(reverseArray(arr1))
//------------------------------------------------------------
// const arr1 = [ 1, 2, 3, 4,'-', 5, 6, 7, 8, 9, 10];
//
// function getArr1(arr1,num){
//   let i = arr1.indexOf(num)
//   return arr1.slice(i+1);
// }
//
// console.log(getArr1(arr1,'-'))
//----------------------------------------------
const arr = [2,3,6]
function doubleArr(arr){
  const arr2 = [];
  for( let i of arr){
    arr2.push(i*i)
  }
  return arr2
}

console.log(doubleArr(arr))









