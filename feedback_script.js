//Using Java Script to add attributes to Form.
var input1 = document.getElementById('guestname');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'guestname');

var input2 = document.getElementById('email');
input2.setAttribute('type', 'email');
input2.setAttribute('name', 'email');

var input3 = document.getElementById('often');
input3.setAttribute('type', 'range');
input3.setAttribute('name', 'how_often_you_cook');
input3.setAttribute('value', '3');
input3.setAttribute('min', '1');
input3.setAttribute('max', '5');

var input4 = document.getElementById('cheese');
input4.setAttribute('type', 'checkbox');
input4.setAttribute('name', 'favorite_recipe');
input4.setAttribute('value', 'cheese');

var input4A = document.getElementById('brigadeiro');
input4A.setAttribute('type', 'checkbox');
input4A.setAttribute('name', 'favorite_recipe');
input4A.setAttribute('value', 'brigadeiro');

var input4B = document.getElementById('feijoada');
input4B.setAttribute('type', 'checkbox');
input4B.setAttribute('name', 'favorite_recipe');
input4B.setAttribute('value', 'feijoada');

var input4C = document.getElementById('carrot');
input4C.setAttribute('type', 'checkbox');
input4C.setAttribute('name', 'favorite_recipe');
input4C.setAttribute('value', 'carrotcake');

var input5 = document.getElementById('yes');
input5.setAttribute('type', 'radio');
input5.setAttribute('name', 'like');
input5.setAttribute('value', 'yes');

var input5A = document.getElementById('no');
input5A.setAttribute('type', 'radio');
input5A.setAttribute('name', 'like');
input5A.setAttribute('value', 'no');

var input6 = document.getElementById('comment');
input6.setAttribute('type', 'text');
input6.setAttribute('name', 'comments');
input6.setAttribute('rows', '10');
input6.setAttribute('cols', '40');


//Field name is required - show alert if field is black.
function myForm() {
  var reqName = document.forms["feedback"]["guestname"].value;
  if (reqName == "") {
    alert("Please filled out your Name");
    return false;
  } 
}





