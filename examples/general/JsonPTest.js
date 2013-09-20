var addScript = function (url) {
  var script = document.createElement("SCRIPT");
  var parentNode = document.getElementsByTagName("HEAD")[0];
  script.async = true;
  script.type = "text/javascript";
  script.src = url;
  script.addEventListener("load", function () {
    parentNode.removeChild(script);
  });
  parentNode.appendChild(script);
};
var jsonpRequest = function (url, callback) {
  var callbackName = "jsonp_callback_" +
      Math.floor(Date.now() * Math.random());
  var requestUrl = url + "?callback=" + callbackName;

  window[callbackName] = function (response) {
    delete window[callbackName];
    callback(response);
  };
  addScript(requestUrl);
};
var JSONP_URL = "https://api.github.com/users/seykron/repos";
jsonpRequest(JSONP_URL, function (result) {
  console.log(result);
});
