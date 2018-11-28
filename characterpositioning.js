// function countLetters(str){
//   var noSpaces = str.split(" ").join("");
//   var output = {};

//   for(var i = 0; i < noSpaces.length; i++){
//     var letter = noSpaces[i];
//     if(output[letter]){
//       output[letter] += ", " + i.toString();
//     }else{
//       output[letter] = i.toString();
//     }
//   }
//   return output;
// }

function countLetters(str){
  var noSpaces = str.split(" ").join("");
  var output = {};
  for(var i = 0; i < noSpaces.length; i++){
    var letter = noSpaces[i];
    if(output[letter]) {
      output[letter].push(i);
    }else{
      output[letter] = [i];
    }
  }
  return output;
}


console.log(countLetters("lighthouse in the house"));