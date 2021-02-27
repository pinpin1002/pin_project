function addnewpost(){
    let newpost = document.getElementById('new-post');
    console.log(newpost.style)

    if (newpost.style.display==='none'){
        newpost.style.display='block';
    }
    else if(newpost.style.display === 'block'){
        newpost.style.display='none';
    }
}


function openpopup(){
    let popup = document.getElementById('popup1');
    if (popup1.style.display==='none'){
        popup1.style.display='block';
    }
    else if(popup1.style.display === 'block'){
        popup1.style.display='none';
    }
}

function openpopupx(){
    let popup = document.getElementById('popup2');
    if (popup2.style.display==='none'){
        popup2.style.display='block';
    }
    else if(popup2.style.display === 'block'){
        popup2.style.display='none';
    }
}





function add()
{
 let x=document.getElementById("number").innerHTML;
  if (x<30){
 x=parseInt(x)+1;
 }
 document.getElementById("number").innerHTML=x;
}

function minus()
{
 let x=document.getElementById("number").innerHTML;
 if (x>1){
  x=parseInt(x)-1;
 }
 document.getElementById("number").innerHTML=x;
}

function datenow()
{
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("min", today);
}

