const board = document.getElementsByClassName("box");


for (let i = 0, j = 1; i < board.length; i++) {
    if(i != board.length-1) board[i].innerHTML = i+1;
    board[i].addEventListener("click", move);
    board[i].setAttribute("x", (i%4)+1);
    board[i].setAttribute("y", j);
    if(!((i+1)%4))  j++;
}

function setup(){
    shuffle();
    idEmpty = document.getElementsByClassName('box empty')[0].id;
    hideDialog();
    playBtn.addEventListener('click', setup);
}

let first = true;
let idEmpty;

function move(){
    const empty = document.getElementById(idEmpty);
    const x = parseInt(this.getAttribute("x")), y = parseInt(this.getAttribute("y"));
    const emptyx = parseInt(empty.getAttribute("x")), emptyy = parseInt(empty.getAttribute("y"));
    if(   
        this.innerHTML != '' && 
        (x-emptyx == 0 && Math.abs(y-emptyy) == 1) || 
        (y-emptyy == 0 && Math.abs(x-emptyx) == 1)
    ){
        // add class for css
        this.className = 'box empty';
        empty.className = 'box'
        // swap number
        const temp = this.innerHTML;
        this.innerHTML = empty.innerHTML;
        empty.innerHTML =  temp;
        // change id empty var
        idEmpty = this.id;
        // check win only when empty is in box-16
        if(this.id == "box-16"){
            checkWin();
        }
        if(first)  startCronometro(); first = false;
    }   
}

function checkWin(){
    for (let i = 1; i < board.length; i++) {
        if(document.getElementById("box-" + i).innerHTML != i.toString()){
            return;
        }
    }
    stopCronometro();
    showDialog(`15 Game`, "Tempo Totale: " + (document.getElementById("cronometro").innerText).replaceAll("\n", ""), "Reset");
}

function shuffle() {
    /*const empty = document.getElementById(idEmpty);
    const x = parseInt(empty.getAttribute("x"));
    const y = parseInt(empty.getAttribute("y"));*/

    for (let i = board.length - 1; i > 0; i--) {
        const temp = board[i].innerHTML;
        board[i].innerHTML = board[j].innerHTML;
        board[j].innerHTML = temp;

        const tempClass = board[i].className;
        board[i].className = board[j].className;
        board[j].className = tempClass;
    }
}
setup();