// Get the category url value and opens new tab using that URL
// Also this is the cop button
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('cop');
    // onClick's logic below:
    link.addEventListener('click', function() {
      // Get category URL
      chrome.storage.sync.get('category', function(r) {
  			var categoryUrl = r['category'];
        chrome.tabs.create({url: categoryUrl});

  		});
	});
});
