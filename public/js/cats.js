$(function () {
  $(".create-form").on("submit", function (event) {
      event.preventDefault();
      var newBurger = {
          burger_name: $("#burg").val().trim(),
      };
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function () {
              console.log("Ordered a new Burger");
              location.reload();
          }
      );
  });

  $(".devour").on("click", function (event) {
      console.log("Test");

      var id = $(this).data("id");
      var newDevourState = {
          devoured: true
      };
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
      }).then(
          function () {
              console.log("Devoured da burger");
              location.reload();
          }
      )
  })
})