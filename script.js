

let question1= document.querySelector(".question1");
let question2Button= document.querySelector(".question2Button");
let question2= document.querySelector(".question2");
let result=document.querySelector(".result");
question2Button.onclick = function() {
let userComment2=document.querySelector(".userComment2").value
  ; 
    console.log(userComment2);
let userComment1=document.querySelector(".userComment1").value;
    console.log(userComment1);
    if (userComment1 <=4 && userComment2 === "loved") {
        result.innerHTML = "Milk Chocolate";
    }
    else  if (userComment1 <=4 && userComment2 === "feared") {   result.innerHTML = "White Chocolate";
    }
        else  if (userComment1 <=8 && userComment2 === "loved") {   result.innerHTML = "Semi-Sweet Chocolate";
    }
        else  if (userComment1 <=8 && userComment2 === "feared") {   result.innerHTML = "Dark Chocolate";
    }
    else  if (userComment1 <=4 && userComment2 === "neither") {   result.innerHTML = "Unsweetned Chocolate";
    }
 else  if (userComment1 <=8 && userComment2 === "neither") {   result.innerHTML = "Bitter-Sweet Chocolate";
    }
};


