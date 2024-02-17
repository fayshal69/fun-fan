const fan = document.getElementById('fan');
let fanOn = false;
let input = 'animate-[spin_1s_linear_infinite]';
let input1 = 'animate-[spin_0.1s_linear_infinite]';
let input2 = 'animate-[spin_0.4s_linear_infinite]';
let input3 = 'animate-[spin_0.8s_linear_infinite]';


function startFan() {
    fanOn = true;
    fan.classList.add(input);
}

function stopFan() {
    fanOn = false;
    fan.classList.remove(input);
    fan.classList.remove(input1);
    fan.classList.remove(input2);
    fan.classList.remove(input3);
}

function changeSpeed(speed) {
    fan.classList.remove(input);
    fan.classList.remove(input1);
    fan.classList.remove(input2);
    fan.classList.remove(input3);

    if(fanOn) {
        switch(speed) {
            case 1:
                fan.classList.add(input1);  
                break;
            case 2:
                fan.classList.add(input2);  
                break;
            case 3:
                fan.classList.add(input3);  
                break;          
        }
    }
}