<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  var trails = [];
  var current = 0;
  for (var i=0; i<20; i++){
   	var div = document.createElement("div");
   	div.className = "trail";  
    document.body.appendChild(div);
    trails.push(div);
  }
  document.body.addEventListener("mousemove", function(event){
    if (current === 20){
      current = 0;
    }
  	var div = trails[current];
    div.style.top = event.pageY + "px";
    div.style.left = event.pageX + "px";
    current++;
  });
</script>
