<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    var array = [];
    var childs = node.childNodes;
    for (var i=0; i<childs.length; i++){
      if (childs[i].tagName === tagName.toUpperCase()){
        array.push(childs[i]);
      }
      array = array.concat(byTagName(childs[i], tagName));
    }
    return array;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
