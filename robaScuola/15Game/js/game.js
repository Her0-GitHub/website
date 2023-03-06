const board = document.getElementsByClassName("box");

for (let i = 0; i < board.length; i++) {
    if(i != board.length-1) board[i].innerHTML = i+1;
    board[i].addEventListener("click", move);
}

let first = true;
let idEmpty = "box-16";

function move(){
    const empty = document.getElementById(idEmpty);
    const dif  = Math.abs(parseInt(this.id.slice(4)) - parseInt(empty.id.slice(4)));
    if(this.innerHTML != '' &&  (dif == 4 || dif == 1)){
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
    showDialog(`15 Game`, "Tempo Totale: " + (document.getElementById("cronometro").innerText).replaceAll("\n", ""), "Gioca");
}

function shuffle() {
    // Configurazione casuale
    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = board[i].innerHTML;
        board[i].innerHTML = board[j].innerHTML;
        board[j].innerHTML = temp;

        const tempClass = board[i].className;
        board[i].className = board[j].className;
        board[j].className = tempClass;
    }
    // Verifica
    let inversions = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i].innerHTML !== "") {
            for (let j = i + 1; j < board.length; j++) {
                if (board[j].innerHTML !== "" && parseInt(board[i].innerHTML) > parseInt(board[j].innerHTML)) {
                    inversions++;
                }
            }
        }
    }
    const emptyIndex = Math.floor(board.length / 4) * 4 - 1;
    const emptyRow = Math.floor(emptyIndex / 4) + 1;
    if ((inversions + emptyRow) % 2 !== 0) {
        shuffle();
    }
}
shuffle();