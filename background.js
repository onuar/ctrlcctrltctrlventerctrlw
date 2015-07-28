chrome.extension.onMessage.addListener(function(request) {
  var isWebAddress = isThatAWebAddress(request.url);
  if (isWebAddress) {
    var protocol = existProtocolHandlers(request.url);
    var url;
    if (protocol) {
      url = request.url;
    } else {
      url = "http://" + request.url;
    }
  } else {
    url = "http://www.google.com/?#q=" + request.url;
  }
  openTab(url, request.newTab, request.selectTab);
});

function openTab(url, newTab, selectTab) {
  if (newTab) {
    chrome.tabs.create({
      url: url,
      selected: selectTab
    });
  } else {
    chrome.tabs.update({
      url: url
    });
  }
}

function isThatAWebAddress(url) {
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if (url.match(regex)) {
    return true;
  } else {
    return false;
  }
};

function existProtocolHandlers(url) {
  if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
    return true;
  } else {
    return false;
  }
};
