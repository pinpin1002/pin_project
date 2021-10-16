// 漢堡選單toggle

$(document).ready(function(){


  $('.hamburger-btn').click(function(){
    $('.hamburger-btn').toggleClass('open')
    $('.hamburger').toggle(800);
    $('.mask').toggleClass('on')
  })
  
  });