class GameStopwatch{
    constructor(stopwatchContainer){
        this.totalTime = 0; // time in milliseconds
        this.Intervalo;

    }
    buildStopwatch(stopwatchContainer){
        this.min = document.createElement("span");
        this.sec = document.createElement("span");
        this.ms = document.createElement("span");

        this.stopwatchContainer.appendChild(this.min);
        this.stopwatchContainer.appendChild(this.sec);
        this.stopwatchContainer.appendChild(this.ms);
    }
    updateCronometro(){
        totalTime += 100;
        let ms = totalTime / 100;
        let secondi = Math.floor(totalTime / 1000);
        let minuti = Math.floor(secondi / 60);
        ms %= 10;
        secondi = (secondi % 60).toString().padStart(2, "0");
        minuti = (minuti % 60).toString().padStart(2, "0"); // min = min % 60
        document.getElementById("minuti").innerHTML = minuti; // 01 = 60.0
        document.getElementById("secondi").innerHTML = secondi; // 01
        document.getElementById("ms").innerHTML = ms; // 0.1
    }
    startCronometro() {
        Intervalo = setInterval(updateCronometro, 100);
    }
    stopCronometro() {
        clearInterval(Intervalo);
    }
    clearCronometro() {
        clearInterval(Intervalo);
        totalTime = 0;
        document.getElementById("minuti").innerHTML = '00';
        document.getElementById("secondi").innerHTML = '00';
        document.getElementById("ms").innerHTML = '0';
    }
}