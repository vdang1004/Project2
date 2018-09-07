//REVIEW SELECTION
$(document).ready(function() {

var correspondingID = "";

$("#formDrink").hide();
$("#formSnack").hide();
$("#ddRating").hide();
$("#ddSnack").hide();
$("#taDrinkName").hide();
$("#taAlcohol").hide();
$("#taIngOne").hide();
$("#taIngTwo").hide();
$("#taIngThree").hide();
$("#taIngFour").hide();
$("#taDrinkFlavor").hide();
$("#taDrinkEvent").hide();
$("#taRating").hide();
$("#taSnackName").hide();
$("#taThoughts").hide();

$("#dd1").change(function(){
  //correspondingID = $(this).find("ddReview").val()
    correspondingID = $(this).val();
    $("#dd2").val("Select One");
    if (correspondingID === "ddDrink") {
      $("#formDrink").show();
      $("#formSnack").hide();
      $("#ddRating").hide();
      $("#ddSnack").hide();
      $("#taDrinkName").hide();
      $("#taAlcohol").hide();
      $("#taIngOne").hide();
      $("#taIngTwo").hide();
      $("#taIngThree").hide();
      $("#taIngFour").hide();
      $("#taDrinkFlavor").hide();
      $("#taDrinkEvent").hide();
      $("#taRating").hide();
      $("#taSnackName").hide();
      $("#taThoughts").hide();
    } else if (correspondingID === "ddSnack") {
      $("#formDrink").hide();
      $("#formSnack").show();
      $("#ddRating").hide();
      $("#ddSnack").hide();
      $("#taDrinkName").hide();
      $("#taAlcohol").hide();
      $("#taIngOne").hide();
      $("#taIngTwo").hide();
      $("#taIngThree").hide();
      $("#taIngFour").hide();
      $("#taDrinkFlavor").hide();
      $("#taDrinkEvent").hide();
      $("#taRating").hide();
      $("#taSnackName").hide();
      $("#taThoughts").hide();
    } else if (correspondingID === "ddThoughts") {
      $("#formDrink").hide();
      $("#formSnack").hide();
      $("#ddRating").hide();
      $("#ddSnack").hide();
      $("#taDrinkName").hide();
      $("#taAlcohol").hide();
      $("#taIngOne").hide();
      $("#taIngTwo").hide();
      $("#taIngThree").hide();
      $("#taIngFour").hide();
      $("#taDrinkFlavor").hide();
      $("#taDrinkEvent").hide();
      $("#taRating").hide();
      $("#taSnackName").hide();
      $("#taThoughts").show();
    } else {
      $("#formDrink").hide();
      $("#formSnack").hide();
      $("#ddRating").hide();
      $("#ddSnack").hide();
      $("#taDrinkName").hide();
      $("#taAlcohol").hide();
      $("#taIngOne").hide();
      $("#taIngTwo").hide();
      $("#taIngThree").hide();
      $("#taIngFour").hide();
      $("#taDrinkFlavor").hide();
      $("#taDrinkEvent").hide();
      $("#taRating").hide();
      $("#taSnackName").hide();
      $("#taThoughts").hide();
    }
    //$("#ddTwo").show();
  //console.log(correspondingID);
    //$("#" + correspondingID).show();
    //if ($(this).val() === "ddReview") {
      //$("#taOne").show();
      //$("#taTwo").hide();
    //} else if ($(this).val() === "ddRecipe") {
      //$("#taTwo").show();
      //$("#taOne").hide();
    //}

    console.log(correspondingID);

});


  
  
  
/*
  //RECIPE SELECTION
  $("#ddOne").change(function(){
    correspondingID = $(this).find("ddRecipe").val()
    $("#ddTwo").show();
  
    $("#" + correspondingID).show();
  
  });
  
  
  
  //THOUGHTS SELECTION
  $("#ddOne").change(function(){
    correspondingID = $(this).find("ddThoughts").val()
    $("#taOne").show();
    $("#ddTwo").hide();
  
  
    $("#" + correspondingID).show();
  
  });
  
  
  
  
  //DRINKS SELECTION
  $("#ddTwo").change(function(){
    correspondingID = $(this).find("ddDrinks").val()
    $("#ddThree").show();
  
  
    $("#" + correspondingID).show();
  
  });
*/
});


