<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var header = document.createElement("tr");
    table.appendChild(header);
    var keys = Object.keys(data[0]);
    keys.forEach(function(key){
      var column = document.createElement("th");
      column.textContent = key;
      header.appendChild(column);
    });
    data.forEach(function(entry){
      var row = document.createElement("tr");
      keys.forEach(function(param){
      	if(keys.includes(param)){
        	var cell = document.createElement("td");
            var content = entry[param];
          	if (typeof(content) == "number"){
              cell.style.textAlign = "right";
            }
        	cell.textContent = content;
        	row.appendChild(cell);
      	}
      });
      table.appendChild(row);
    });
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>
