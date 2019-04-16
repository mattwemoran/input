
$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if price is greater than 10
    if ( age <= 10 ) {
      //if price is greater than 10 show the next question
      $("#too-much").show();
      $("#age-form").hide();
      $("#ques-tion").hide();
    } else {
      $("#you-good").show();
      $("#age-form").hide();
      $("#ques-tion").hide();
    }
    
  });

 

});

