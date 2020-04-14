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
    if(test === true){
        $("#input").css("background-color","#AAFFAA")
         $("#input").css("border-color","#66AA66")
         $("#attempts").text( Number($("#attempts").text()) + 1 )
    }
    else{
         $("#input").css("background-color","#FFAAAA")
         $("#input").css("border-color","#AA6666")
        $("#attempts").text( Number($("#attempts").text()) + 1 )
    }
})
$("#inputLetterButton").click(function(){
    var input = $("#inputLetter").val().toLowerCase()
    if(input === blackListLetter.letter){
        $("#inputLetter").css("background-color","#AAFFAA")
         $("#inputLetter").css("border-color","#66AA66")
        pickLetter()
        $("#attempts").text( "0" )
          $("#score").text( Number($("#score").text()) + 1 )
    }
    else{
         $("#inputLetter").css("background-color","#FFAAAA")
         $("#inputLetter").css("border-color","#AA6666")
         $("#attempts").text( Number($("#attempts").text()) + 1 )
    }
})