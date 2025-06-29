function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    return "I'm a named function";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    return "I'm anonymous";
  };
}

// Export the functions if using Node.js module system
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
