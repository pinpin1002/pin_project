// AOS

AOS.init({once:true});  

$(window).on("load", function(){
  setTimeout(function(){
    $(".white").fadeOut("slow");
  }, 1000);
});

