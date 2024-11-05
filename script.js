let losDiv = document.getElementById("losowanie");
let heartDiv = document.getElementById("hearts");
var currNum = 0;
var hearts = 3;
var clicked = false;
var num = 0;
//Losowanie numbers
function myFunction(){
    clicked = false;
    currNum++;
    losDiv.innerHTML = currNum;
    num = currNum;
}


let scoreDiv = document.getElementById("score");
var counter = 0;
document.write(currNum);

//Sprawdzanie liczby
function checkNum(){        // czy podzlielne
    if(clicked == false){
        if(currNum % 7 == 0 || contain_num())
            counter++;
        else    
            hearts--;
    
    clicked = true;
    scoreDiv.innerHTML = counter;
    heartDiv.innerHTML = hearts;
    if(hearts <= 0)
        endGame();
    }
}


function contain_num(){     // czy zawiera liczbe
    while(num > 0){
        if(num % 10 == 7){
            return true;
        }
        else{
            num = num / 10;
        }
    }
    return false;
}


//Start Game
let interval = 0;
var lvl = 0;

function starterPack(){
    currNum = 0;
    counter = 0;
    scoreDiv.innerHTML = counter;
    clearInterval(interval);
    let clicked = false;
    hearts = 3;
    heartDiv.innerHTML = hearts;
}

//Levels
function lvl1(){
    lvl = 1;
    starterPack();
    interval = setInterval(myFunction, 1500);
}

function lvl2(){
    lvl = 2;
    starterPack();
    interval = setInterval(myFunction, 1000);
}

function lvl3(){
    lvl = 3;
    starterPack();
    interval = setInterval(myFunction, 500);
}

//Increasing speed Lvl
var freq;
function lvlMix(){
    lvl = 4;
    starterPack();
    freq = 3000; // 5s
    interval = setInterval(myFunction, freq)
    setInterval(changer, 100000); // 10s
}

function changer(){     //changing speeed
    clearInterval(interval)
    if(freq > 500){
         freq = freq * 0.8 // x1.5
    }
    interval = setInterval(myFunction, freq);
}

var sec = 0;
function timer(){
    sec++;
    document.getElementById("timer").innerHTML = sec;
}



var imie = '';
function saveName(){
    imie = document.getElementById("imie").value;
}



var bestScore = 0;
var score1 = 0, score2 = 0, score3 = 0;

function endGame(){
    document.querySelector(".end_koniec").innerHTML="KONIEC GRY";
    if(lvl == 1){
        if(counter >= score1){
            score1 = counter;
            document.getElementById("nameLvl1").innerHTML = score1;
            document.getElementById("scoreLvl1").innerHTML = imie;
        }
    }
    if(lvl == 2){
        if(counter >= score2){
            score2 = counter;
            document.getElementById("nameLvl2").innerHTML = score2;
            document.getElementById("scoreLvl2").innerHTML = imie;
        }
    }
    if(lvl == 3){
        if(counter >= score3){
            score3 = counter;
            document.getElementById("nameLvl3").innerHTML = score3;
            document.getElementById("scoreLvl3").innerHTML = imie;
        }
    }

    if(lvl == 4){
        if(counter >= score4){
            score4 = counter;
            document.getElementById("nameLvl4").innerHTML = score4;
            document.getElementById("scoreLvl4").innerHTML = imie;
        }
    }
    
    currNum = 0;
    clearInterval(interval);
}





