chrome.extension.onMessage.addListener(function(request) {
  var isWebAddress = isThatAWebAddress(request.url);
  if (isWebAddress) {
    var protocol = existProtocolHandlers(request.url);
    if(protocol){
      chrome.tabs.create({ url: request.url });
    }else{
      chrome.tabs.create({ url: "http://" + request.url });
    }
  }else{
    chrome.tabs.create({ url: "http://www.google.com/?#q=" + request.url });
  }
});

function isThatAWebAddress(url){
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (url.match(regex)){
      return true;
    } else {
      return false;
    }
};

function existProtocolHandlers(url){
    if (url.indexOf("http://")==0 || url.indexOf("https://")==0) {
        return true;
    }else{
      return false;
    }
};
