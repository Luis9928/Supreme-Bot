// Stores the keywords of the current path
var url = window.location.pathname.split('/');

// Used to double check if current tab is on the item page
var path = url[2];

// Used to check whether the tab is on the item page or category page
var categoryUrl = "shop/all";

// Checks whether the current page is the item page or the category page
if ( window.location.href.indexOf(categoryUrl) !== -1) {

// Gets item set by the user
chrome.storage.sync.get('item', function(r) {

	// Store item name (Temp variable, it's not availalbe outside chrome function)
	var userItem = r['item'];

	// Gets color set by the user
	chrome.storage.sync.get('color', function(r) {

		// Store color (Temp variable, it's not availalbe outside chrome function)
		var userColor = r['color'];

// Parse through the items in the current category
$( "div.inner-article" ).each(function( index ) {

	// Store the name of each item in the category (Parses thru all the item names)
	var item = $(this).children("h1").text();

	// Store the name of each color for each item in the category (Parses thru all the item colors)
	var color = $(this).children("p").text();

	// If Item matches the name and color set by the user go to the URL attach to the item
	// (Go to the item page is item is found)
	if ((item.indexOf(userItem) !== -1) && ( color == userColor ) || (userColor == "NO COLOR")) {
		window.open($(this).children("h1").find("a").attr('href'),"_self");
		return false;
	}

	// This doesn't actually work how it's intended. It reloads the page every 5 seconds
	// Even if the item is found or not. Shouldn't be an issue though since it takes less
	// Than a second to find the item
	else {
		var delay = 5000;
	setTimeout(function(){
		window.location.reload();
	}, delay);
}

});
});
});
}

// Get the category of the item (Set by user)
chrome.storage.sync.get('categoryPath', function(r) {
	// Stores the category
	var categoryPath = r['categoryPath'];
	//console.log(path + categoryPath);

	// If the current page is the page for the category set by user then it will
	// Choose the size of the item and add it to cart
  if (path == categoryPath) {
	//alert("Trigger the add to cart button");

	// Gets the size of the item (Choosen by user using dropdown menu)
	chrome.storage.sync.get('size', function(r) {

		// Stores the size of the item (Set by user)
		var size = r['size'];

		// Looks for the size of the item and selects it.
		// If the size is not found then it will add to cart whatever size the item is available on
		$('select[name="s"]').find('option:contains(size)').attr("selected",true);
	});

	// Add to cart
	$("input.button").trigger('click');

	// Go to checkout button after .075 seconds. (increase number if connection is slow)
	var delay = 75;
	setTimeout(function(){
	window.open("https://www.supremenewyork.com/checkout","_self");
	}, delay);
}
});
