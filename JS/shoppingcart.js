// $('div.cancel').on('click', function(){

//   var is_confirm = confirm("確定要刪除?");
//   if(is_confirm){
//     $(this).closest("div.item").slideUp(500, function(){
//       $(this).remove();
//     })
//   }
// });



// 全選
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


$(document).on("click", 'input.check_item', function(){
  if( $("input.check_item:checked").length == $('input.check_item').length){
     $("input.all_checkbox").prop("checked", true);
  }else{
    $("input.all_checkbox").prop("checked", false);
  }
});





// 數量增減
let total_price = document.getElementsByClassName("total_price")[0]
let sub_price = document.getElementsByClassName("result")
let total_price_value = 0;
for(let i = 0; i < sub_price.length; i++){
  total_price_value += parseInt(sub_price[i].value)
}

total_price.value = total_price_value

 
document.addEventListener("click", function(e){

  
  if(e.target.classList.contains("material-icons")){
    let r = confirm("確定刪除?")
    if(r){
      e.target.closest("div.item").remove();
    }
  }
  
  if(e.target.classList.contains("fa-plus-circle")){
    let price = e.target.closest("div.item1").previousElementSibling.querySelector("input.itemprice");
    let qty = e.target.closest("div.item1").querySelector("input.itemqty");
    let result = e.target.closest("div.item1").nextElementSibling.querySelector("input.result");
    qty.value++;
    result.value = price.value*qty.value
  }
  
  if(e.target.classList.contains("fa-minus-square")){
    let price = e.target.closest("div.item1").previousElementSibling.querySelector("input.itemprice");
    let qty = e.target.closest("div.item1").querySelector("input.itemqty");
    let result = e.target.closest("div.item1").nextElementSibling.querySelector("input.result");
    qty.value > 1 ? qty.value-- : qty.value = 1;
    result.value = price.value*qty.value
  }

  let total_price = document.getElementsByClassName("total_price")[0]
  let sub_price = document.getElementsByClassName("result")
  let total_price_value = 0;
  for(let i = 0; i < sub_price.length; i++){
    total_price_value += parseInt(sub_price[i].value)
  }

  total_price.value = total_price_value
 
})




