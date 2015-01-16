chrome.extension.onMessage.addListener(function(request) {
  var isWebAddress = isThatAWebSite(request.url);
  if (isWebAddress) {
    chrome.tabs.create({ url: "http://" + request.url });
  }else{
    chrome.tabs.create({ url: "http://www.google.com/?#q=" + request.url });
  }

});

function isThatAWebSite(url){
  return url.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/);
}
