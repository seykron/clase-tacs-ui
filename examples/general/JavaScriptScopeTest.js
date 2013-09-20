var logger = function (level) {
  return function (message) {
    console.log(level + " " + message);
  };
};
var info = logger("INFO");
var debug = logger("DEBUG");

info("Information event");
debug("Debugging event");
