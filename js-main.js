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

var NumberOfWords = 65

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
words[19] = "Fall obligation"
words[20] = "Reindeer season"
words[21] = "Chamomile"
words[22] = "Church wood"
words[23] = "Paris Cherry"
words[24] = "Dunkirk painting"
words[25] = "Viktor Krum"
words[26] = "Saltine Martini"
words[27] = "Snowglobe"
words[28] = "Schnozberries"
words[29] = "Surf rock"
words[30] = "Skater boys"
words[31] = "Fairy portrait"
words[32] = "Maiden name"
words[33] = "Dog friends"
words[34] = "Art tarts"
words[35] = "smallgoth"
words[36] = "Talgarth Toad"
words[37] = "Essex emergency"
words[38] = "Frog possibilities"
words[39] = "Adam Driver"
words[40] = "Hugh cartoon"
words[41] = "Tender buttons"
words[42] = "Punk fanzines"
words[43] = "Glacier fruits"
words[44] = "Enya"
words[45] = "Puzzle painting"
words[46] = "Oysterman"
words[47] = "Antichrists"
words[48] = "Pinky ring"
words[49] = "Hooves"
words[50] = "Renaissance rave"
words[51] = "Soft parade"
words[52] = "Lucite sandwich"
words[53] = "Cedric martyr"
words[54] = "Tiny vinyl"
words[55] = "More Jon Snow"
words[56] = "Foxhall"
words[57] = "Whirlwind thing"
words[58] = "Aquarelles"
words[59] = "Balthus style"
words[60] = "Swashbuckled"
words[61] = "Red hots"
words[62] = "Roman numerals"
words[63] = "Squirrel friends"
words[64] = "Stendhal Syndrome"
words[65] = "Painting hook"



function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)
var rnd2 = Math.ceil(Math.random() * NumberOfWords)
 while(rnd === rnd2) {
   rnd2 = Math.ceil(Math.random() * NumberOfWords)
 }

// Display the word inside the text box
  frm.WordBox.value = words[rnd] + "     " + words[rnd2]
}
