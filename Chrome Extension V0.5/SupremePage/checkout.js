if (window.location.href == "https://www.supremenewyork.com/checkout"){
	//alert("You're in checkout Page. Delay of 1 second");

	// Sets the delay for the form autofill
	var delay = 350;

	// Fill out the billing and address form
	setTimeout(function(){

		chrome.storage.sync.get('name', function(r) {
			var name = r['name'];
			$('#order_billing_name').val(name);
		});

		chrome.storage.sync.get('email', function(r) {
			var email = r['email'];
			$('#order_email').val(email);
		});

		chrome.storage.sync.get('phone', function(r) {
			var phone = r['phone'];
			$('#order_tel').val(phone);
		});

		chrome.storage.sync.get('address', function(r) {
			var address = r['address'];
			$("input[name*='order[billing_address]']").val(address);
		});

		chrome.storage.sync.get('apt', function(r) {
			var apt = r['apt'];
			$("input[name*='order[billing_address_2]']").val(apt);
		});

		chrome.storage.sync.get('zip', function(r) {
			var zip = r['zip'];
			$("input[name*='order[billing_zip]']").val(zip);
		});

		chrome.storage.sync.get('city', function(r) {
			var city = r['city'];
			$("input[name*='order[billing_city]']").val(city);
		});

		chrome.storage.sync.get('cardNumber', function(r) {
			var card = r['cardNumber'];
			$("input[name*='credit_card[nlb]']").val(card);
		});

		chrome.storage.sync.get('state', function(r) {
			var state = r['state'];
			console.log(state)
			$("#order_billing_state").val(state);
		});

		chrome.storage.sync.get('cardMonth', function(r) {
			var month = r['cardMonth'];
			$("#credit_card_month").val(month);
		});

		chrome.storage.sync.get('cardYear', function(r) {
			var year = r['cardYear'];
			$("#credit_card_year").val(year);
		});

		chrome.storage.sync.get('csv', function(r) {
			var csv = r['csv'];
			$("input[name*='credit_card[rvv]']").val(csv);
		});

	$("input[name*='order[terms]']").trigger('click');
	}, delay);

	// Sets the delay for the checkout button click
	var delayCheck = 2000;

	// Click checkout button
	setTimeout(function(){
	$("input.button").trigger('click');
	}, delayCheck);
}
