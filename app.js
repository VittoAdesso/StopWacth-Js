// creo función que ejecute cada vez que abra la ventana
window.onload = function () {

    // declaro variables que utilizaré
    let seconds = 00; 
    let tens = 00; 
    // algunas las llamo del documento html por sus ids que crearé más adelante
    let appendTens = document.getElementById('tens'); 
    let appendSeconds = document.getElementById('appendSeconds');
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset'); 
    let Interval; 


    //función que utilizaré cada vez que le de al botoón 
        buttonStart.onclick = function() {

            clearInterval(Interval);
            //start timer función de más abajo
            Interval = setInterval(startTimer, 10); 
        }

          //función que utilizaré cada vez que le de al botoón 
        buttonStop.onclick = function() {
            //guarda en pantalla lo que llevo acumulado
            clearInterval(Interval); 
        }

          //función que utilizaré cada vez que le de al botoón 
        buttonReset.onclick = function () {
            clearInterval(Interval); 
            //formatea todo
                tens ='00';
                seconds = '00'; 
                //sobrescribe el html 
                appendTens.innerHTML = tens; 
                appendSeconds.innerHTML = seconds; 
        }

  //función que utilizaré cada vez que le de al botón 
        function startTimer () {
            tens ++; 
            
            if( tens <=9){
                appendTens.innerHTML = '0' + tens; 
            }
            if( tens > 9 ){
                appendTens.innerHTML = tens; 
            }
            if(tens > 99){
                
                seconds++; 
                appendSeconds.innerHTML = '0' + seconds; 
                tens = 0; 
                appendTens.innerHTML = '0' + 0; 
            }
            if(seconds > 9){
                appendSeconds.innerHTML = seconds; 
            }
        }











}

