questionturn  = "player1";
answerturn = "player2";

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ": " ;
document.getElementById("player2_name").innerHTML = player2_name + ": " ;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;


function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(word);
    c1 = word.charAt(1);
    lengthdivideTo = Math.floor(word.length/2);
    c2 = word.charAt(lengthdivideTo);
    lengthminus1 = word.length -1;
    c3 = word.charAt(lengthminus1);
    removec1 = word.replace(c1,"_");
    removec2  = removec1.replace(c2,"_");
    removec3 = removec2.replace(c3,"_");
 
    questionWord = "<h4 id=word_display>Q."+ removec3 + "</h4>";
    inputBox = "<br>Answer : <input type='text' id='inputcheckbox'>";
    checkButton = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button> ";
    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
 
 }
function check() {
    getanswer = document.getElementById("inputcheckbox").value;
    answer = getanswer.toLowerCase();
    console.log("answer-"+ answer);
    if(answer == word) {
      if (answerturn == "player1") {
    player1_score = player1_score +1;
    document.getElementById("player1_score").innerHTML = player1_score;
      }
      else{
          player2_score = player2_score+1;
          document.getElementById("player2_score").innerHTML = player2_score;

      }  
    }
    if(questionturn == "player1") {
      questionturn = "player2";
      document.getElementById("player_question").innerHTML = "Question turn -" + player2_name;
    }
    else {
        questionturn = "player1";
        document.getElementById("player_question").innerHTML ="Question turn -" + player1_name;
    }
    if (answerturn == "player2") {
        answerturn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn -" + player1_name;
    }
    else {
        answerturn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;

    }
    document.getElementById("output").innerHTML = "";
}
 