/* button.onclick = function "My Function"(){
  var myArray = ['January', 'February', 'March'];
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
}
*/

/*function myFunction(){
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

var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Big Suze"
words[2] = "Mermaids"
words[3] = "Bling blini"
words[4] = "Irish goodbye"
words[5] = "Bon temps"
words[6] = "Grousewife"
words[7] = "Catherine Howard"
words[8] = "Richard Burton"
words[9] = "February party"
words[10] = "Doubles"
words[11] = "Magic 8 ball"
words[12] = "Good luck ghost"
words[13] = "Wintry mix"
words[14] = "DragonFlu"
words[15] = "Knoll hole"
words[16] = "Female trouble"
words[17] = "Angst poem"
words[18] = "Beetlebum"
words[19] = "Horny Sigourney"
words[20] = "Reindeer season"
words[21] = "Chamomile"
words[22] = "Church wood"
words[23] = "Paris Cherry"
words[24] = "Dunkirk painting"
words[25] = "Viktor Krum"
words[26] = "Saltine Martini"
words[27] = "Snowglobe"
words[28] = "Schnozberries"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
