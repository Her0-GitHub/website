const NumFile = 3;
let activeImg = 1; // 1..NumFIle

const dot = document.getElementById('dot');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const img = document.getElementsByTagName('img')[0];

leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);

for(let i = 0; i<NumFile; i++){
    const newDot = document.createElement("div");
    newDot.setAttribute("n", i+1);
    if(i == activeImg-1){
        newDot.setAttribute("class", "dot active");
        img.src = "img/Img" + activeImg + ".png";
        img.setAttribute('n', activeImg);
    }
    else            newDot.setAttribute("class", "dot");
    dot.appendChild(newDot);
    newDot.addEventListener("click", goto);
}
console.log("fine setup " + activeImg)
function goto(){
    if(this.className != 'dot active'){
        const n = parseInt(this.getAttribute('n'));
        img.src = "img/Img" + n + ".png";
        img.setAttribute("n", n);
        this.classList.add('active');
        document.getElementsByClassName('dot')[activeImg-1].classList.remove('active');
        activeImg = n;
    }
    console.log(activeImg);
}
function left(){
    let n = parseInt(img.getAttribute('n'))-1;
    if(n < 1){
        n = 3;
    }
    img.setAttribute("n", n);
    img.src = "img/Img" + n + ".png";
    document.getElementsByClassName('dot')[n-1].classList.add('active');
    document.getElementsByClassName('dot')[activeImg-1].classList.remove('active');
    activeImg = n;
}

function right(){
    let n = parseInt(img.getAttribute('n'))+1;
    if(n > 3){
        n = 1;
    }
    img.setAttribute("n", n);
    img.src = "img/Img" + n + ".png";
    document.getElementsByClassName('dot')[n-1].classList.add('active');
    document.getElementsByClassName('dot')[activeImg-1].classList.remove('active');
    activeImg = n;
}