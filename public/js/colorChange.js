let q1 = document.forms['formMain'].vNaam;
let q1Label = document.getElementById('q1Label');
let q2 = document.forms['formMain'].aNaam;
let q2Label = document.getElementById('q2Label');
let q3m = document.getElementById('q3Man');
let q3v = document.getElementById('q3Vrouw');
let q3Label = document.getElementById('q3Label');
let q4 = document.getElementById('q4').value;
let q4Label = document.getElementById('q4Label');
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

window.onload = function(){
    function test(){
        console.log(numberGreen);
        //voornaam
        if(q1.value === ''){
            q1Label.style.backgroundColor = 'ivory';
        }else{
            if(q1.value.length >= 2){
                q1Label.style.backgroundColor = 'green';
                numberGreen++;
            }
        }

        //achternaam
        if(q2.value === ''){
            q2Label.style.backgroundColor = 'ivory';
        }else{
            if(q2.value.length >= 2){
                q2Label.style.backgroundColor = 'green';
                numberGreen++;
            }
        }

        if(q3m.checked){
            q3Label.style.backgroundColor = 'green';
        }else if(q3v.checked){
            q3Label.style.backgroundColor = 'green';
        }

        //date
        if(!q4){
            q4Label.style.backgroundColor = 'ivory';
        }else{
            q4Label.style.backgroundColor = 'green';
            numberGreen++;
        }

        //color

        //phone
        if(q6.value === ''){
            q6Label.style.backgroundColor = 'ivory';
        }else{
            q6Label.style.backgroundColor = 'green';
            numberGreen++;
        }

        //number
        if(q7.value === ''){
            q7Label.style.backgroundColor = 'ivory';
        }else{
            q7Label.style.backgroundColor = 'green';
            numberGreen++;
        }

        //area
        if(q8.value === ''){
            q8Label.style.backgroundColor = 'ivory';
        }else{
            q8Label.style.backgroundColor = 'green';
            numberGreen++;
        }

        //checkbox
        if(q91.checked){
            q9Label.style.backgroundColor = 'green';
        }else if(q92.checked){
            q9Label.style.backgroundColor = 'green';
        }else if(q93.checked){
            q9Label.style.backgroundColor = 'green';
        }else if(q94.checked){
            q9Label.style.backgroundColor = 'green';
        }else if(q95.checked){
            q9Label.style.backgroundColor = 'green';
        }

    }
    this.setInterval(test, 200);
}