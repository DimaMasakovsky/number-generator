var min = document.getElementById("min");
var max = document.getElementById("max");
var quantity = document.getElementById("quantity");
var output = document.getElementById("output");
var button = document.getElementById("button");
var array; 

button.addEventListener("click", () => { 
  output.value = getRandomSequence(+min.value, +max.value, +quantity.value).join(" "); 

});


function getRandomNumber(min, max) { 
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomSequence(min, max, quantity) { 
  var result = []; 
  for (var i = 0; i < quantity; i++) { 
    result.push(getRandomNumber(min,max)); 
  } 
  return result; 
}

console.log(getRandomSequence(12,15,5)); 
