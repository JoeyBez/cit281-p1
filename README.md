# Project 1

Project 1 was about an introduction to Node.js and how it relates the the provious CS courses. \
Here's a code snippet from the project showing a randomly generating string:
```ruby
const chars = "abcdefghijklmnopqrstuvwxyz";
let str = "";
for(let i = 0; i < getRandomInteger(5, 26); i++){
    str += chars[getRandomInteger(0, chars.length)];
}
console.log(str);

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
```
<a href="https://joeybez.github.io/joeybezner.github.io/">Back to Home</a>
