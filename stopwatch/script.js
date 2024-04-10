window.onload=function(){
    let minutes=0;
    let seconds=0;
    let tens=0;
    let appendMinutes = document.querySelector("#minutes");
    let appendSeconds = document.querySelector("#seconds");
    let appendTens = document.querySelector("#tens");
    //button functions
    let buttonStart = document.querySelector("#start");
    let buttonStop = document.querySelector("#stop");
    let buttonReset = document.querySelector("#reset");
    let Interval;

    const startTimer =()=>{
        tens++;
        if(tens<=9){
            appendTens.innerHTML="0"+tens;
        }
       if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens > 99){
            seconds++
            appendSeconds.innerHTML="0"+seconds;//these make increase the seconds

            tens=0;
            appendTens.innerHTML="0"+0;//reset the tens to 0

        }
        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
        if(seconds>59){
            minutes++;//increment
            appendMinutes.innerHTML="0"+minutes//after completing 59 seconds it increment in the minutes
            seconds=0;
            appendSeconds.innerHTML="0"+0;//reset seconds to zero
        }
        };
        buttonStart.onclick = ()=>{
            clearInterval(Interval);
            Interval=setInterval(startTimer,10);
        };
        buttonStop.onclick = ()=>{
            clearInterval(Interval);
        };
        buttonReset.onclick = ()=>{
            clearInterval(Interval);
            tens="00";
            seconds="00";
            minutes="00";
            appendTens.innerHTML=tens;
            appendSeconds.innerHTML=seconds;
            appendMinutes.innerHTML=minutes;

    };
}
