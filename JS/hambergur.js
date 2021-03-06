// 漢堡選單toggle

$(document).ready(function(){

  $('.hamburger-btn').click(function(){
    $('.hamburger').toggle(800);
  });
  $('.hamburger-btn').click(function(){
    $('.hamburger-btn').toggleClass('open')
  })
  
  $('.hamburger-btn').click(function(){
    $('.mask').toggleClass('on')
  })
  });