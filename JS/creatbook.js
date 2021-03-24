$( function() {
  $( ".aside" ).accordion({
    collapsible: true,
    heightStyle: "content"
  });
  $( ".resizable" ).resizable();

  $( ".draggable" ).draggable({ helper : "clone"});
  $( ".onleft, .onright" ).droppable({

    accept: ".draggable",
    drop: function( event, ui ) {
      var dropItem = `
      <textarea class="textarea draggable resizable" draggable="true" name="" id="" cols="3" rows="2"></textarea>
      `
      $(this).append(dropItem);
    }
} );
})





// $("#flipbook").turn({
//   width: 800,
//   height: 400,
//   acceleration: true,
//   autoCenter: true, // 是否居中 默認值false
//   direction: "ltr", // 翻書方向，值為rtl / ltr（3種寫法）
//   display: 'double', // 顯示單頁or雙頁,默認值是double (如果single, class為hard的div首末各一個就可以)
  
// });

// function backwardPage() {
//     $("#flipbook").turn("previous");
// }

// function forwarPage() {
//     $("#flipbook").turn("next");
// }

  