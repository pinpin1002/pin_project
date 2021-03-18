$(document).ready(function(){


  $("div.resverpics_3d").on("click", function(){
    $(this).toggleClass("flip")
  })


  // datepicker
  $( function() {
    $("#datepicker").datepicker({
      showOtherMonths : true,
      hideIfNoPrevNext : true,
      minDate : "0d",
      maxDate : "+1m"
    }).datepicker("setDate", new Date());
    
  });

});

