let totalTime = 0; // tempo in millisecondi

function updateCronometro(){
    totalTime += 100;
    let ms = totalTime / 100;
    let secondi = Math.floor(totalTime / 1000);
    let minuti = Math.floor(secondi / 60);
    ms %= 10;
    secondi = (secondi % 60).toString().padStart(2, "0");
    minuti = (minuti % 60).toString().padStart(2, "0"); // minuti = minuti % 60
    document.getElementById("minuti").innerHTML = minuti; // 01 = 60.0
    document.getElementById("secondi").innerHTML = secondi; // 01
    document.getElementById("ms").innerHTML = ms; // 0.1
}

let Intervalo;
function startCronometro() {
    Intervalo = setInterval(updateCronometro, 100);
}
  
function stopCronometro() {
    clearInterval(Intervalo);
}

function clearCronometro() {
    clearInterval(Intervalo);
    totalTime = 0;
    document.getElementById("minuti").innerHTML = 0;
    document.getElementById("secondi").innerHTML = 0;
    document.getElementById("ms").innerHTML = 0;
}