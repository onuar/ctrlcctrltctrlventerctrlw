$(document).ready(function() {
  $("body").keyup(function(e) {
    if (e.which === 226) {
      selection = window.getSelection();
      var text = selection.toString().trim();
      if (text) {
        var newTab = e.ctrlKey;
        var selectTab = !e.shiftKey;
        chrome.extension.sendMessage({
          url: text,
          newTab: newTab,
          selectTab: selectTab
        });
      }
    }
  });
});
