function CalculateFat(){
  var BMI = document.getElementById("BMIF").value;
  var Age = document.getElementById("Age").value;
  var BFP = ((1.20 * BMI) + (0.23 * Age) - 16.2)

  document.getElementById("Fat").innerHTML="Your fat percentage is :"+ BFP.toFixed(2)+"%";

   fatroutine(BFP);



  document.getElementById("advice").innerHTML=
    "Our advice to you is to eat food from this list:";


    //items will be added here


}
$(document).ready(function(){
  $(".result").hide();

});

$( "#routbutton" ).click(function() {
  $( "#routpara" ).toggle( "slow" );
});

$(document).ready(function(){
$("#Fatbutton").click(function(){
  $(".result").show();
  $( "#routpara" ).hide();
  $(".cal").hide();
});
});



  function fatroutine(BFP){
    var info ;
    if (BFP < 13){
     info = "Diet Routine for gaining weight:"+"<br>"+
     "<ol>"+
      "<li>"+"Add vegetables like French beans, broccoli, Chinese cabbage,"
          +"carrots, lettuce, spinach, asparagus, pumpkins,"+
           "and eggplants to your diet."+"</li>"+"<br>"+
      "<li>"+"Add a healthy portion of red meat to your diet too."+
          "But keep in mind not to overdo it. The aim is to add weight,"+
            "not cholesterol!"+"</li>"+"<br>"+
      "<li>"+"You can even add olive oil in generous quantities to"+
            "your salads."+"</li>"+"<br>"+
      "<li>"+"Another way to add calories to your diet is by increasing the"+
            "consumption of dairy products. Don’t cut back on the fat content"+
            "in your milk. Do not ask for low-fat curd at the store."+
            "Make sure you consume a full calorie dairy product."+"</li>"+

    "</ol>";
    $("#adviceavg").hide();
    $("#advicefat").hide();
   }
   else if (BFP >= 13 && BFP < 24 ){
     info = "No Diet Routine needed! "
     $("#adviceskinny").hide();
     $("#advicefat").hide();

  }
  else{
    info = "Diet Routine for losing weight:"+"<br>"+
    "<ol>"+
     "<li>"+"Eat a high-protein breakfast."+"</li>"+"<br>"+
     "<li>"+"Avoid sugary drinks and fruit juice."+
           "</li>"+"<br>"+
     "<li>"+"Drink water a half hour before meals."+
          "</li>"+"<br>"+
     "<li>"+"Drink coffee or tea."+"</li>"+
   "</ol>";
   $("#adviceavg").hide();
   $("#adviceskinny").hide();
  }
    document.getElementById("routpara").innerHTML = info;
    }
