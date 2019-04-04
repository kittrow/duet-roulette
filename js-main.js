
var NumberOfWords = 110

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
words[66] = "Shitty Italy"
words[67] = "Rivendale"
words[68] = "Chainmail"
words[69] = "Two-in-one"
words[70] = "Quagmire"
words[71] = "Straight girls"
words[72] = "Horny Sigourney"
words[73] = "Sleeper hit"
words[74] = "Desperate Housewives"
words[75] = "Bedchamber crisis"
words[76] = "Coxcomb"
words[77] = "Codpieces"
words[78] = "Dirndls"
words[79] = "Cassata cake"
words[80] = "Drunk crumpet"
words[81] = "Pepto puppy"
words[82] = "Cat Stevens"
words[83] = "Finger fool"
words[84] = "Star-jelly"
words[85] = "Mitzvah airbrush"
words[86] = "Meade"
words[87] = "Pyrotechnics"
words[88] = "Concept cousins"
words[89] = "Fruit soup"
words[90] = "Forty-ounce"
words[91] = "Quentin Blake"
words[92] = "Funfetti"
words[93] = "Clingstones"
words[94] = "Apple butter"
words[95] = "Fantasy bits"
words[96] = "Shagatha Christie"
words[97] = "Blueberry flowers"
words[98] = "Cheryl Blossom"
words[99] = "Celestial prude"
words[100] = "Service bell"
words[101] = "Peccadilloes"
words[102] = "Tower porn"
words[103] = "Cleavage rhombus"
words[104] = "Mouse proud"
words[105] = "Easter hunt"
words[106] = "Mystery Gang"
words[107] = "Moonglow"
words[108] = "St. Sebastian"
words[109] = "Gibson Girl"
words[110] = "Sangfroid"






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
