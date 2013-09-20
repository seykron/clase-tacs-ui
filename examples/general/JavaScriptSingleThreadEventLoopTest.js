var MAX = 5;
var INTERVAL = 250;
var EXPECTED_TIME = INTERVAL * MAX;
var intervalId;
var index = 0;
var totalTime = 0;
var lastTime = Date.now();

var longOperation = function () {
  totalTime += Date.now() - lastTime;
  lastTime = Date.now();
  index += 1;

  while (Date.now() - lastTime < INTERVAL * 2) {
    // Do something looooooong.
  }

  if (index === MAX) {
    console.log("Total time: " + totalTime + " ms");
    console.log("Expected time: " + EXPECTED_TIME);
    clearInterval(intervalId);
  }
};

intervalId = setInterval(longOperation, INTERVAL);
