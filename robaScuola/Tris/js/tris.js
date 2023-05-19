turno = "X";
nTurni = 0;
board = document.getElementsByClassName("box");
for (i = 0; i < board.length; i++) {
    board[i].addEventListener("click", input);
}
function input() {
    if (this.innerHTML == '') {
        nTurni++;
        document.getElementById(this.id).innerHTML = turno;
        if(win(this.id))            return;
        else if(nTurni == 9)        showDialog(`Pareggio`, '', 'Gioca Ancora');
    } else return;
    
    if (turno == "X")   turno = "O";
    else                turno = "X";
}
function win(add) {
    if( (document.getElementById("a1").innerHTML == turno && document.getElementById("a2").innerHTML == turno && document.getElementById("a3").innerHTML == turno) ||  // A-A-A-
        (document.getElementById("b1").innerHTML == turno && document.getElementById("b2").innerHTML == turno && document.getElementById("b3").innerHTML == turno) ||  // B-B-B-
        (document.getElementById("c1").innerHTML == turno && document.getElementById("c2").innerHTML == turno && document.getElementById("c3").innerHTML == turno) ||  // C-C-C-
        (document.getElementById("a1").innerHTML == turno && document.getElementById("b1").innerHTML == turno && document.getElementById("c1").innerHTML == turno) ||  // A|A|A|
        (document.getElementById("a2").innerHTML == turno && document.getElementById("b2").innerHTML == turno && document.getElementById("c2").innerHTML == turno) ||  // B|B|B|
        (document.getElementById("a3").innerHTML == turno && document.getElementById("b3").innerHTML == turno && document.getElementById("c3").innerHTML == turno) ||  // C|C|C|
        (document.getElementById("a1").innerHTML == turno && document.getElementById("b2").innerHTML == turno && document.getElementById("c3").innerHTML == turno) ||  // A\B\C\
        (document.getElementById("a3").innerHTML == turno && document.getElementById("b2").innerHTML == turno && document.getElementById("c1").innerHTML == turno)     // C/B/A/
    ){
        document.getElementById(add).innerHTML = turno;
        showDialog('Tris', `Ha vinto il giocatore ${turno}`, 'Gioca Ancora');
        return 1;
    }
    return 0;
}
function clear(){
    nTurni = 0;
    for (i = 0; i < board.length; i++) {
        board[i].innerHTML = '';
    }
    hideDialog();
}
