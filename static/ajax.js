const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = $(document).ready(function() {
    $('#table-data').html('');  // Clear existing table content
  
    $.ajax({
        url: '/get_table_data',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, item) {
                var row = '<ul class="nav-list">' +
                            '<li class="nav-item">' + item.symbol + '</li>' +
                            '<li class="nav-item">' + item.price + '</li>' +
                            '<li class="nav-item">' + item.origQty + '</li>' +
                            '</ul>';
                $('#table-data').append(row);
            });
        }
    });
  });



function upperCase() {
    const x = document.getElementById("symbol").value;
    x = x.toUpperCase();
  }

upperCase();


function calc(){

  var Highest = document.getElementById("Highest").value;
  var Lowest = document.getElementById("Lowest").value;
  var percentage = document.getElementById("percentage");
  if(percentage.value==""){
    percentage.value = (Highest-Lowest)/Lowest*100;
   
    console.log(percentage);
  
  }


}
calc();