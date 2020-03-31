let q1 = document.forms['formMain'].vNaam;
let q1Label = document.getElementById('q1Label');
let q2 = document.forms['formMain'].aNaam;
let q2Label = document.getElementById('q2Label');
let q3m = document.getElementById('q3Man');
let q3v = document.getElementById('q3Vrouw');
let q3Label = document.getElementById('q3Label');
let q4 = document.getElementById('q4').value;
let q4Label = document.getElementById('q4Label');
let q5 = document.getElementById('q5');
let q6 = document.getElementById('q6');
let q6Label = document.getElementById('q6Label');
let q7 = document.getElementById('q7');
let q7Label = document.getElementById('q7Label');
let q8 = document.getElementById('q8');
let q8Label = document.getElementById('q8Label');
let q91 = document.getElementById('q91');
let q92 = document.getElementById('q92');
let q93 = document.getElementById('q93');
let q94 = document.getElementById('q94');
let q95 = document.getElementById('q95');
let q9Label = document.getElementById('q9Label');

let numberGreen = 0;
const totalNumberGreen = 9;

let progressBar = document.getElementById('progress');
const dateButton = document.getElementById('dateButton');

let q1Green = true, q2Green = true, q3Green = true, q4Green = true, q5Green = true, q6Green = true, q7Green = true, q8Green = true, q9Green = true;

window.onload = function(){
    function test(){

        progressBarChange();
        //voornaam
        if(q1.value === ''){
            q1Label.style.backgroundColor = 'ivory';
        }else{
            if(q1.value.length >= 2){
                q1Label.style.backgroundColor = 'green';

                if(q1Green == true){
                    numberGreen++;
                    q1Green = false;
                }
            }
        }

        //achternaam
        if(q2.value === ''){
            q2Label.style.backgroundColor = 'ivory';
        }else{
            if(q2.value.length >= 2){
                q2Label.style.backgroundColor = 'green';

                if(q2Green == true){
                    numberGreen++;
                    q2Green = false;
                }
            }
        }

        if(q3m.checked){
            q3Label.style.backgroundColor = 'green';

            if(q3Green == true){
                numberGreen++;
                q3Green = false;
            }
        }else if(q3v.checked){
            q3Label.style.backgroundColor = 'green';

            if(q3Green == true){
                numberGreen++;
                q3Green = false;
            }
        }

        //date
        dateButton.addEventListener('click', checkDate);

        //color
        q5.addEventListener('input', watchColorPicker, false);

        //phone
        if(q6.value === ''){
            q6Label.style.backgroundColor = 'ivory';
        }else{
            if(q6.value.length === 10){
                q6Label.style.backgroundColor = 'green';

                if(q6Green == true){
                    numberGreen++;
                    q6Green = false;
                }
            }
        }

        //number
        if(q7.value === ''){
            q7Label.style.backgroundColor = 'ivory';
        }else{
            q7Label.style.backgroundColor = 'green';

            if(q7Green == true){
                numberGreen++;
                q7Green = false;
            }
        }

        //area
        if(q8.value === ''){
            q8Label.style.backgroundColor = 'ivory';
        }else{
            q8Label.style.backgroundColor = 'green';

            if(q8Green == true){
                numberGreen++;
                q8Green = false;
            }
        }

        //checkbox
        if(q91.checked){
            q9Label.style.backgroundColor = 'green';
            if(q9Green == true){
                numberGreen++;
                q9Green = false;
            }
        }else if(q92.checked){
            q9Label.style.backgroundColor = 'green';
            if(q9Green == true){
                numberGreen++;
                q9Green = false;
            }
        }else if(q93.checked){
            q9Label.style.backgroundColor = 'green';
            if(q9Green == true){
                numberGreen++;
                q9Green = false;
            }
        }else if(q94.checked){
            q9Label.style.backgroundColor = 'green';
            if(q9Green == true){
                numberGreen++;
                q9Green = false;
            }
        }else if(q95.checked){
            q9Label.style.backgroundColor = 'green';
            if(q9Green == true){
                numberGreen++;
                q9Green = false;
            }
        }

    }
    this.setInterval(test, 500);
}

function watchColorPicker(){
    q5.style.backgroundColor = 'green';

    if(q5Green == true){
        numberGreen++;
        q5Green = false;
    }
}

function checkDate(){
    q4Label.style.backgroundColor = 'green';

    console.log(q4);

    if(q4Green == true){
        numberGreen++;
        q4Green = false;
    }
}

function progressBarChange(){
    progressBar.value = numberGreen;
}

function outputUpdate(value){
    document.querySelector('#volume').value = value;  
}