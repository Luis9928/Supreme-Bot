// Stores the Category choice on the main page and links it to the rigth URL
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('itemInfo');
    // onClick's logic below:
    link.addEventListener('click', function() {

      // Get the category set by the user from the category drop down
      var categoryValue = $('#category').val();

      // Url options (User does not see this)
      var jacketsUrl = "http://www.supremenewyork.com/shop/all/jackets";
      var shirtsUrl = "http://www.supremenewyork.com/shop/all/shirts";
      var topsUrl ="http://www.supremenewyork.com/shop/all/tops_sweaters";
      var sweatsUrl ="http://www.supremenewyork.com/shop/all/sweatshirts";
      var pantsURl = "http://www.supremenewyork.com/shop/all/pants";
      var hatsUrl = "http://www.supremenewyork.com/shop/all/hats";
      var bagsUrl ="http://www.supremenewyork.com/shop/all/bags";
      var accsUrl ="http://www.supremenewyork.com/shop/all/accessories";
      var skateUrl ="http://www.supremenewyork.com/shop/all/skate"

      // Stores the category on Chrome's local storage to be used on another script
      chrome.storage.sync.set({categoryPath: categoryValue}, function() {
        console.log('Category saved');
      });


      // Sets the Url where the extension will go when the "Cop" button is clicked
      if (categoryValue == "jackets") {

      chrome.storage.sync.set({category: jacketsUrl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "shirts") {
      chrome.storage.sync.set({category: shirtsUrl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "tops/sweaters") {
      chrome.storage.sync.set({category: topsUrl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "sweatshirts") {
      chrome.storage.sync.set({category: sweatsUrl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "pants") {
      chrome.storage.sync.set({category: pantsURl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "hats") {
      chrome.storage.sync.set({category: hatsUrl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "bags") {
      chrome.storage.sync.set({category: bagsURl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "accessories") {
      chrome.storage.sync.set({category: accsUrl}, function() {
        console.log('Category saved');
      });
    }

    else if (categoryValue == "skate") {
      chrome.storage.sync.set({category: skateUrl}, function() {
        console.log('Category saved');
      });
    }

    else {
      console.log('Category Failed');
    }




	});
});
