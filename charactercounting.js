function countLetters(str){
  var noSpaces = str.split(" ").join("");
  var outPut = {};

  for(var i = 0; i < noSpaces.length; i++){
    var letter = noSpaces[i];

    if(outPut[letter] === undefined){
      outPut[letter] = 1;
    }else{
      outPut[letter] += 1;
    }
  }
  return outPut;
}

console.log(countLetters("lighthouse is the house"));

