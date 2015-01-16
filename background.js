chrome.extension.onMessage.addListener(function(request) {
  var isWebAddress = isThatAWebSite(request.url);
  if (isWebAddress) {
    chrome.tabs.create({ url: request.url });
  }else{
    chrome.tabs.create({ url: "http://www.google.com/?#q=" + request.url });
  }

});

function isThatAWebSite(url){
  return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}
