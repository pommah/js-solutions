var size = 8;
var evenString="";
var oddString="";
var string;
for (var i=0; i<size; i++){
  if(i % 2 === 0){
    oddString+=" ";
    evenString+="#";
  }
  else{
    oddString+="#";
    evenString+=" ";
  }
}
evenString+="\n";
oddString+="\n";
for (var i=0; i<size; i++){
  if(i % 2 === 0){
    string+=oddString;
  }
  else{
    string+=evenString;
  }
}
console.log(string);