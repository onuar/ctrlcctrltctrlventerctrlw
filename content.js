$(document).ready(function() {
  $("body").keyup(function(e){
    if(e.which !== 226){
      return;
    }

    var selection = window.getSelection();
    var text = selection.toString().trim();

    chrome.extension.sendMessage( { url: text } );
  });
});