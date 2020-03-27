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

window.onload = function(){
    function test(){
        if(q1.value === ''){
            //do nothing
        }else{
            q1Label.style.backgroundColor = 'green';
        }

        if(q2.value === ''){
            //do nothing
        }else{
            q2Label.style.backgroundColor = 'green';
        }

        if(q3m.checked){
            q3Label.style.backgroundColor = 'green';
        }else if(q3v.checked){
            q3Label.style.backgroundColor = 'green';
        }

        //date
        if(!q4){
            //do nothing
        }else{
            q4Label.style.backgroundColor = 'green';
        }

        //color

        //phone
        if(q6.value === ''){
            //do nothing
        }else{
            q6Label.style.backgroundColor = 'green';
        }

        //number
        if(q7.value === ''){
            //do nothing
        }else{
            q7Label.style.backgroundColor = 'green';
        }

        if(q8.value === ''){
            //do nothing
        }else{
            q8Label.style.backgroundColor = 'green';
        }

    }
    this.setInterval(test, 200);
}