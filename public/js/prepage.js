let lastUser = '';

let lastPersonP = document.getElementById('lastPersonP');

if(window.localStorage){
    lastUser = localStorage.getItem('name');
    if(lastUser == null || lastUser === ''){
        lastPersonP.textContent = 'Jij bent de eerste die deze lijst invult';
    }else{
        lastPersonP.textContent = 'Deze persoon heeft voor jou deze lijst ingevuld: ' + lastUser;
        console.log(lastUser);
    } 
}