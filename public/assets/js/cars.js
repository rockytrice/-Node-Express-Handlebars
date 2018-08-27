$(function () {
    $(".change-purchase").on("click", function (event) {
        var id = $(this).data("id");
        var newPurchase = $(this).data("newpurchase");

        var newPurchaseState = {
            purchased: newPurchase
        };
        console.log('clicked');
        
        // Send the PUT request.
        $.ajax("/api/cars/" + id, {
            type: "PUT",
            data: newPurchaseState
        }).then(
            function () {
                console.log("changed purchase to", newPurchase);
                // Reload the page to get the updated list
                location.reload();
            }
        );
        $('.cars-bought').addClass('animated rubberBand');
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newCar = {
          name: $("#ca").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/cars", {
          type: "POST",
          data: newCar
        }).then(
          function() {
            console.log("created new car");
            // Reload the page to get the updated list
            location.reload();
          }
        );
       
        $('.dream-list').addClass('animated rubberBand');
      });
})