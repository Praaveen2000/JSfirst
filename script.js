// console.log("Hello World");
// var name= 10%3;
// console.log(name);

//  Day3
// console.log("Welcome to Day3")
// var h1Elem = document.getElementById('sec');
// h1Elem.innerText = "Change";

// var btnElem = document.getElementById('my-btn');
// btnElem.textContent = "Change it new";

// var h2Elem = document.getElementsByClassName('my-class');

// btnElem.addEventListener('click',function(){
//     alert("Tell me what to do");
// })
// var btn1Elem = document.getElementById('prompt');

// btn1Elem.addEventListener('click',function(){
//     var Name = prompt("Tell me about Yourself");
//     var pElem = document.getElementById('name');
//     pElem.textContent = Name;
// })
// var nameValue = h2Elem.Value
var emailElem = document.getElementById('mail')
var nameElem = document.getElementById('name');
var btnElem = document.getElementById('btn');

var name = document.getElementById('nameText');
var email = document.getElementById('emailText');

const formElem = document.getElementById('my-form');
formElem.addEventListener('submit',function(e){
     e.preventDefault();
     console.log("Submitted");
     console.log(emailElem.value);
     console.log(nameElem.value);
     name.textContent = nameElem.value;
     email.textContent = emailElem.value;
     
    

})

