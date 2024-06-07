/*
    CIT 281 Project 1
    Name: Joey Bezner
*/

const chars = "abcdefghijklmnopqrstuvwxyz";
let str = "";
for(let i = 0; i < getRandomInteger(5, 26); i++){
    str += chars[getRandomInteger(0, chars.length)];
}
console.log(str);

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
