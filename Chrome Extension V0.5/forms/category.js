// Stores the Category choice on the main page and links it to the rigth URL
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('itemInfo');
    // onClick's logic below:
    link.addEventListener('click', function() {

      // Get the category set by the user from the category drop down
      var categoryValue = "shop/";
      categoryValue = categoryValue + $('#category').val();

      var categoriesURLS = ['http://www.supremenewyork.com/shop/all/jackets', 'http://www.supremenewyork.com/shop/all/shirts',
                        'http://www.supremenewyork.com/shop/all/tops_sweaters', 'http://www.supremenewyork.com/shop/all/sweatshirts',
                        'http://www.supremenewyork.com/shop/all/pants', 'http://www.supremenewyork.com/shop/all/hats',
                        'http://www.supremenewyork.com/shop/all/bags', 'http://www.supremenewyork.com/shop/all/accessories',
                        'http://www.supremenewyork.com/shop/all/skate'];

      var categories = ['jackets', 'shirts', 'tops/sweaters', 'sweatshirts', 'pants', 'hats', 'bags','accessories', 'skate'];

        chrome.storage.sync.set({categoryPath: categoryValue}, function() {
        });

        for ( var i = 0; i < categoriesURLS.length; i++) {

            if (categories[i] == categoryValue) {

                var name = categoriesURLS[i];
                chrome.storage.sync.set({category: name}, function () {
                    console.log(categoriesURLS[i]);
                });
            }
        }
	});
});
