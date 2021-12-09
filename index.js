function startTime(){

let initialTime = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
let Hours = document.getElementById('hours');
let Minutes = document.getElementById('mins');
let Seconds = document.getElementById('secs');


const Time = setInterval(function() {
    let currentTime = new Date().getTime();
    let difference = initialTime - currentTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((difference % (1000 * 60)) / 1000);
    
    Hours.innerHTML = hours + "h ";
    Minutes.innerHTML = mins + "m ";
    Seconds.innerHTML = secs + "s ";

    
    function stopTime(){
        clearInterval(Time);
    }
    document.getElementById("stop").addEventListener("click", stopTime);

    function reset(){
        clearInterval(Time);
        Hours.innerHTML = "00h ";
        Minutes.innerHTML = "00m ";
        Seconds.innerHTML = "00s ";
    }
    document.getElementById("reset").addEventListener("click", reset);

});
}
