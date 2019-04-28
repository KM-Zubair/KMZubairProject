function CalculateBMI(){
  var H = document.getElementById("Height").value;
  var W = document.getElementById("Weight").value;
  var Res = (W /Math.pow(H, 2))

  document.getElementById("BMI").innerHTML="Your BMI is :"+ Res.toFixed(2);

   routine(Res);



  document.getElementById("advice").innerHTML=
    "Our advice to you is to eat food from this list:";





}
$(document).ready(function(){
  $(".result").hide();

});

$( "#routbutton" ).click(function() {
  $( "#routpara" ).toggle( "slow" );
});

$(document).ready(function(){
$("#Calbutton").click(function(){
  $(".result").show();
  $( "#routpara" ).hide();
  $("#cal").hide();
});
});



  function routine(Res){
    var info ;
    if (Res< 18.5){
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
   else if (Res > 18.5 && Res < 24.9 ){
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
