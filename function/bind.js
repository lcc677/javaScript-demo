const moduless = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = moduless.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(moduless);
console.log(boundGetX());
// expected output: 42

var add = function*(){
  yield '1'
  yield '2'
}


var yield = "9"
console.log(yield)
console.log(...add())