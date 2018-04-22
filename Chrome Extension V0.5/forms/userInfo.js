document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('customerInfo');
    // onClick's logic below:
    link.addEventListener('click', function() {

      var nameValue = document.getElementById("name").value;
      var emailValue = document.getElementById("email").value;
      var phoneValue = document.getElementById("phone").value;
      var addressValue = document.getElementById("address").value;
      var aptValue = document.getElementById("apt").value;
      var zipValue = document.getElementById("zip").value;
      var cityValue = document.getElementById("city").value;
      var cardValue = document.getElementById("cardNumber").value;
      var csvValue = document.getElementById("cardCSV").value;

      var stateValue = $('#state').val();
      var sizeValue = $('#size').val();
      var monthValue = $('#cardMonth').val();
      var yearValue = $('#cardYear').val();


      chrome.storage.sync.set({name: nameValue}, function() {
        console.log('Name saved');
      });

      chrome.storage.sync.set({email: emailValue}, function() {
        console.log('Email saved');
      });

      chrome.storage.sync.set({phone: phoneValue}, function() {
        console.log('Phone saved');
      });

      chrome.storage.sync.set({address: addressValue}, function() {
        console.log('Address saved');
      });

      chrome.storage.sync.set({apt: aptValue}, function() {
        console.log('Apt saved');
      });

      chrome.storage.sync.set({zip: zipValue}, function() {
        console.log('Zip saved');
      });

      chrome.storage.sync.set({city: cityValue}, function() {
        console.log('City saved');
      });

      chrome.storage.sync.set({cardNumber: cardValue}, function() {
        console.log('Card saved');
      });

      chrome.storage.sync.set({state: stateValue}, function() {
        console.log('State saved');
      });


      chrome.storage.sync.set({cardMonth: monthValue}, function() {
        console.log('Month saved');
      });

      chrome.storage.sync.set({cardYear: yearValue}, function() {
        console.log('Year saved');
      });

      chrome.storage.sync.set({csv: csvValue}, function() {
        console.log('CSV saved');
      });

	});
});
