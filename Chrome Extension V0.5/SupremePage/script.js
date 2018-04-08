// Stores the keywords of the current path
var url = window.location.pathname.split('/');

// Used to double check if current tab is on the item page
var path = url[2];

// Used to check whether the tab is on the item page or category page
var categoryUrl = "shop/all";

if ( window.location.href.indexOf(categoryUrl) !== -1) {
	
chrome.storage.sync.get('item', function(r) {

	var userItem = r['item'];

	chrome.storage.sync.get('color', function(r) {

		var color = r['color'];

$( "div.inner-article" ).each(function( index ) {
	var item = $(this).children("h1").text();

	if ( (item.indexOf(userItem) !== -1) && ($(this).children("p").text() == color )){
		window.open($(this).children("h1").find("a").attr('href'),"_self");
		return false;
	}

	else {
		var delay = 1500;
	setTimeout(function(){
		window.location.reload();
	}, delay);
	}

});

});

});

}

chrome.storage.sync.get('categoryPath', function(r) {
	var categoryPath = r['categoryPath'];
	console.log(path + categoryPath);
  if (path == categoryPath) {
	//alert("Trigger the add to cart button");
	chrome.storage.sync.get('size', function(r) {
		var size = r['size'];
		$('select[name="s"]').find('option:contains(size)').attr("selected",true);
	});
	$("input.button").trigger('click');
	var delay = 75;
	setTimeout(function(){
	window.open("https://www.supremenewyork.com/checkout","_self");
	}, delay);
}
});
