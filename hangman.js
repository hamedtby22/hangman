const secret=["always","orange","first","fotball","name"];
let randomitem="";
let clicked=[];
let result=""
let mistake=0;
function selectrandom() {
    randomitem=secret[Math.floor(Math.random()*secret.length)];
    document.getElementById("letters").addEventListener("click",mousehandler);
    window.addEventListener("keydown",keyhandler);
    document.getElementById("gameover").querySelector("p").remove();
    // console.log(randomitem);
    
}
function setunderline() {
    let splitedword=randomitem.split("")
    let mappedword=splitedword.map(letter=>(clicked.indexOf(letter)>=0 ? letter : "_"))
    result=mappedword.join("");
    document.getElementById("clue").innerHTML=`<p>${result}</p>`
}
function wongame() {
    if (randomitem===result) {
        document.getElementById("image").querySelector("img").src="assets/winner.png";
    document.getElementById("clue").innerText="YOU WIN";
    }
}
function losegame() {
    if (mistake===6) {
        document.getElementById("clue").innerText=`RANDOMITEM IS : (${randomitem.toUpperCase()})`;
        document.getElementById("image").querySelector("img").src="assets/hangman6.png"
        document.getElementById("gameover").innerHTML=`GAME OVER`;
    }
}
function updatepicture() {
    const image=document.getElementById("image").querySelector("img");
    image.src=`assets/hangman${mistake}.png`;
}
function letterhandler(letter) {
    letter=letter.toLowerCase();
    clicked.indexOf(letter)===-1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className="used";
    if (randomitem.indexOf(letter) >=0) {
        setunderline();
        wongame();
    }else if (randomitem.indexOf(letter)===-1) {
        mistake++;
        losegame()
        updatepicture();
    }
}

function mousehandler(event) {
    letterhandler(event.target.id)
}
function keyhandler(event) {
    letterhandler(event.key)
}

selectrandom();
setunderline();