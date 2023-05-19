turno = "X";
nTurni = 0;
board = document.getElementsByClassName("box");
for (i = 0; i < board.length; i++) {
    board[i].addEventListener("click", input);
}
function input() {
    if (this.innerHTML == '') {
        nTurni++;
        this.innerHTML = turno;
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
        (document.getElementById("a1").innerHTML == turno && document.getElementById("b1").innerHTML == turno && document.getElementById("c1").innerHTML == turno) ||  // 1|1|1|
        (document.getElementById("a2").innerHTML == turno && document.getElementById("b2").innerHTML == turno && document.getElementById("c2").innerHTML == turno) ||  // 2|2|2|
        (document.getElementById("a3").innerHTML == turno && document.getElementById("b3").innerHTML == turno && document.getElementById("c3").innerHTML == turno) ||  // 3|3|3|
        (document.getElementById("a1").innerHTML == turno && document.getElementById("b2").innerHTML == turno && document.getElementById("c3").innerHTML == turno) ||  // A1\B2\C3\
        (document.getElementById("a3").innerHTML == turno && document.getElementById("b2").innerHTML == turno && document.getElementById("c1").innerHTML == turno)     // C1/B2/A3/
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
