// Stores the Category choice on the main page and links it to the rigth URL
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('test');
    // onClick's logic below:
    link.addEventListener('click', function() {

	chrome.storage.sync.get('name', function(r) {
			var name = r['name'];
			console.log(name)
		});

		chrome.storage.sync.get('email', function(r) {
			var email = r['email'];
			console.log(email)
		});

		chrome.storage.sync.get('phone', function(r) {
			var phone = r['phone'];
			console.log(phone)
		});

		chrome.storage.sync.get('address', function(r) {
			var address = r['address'];
			console.log(address)
		});

		chrome.storage.sync.get('apt', function(r) {
			var apt = r['apt'];
			console.log(apt)
		});

		chrome.storage.sync.get('zip', function(r) {
			var zip = r['zip'];
			console.log(zip)
		});

		chrome.storage.sync.get('city', function(r) {
			var city = r['city'];
			console.log(city)
		});

		chrome.storage.sync.get('cardNumber', function(r) {
			var card = r['cardNumber'];
			console.log(card)
		});

		chrome.storage.sync.get('state', function(r) {
			var state = r['state'];
			console.log(state)
		});

		chrome.storage.sync.get('cardMonth', function(r) {
			var month = r['cardMonth'];
			console.log(month)
		});

		chrome.storage.sync.get('cardYear', function(r) {
			var year = r['cardYear'];
			console.log(year)
		});

		chrome.storage.sync.get('csv', function(r) {
			var csv = r['csv'];
			console.log(csv)
		});

		chrome.storage.sync.get('item', function(r) {
			var userItem = r['item'];
			console.log(userItem);

		});

		chrome.storage.sync.get('color', function(r) {
			var userColor = r['color'];
			console.log(userColor);

		});

		chrome.storage.sync.get('category', function(r) {
			var category = r['category'];
			console.log(category);
		});

		chrome.storage.sync.get('size', function(r) {
			var size = r['size'];
			console.log(size);
		});

    chrome.storage.sync.get('categoryPath', function(r) {
      var size = r['categoryPath'];
      console.log(size);
    });


});
});
