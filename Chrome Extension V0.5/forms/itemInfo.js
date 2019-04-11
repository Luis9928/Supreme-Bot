// This Script get item info when the "Save Item" button is clicked
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('itemInfo');
    // onClick's logic below:
    link.addEventListener('click', function() {

      // Get's the value from the text boxes
      var sizeValue = $('#size').val();
      var colorValue = document.getElementById("color").value;
      var itemValue = document.getElementById("item").value;

      // Stores the values from the text boxes on Chrome's local storage
      chrome.storage.sync.set({color: colorValue}, function() {
        console.log('Color saved');
      });

      chrome.storage.sync.set({item: itemValue}, function() {
        console.log('Item saved');
      });

      chrome.storage.sync.set({size: sizeValue}, function() {
        console.log('Size saved');
      });

	});
});
