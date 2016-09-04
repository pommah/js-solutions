<input type="text">
<script>
  var field = document.querySelector("input");
  field.addEventListener("keypress", function(event) {
    var ch = event.charCode;
    if (/[qwx]/i.test(String.fromCharCode(event.charCode))){
      event.preventDefault();
    }
  });
</script>
