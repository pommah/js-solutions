var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|[^A-Za-z])'/g, function(match){
 if (match.length == 2)
   return match[0]+"\"";
 else
   return "\"";}));
// → "I'm the cook," he said, "it's my job."