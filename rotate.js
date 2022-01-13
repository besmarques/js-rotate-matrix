let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

let result = matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
let resultInverted = matrix[0].map((val, index) => matrix.map(row => row[index])).reverse();

console.log(result);
console.log(resultInverted);
