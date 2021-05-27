var nr,dice,src,urlbg,finalScore1 = 0,finalScore2 = 0,currentScore = 0,gameWon = false,sixCounter = false;
var scoreIPT = 100,dice2,src2,urlbg2;

//score input
function scoreinput(){
    if (document.getElementById("ipt").value == "")
    {
        scoreIPT = 100;
    }
    else
    {
        scoreIPT = document.getElementById("ipt").value;
    }
    document.getElementById("ipt").style.display = "none";
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("newgame").style.top = 45 + "px";
}

//random player function
function playerRow(){
    if (Math.floor(Math.random() * 2) + 1 == 1)
    {
        nr = 1;
        document.getElementById("pl1").style.fontWeight = "normal"
        document.getElementById("pl2").style.fontWeight = "bold";
    }
    else
    {
        nr = 0;
        document.getElementById("pl2").style.fontWeight = "normal"
        document.getElementById("pl1").style.fontWeight = "bold";
    }
    StatusNotify();
}
playerRow();

//dice roll
document.getElementById("rolldice").onclick = function(){
    if (gameWon == false)
    {
        dice = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        src = "Poze Proiect/dice-" +dice+".png"
        src2 = "Poze Proiect/dice-" +dice2+".png"
        urlbg = 'url("'+ src + '")';
        urlbg2 = 'url("'+ src2 + '")';
        document.getElementById("photo").style.backgroundImage = urlbg;
        document.getElementById("photo2").style.backgroundImage = urlbg2;
        if (dice != 1 || dice2 != 1)
        {
            if (dice == 6 && dice2 == 6)
            {
                sixCounter = true;
            }
            else
            {
                sixCounter = false;
            }
            currentScore+=dice;
            currentScore+=dice2;
        }
        else
        {
            curentscore();
        }
        if (sixCounter == true)
        {
            curentscore();
            sixCounter = false;
        }
        if (nr % 2 == 0)
        {
           document.getElementById("currentscore1").innerHTML = currentScore;
        }
        else
        {
           document.getElementById("currentscore2").innerHTML = currentScore;
        }
        StatusNotify();
        document.getElementById("photo").style.display = "block";
        document.getElementById("photo2").style.display = "block";
    }
    document.getElementById("ipt").style.display = "none";
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("newgame").style.top = 45 + "px";
}

//changing players function
function curentscore()
{
    currentScore = 0;
    document.getElementById("currentscore1").innerHTML = "0";
    document.getElementById("currentscore2").innerHTML = "0";
    if (nr % 2 == 1)
    {
        nr = 0;
        document.getElementById("pl2").style.fontWeight = "normal"
        document.getElementById("pl1").style.fontWeight = "bold";
    }
    else
    {
        document.getElementById("pl1").style.fontWeight = "normal"
        document.getElementById("pl2").style.fontWeight = "bold";
        nr = 1;
    }
}

//hold
document.getElementById("hold").onclick = function(){
    if (gameWon == false)
    {
        if (nr % 2 == 0)
        {
            finalScore1+=currentScore;
            document.getElementById("score1").innerHTML = 0;
            document.getElementById("score1").innerHTML = finalScore1;
            document.getElementById("pl1").style.fontWeight = "normal"
            document.getElementById("pl2").style.fontWeight = "bold";
        }
        else if (nr % 2 == 1)
        {
            finalScore2+=currentScore;
            document.getElementById("score2").innerHTML = 0;
            document.getElementById("score2").innerHTML = finalScore2;
            document.getElementById("pl2").style.fontWeight = "normal"
            document.getElementById("pl1").style.fontWeight = "bold";
        }
        curentscore();
        StatusNotify();
        if (finalScore1 >= parseInt(scoreIPT))
        {
            document.getElementById("pl1").textContent = "WINNER !";
            document.getElementById("nowchoosing").textContent = "";
            document.getElementById("playerselect").textContent = "";
            document.getElementById("pl2").style.fontWeight = "normal";
            gameWon = true;
        }
        else if (finalScore2 >= parseInt(scoreIPT))
        {
            document.getElementById("pl2").textContent = "WINNER !";
            document.getElementById("nowchoosing").textContent = "";
            document.getElementById("playerselect").textContent = "";
            document.getElementById("pl1").style.fontWeight = "normal";
            gameWon = true;
        }
        sixCounter = 0;
    }
    document.getElementById("ipt").style.display = "none";
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("newgame").style.top = 45 + "px";
}

//new game or win function
function NewGameOrWin(){
    currentScore = 0;
    document.getElementById("pl1").textContent = "PLAYER 1";
    document.getElementById("pl2").textContent = "PLAYER 2";
    document.getElementById("currentscore1").innerHTML = "0";
    document.getElementById("currentscore2").innerHTML = "0";
    document.getElementById("nowchoosing").innerText = "Now Choosing:"
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
    document.getElementById("photo").style.display = "none";
    document.getElementById("photo2").style.display = "none";
    finalScore1 = 0;
    finalScore2 = 0;
    gameWon = false;
    playerRow();
}

//new game
document.getElementById("newgame").onclick = function(){
    NewGameOrWin();
    document.getElementById("photo").style.backgroundImage = "none";
    document.getElementById("photo2").style.backgroundImage = "none";
    document.getElementById("ipt").style.display = "block";
    document.getElementById("submitbutton").style.display = "block";
    document.getElementById("newgame").style.top = 85 + "px";
}

//notify box
function StatusNotify(){
    if (nr % 2 == 0)
    {
        document.getElementById("playerselect").innerText = "Player 1";
    }
    else
    {
        document.getElementById("playerselect").innerText = "Player 2";
    }
}