const add = (x,y) => x+y;
const PI = 3.14159;
const square = x => x*x;
// module.exports= "HELLO THERE !!";
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;
//  const math = {
//     add: add,
//     PI:PI,
//     square: square
//  }
//  module.exports = math;

exports.add = add;
exports.PI = PI;
exports.square = square;