$('div.cancel').on('click', function(){

  var is_confirm = confirm("確定要刪除?");
  if(is_confirm){
    $(this).closest("div.item").slideUp(500, function(){
      $(this).remove();
    })
  }
});



$("input.all_checkbox").on("click", function(){
  if($(this).prop('checked')){
    $('input[type="checkbox"]').prop('checked', true);
  }else{
    $('input[type="checkbox"]').prop('checked', false); 
  }
})

$('input[type="checkbox"]').on("click", function(){
  if(!$(this).prop("checked")){
    $('input.all_checkbox').prop("checked", false);
  }
})

let price = document.getElementsByClassName("itemprice")[0]
let qty = document.getElementsByClassName("itemqty")[0]
let result = document.getElementsByClassName("result")[0]

result.value = parseInt(price.value * qty.value)
// result.value