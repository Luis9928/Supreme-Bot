// Stores the Category choice on the main page and links it to the rigth URL
document.addEventListener('DOMContentLoaded', function() {
    var addRow = document.getElementById('add_row');
    // onClick's logic below:
    addRow.addEventListener('click', function() {
      var row = $(".row").eq(0).clone().show();

        $(".formtest").append(row);

      });

      $(document).on("click", ".remove_row", function(){

        if ($(".formtest").children().length > 1 ){
        var index = $(".remove_row").index(this);

        $(".row").eq(index).remove();

      }

      });
});
