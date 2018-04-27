// Stores the Category choice on the main page and links it to the rigth URL
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('contentClear');
    // onClick's logic below:
    link.addEventListener('click', function() {

      chrome.storage.sync.clear(function() {
        console.log('Content Cleared');
      });

});
});
