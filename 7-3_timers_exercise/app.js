
function countdown(num){
    let timer = setInterval(function() {
        num--;
        if(num <= 0) {
            clearInterval(timer);
            console.log('DONE!');
        } else {
            console.log(num);
        }
    },1000)  
}


function randomGame() {
    let num;
    let countTimes = 0;
    let timer = setInterval(function() {
        num = (Math.random().toFixed(2));
        console.log(num);
        countTimes++;
        if(num > .75) {
            clearInterval(timer);
            console.log(`It took ${countTimes} try/tries to find a number greater than .75.`);
        }
    },1000) 
}


