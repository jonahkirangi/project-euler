var i = 5;

var multiples = function() {
  if (i % 3 === 0) {
    return "Multiple of 3";
  } else if (i % 5 === 0) {
    return "Multiple of 5";
  }
};

console.log(multiples());
