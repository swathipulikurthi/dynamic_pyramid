function designPyramid() {
  var n = parseInt(document.getElementById("count").value);
  if(n>0)
  {
    document.getElementById("pyramid").innerHTML=" ";
  for (var i = 1; i <= n; i++) {
    var line='';
    for (var k = n - i; k > 0; k--) {
     document.getElementById("pyramid").innerHTML+=" ";
    }
    for (var j = 1; j <= ((2 * i) - 1); j++) {
      line = line + '*';

    }
   
   document.getElementById("pyramid").innerHTML+=line;
   document.getElementById("pyramid").innerHTML+="<br/>";
  }
}
else
alert("Please specify a valid number greater than 0")

}