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

console.log(getRandomSequence(1,3,20)); 
