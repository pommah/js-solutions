<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    var tabs = [];
    var buttons = [];
    var current = 0;
    var childs = node.childNodes;
    for (var i=0; i<childs.length; i++){
      if (childs[i].tagName === "DIV"){
        var tab = childs[i];
        var button = document.createElement("button");
        button.textContent = tab.getAttribute("data-tabname");
        buttons.push(button);
      	node.appendChild(button);
        tabs.push(tab);
        tab.style.display = "none";
      }
    }
    tabs[current].style.display = "block";
    buttons[current].style.fontWeight = "bold";
    buttons.forEach(function(button, i){
      button.addEventListener("click", function(event) {
        tabs[current].style.display = "none";
        buttons[current].style.fontWeight = "normal";
        current = i;
        tabs[current].style.display = "block";
        buttons[current].style.fontWeight = "bold";
      });
    });
  }
  asTabs(document.querySelector("#wrapper"));
</script>
