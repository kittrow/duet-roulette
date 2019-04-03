/* button.onclick = function "My Function"(){
  var myArray = ['January', 'February', 'March'];
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
}
*/

function myFunction(){
  var myArray = ['January', 'February', 'March'];
var rand = myArray[(Math.random() * myArray.length) | 0]

}

document.getElementById("demo").onclick = function(){myFunction()};

/*function myFunction(){
  var myArray = ['January', 'February', 'March'];
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
}
*/

/*function myFunction(){
  document.getElementById("demo").innerHTML = "Hello World";
}
*/
