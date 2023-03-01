const board = document.getElementsByClassName("box");

for (let i = 0; i < board.length; i++) {
    if(i != board.length-1) board[i].innerHTML = i+1;
    board[i].addEventListener("click", move);
}

idEmpty = "box-16";
function move(){
    empty = document.getElementById(idEmpty);
    dif  = Math.abs(parseInt(this.id.slice(4)) - parseInt(empty.id.slice(4)));
    if(this.innerHTML != '' &&  (dif == 4 || dif == 1)){
        this.className = 'box empty';
        empty.className = 'box'
        temp = this.innerHTML;
        this.innerHTML = empty.innerHTML;
        empty.innerHTML =  temp;
        idEmpty = this.id;
    }
}