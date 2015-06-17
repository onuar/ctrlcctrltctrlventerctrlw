$(document).ready(function() {
  $("body").keyup(function(e){
    if(e.which !== 226){
      return;
    }

    var selection = window.getSelection();
    var text = selection.toString().trim();
    if(text){
      chrome.extension.sendMessage( { url: text } );
    }
  });
});
