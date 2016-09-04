function withBoxUnlocked(body) {
  var locked = box.locked;
  if (locked){
    box.unlock();
  }
  try{
    body();
  }
  finally{
    if(locked){
      box.lock();
    }
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true