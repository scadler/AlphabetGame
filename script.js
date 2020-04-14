var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var blackListLetter = {
    letter : "",
}
function pickLetter(){
    var abIndex = Math.floor(Math.random()*26)
    blackListLetter.letter = alphabet[abIndex]
    console.log(blackListLetter.letter)
}
pickLetter()
$("#inputButton").click(function(){
    var input = $("#input").val()
    let regex = new RegExp(blackListLetter.letter);
    var test = regex.test(input)
    console.log(test)
})
$("#inputLetterButton").click(function(){
    var input = $("#inputLetter").val().toLowerCase()
    if(input === blackListLetter.letter){
        console.log("works")
    }
})