console.log(localStorage);

let lastUser = '';

let lastPersonP = document.getElementById('lastPersonP');

if(window.localStorage){
    lastUser = localStorage.getItem('name');
    lastPersonP.textContent = 'Deze persoon heeft voor jou deze lijst ingevuld: ' + lastUser;
    console.log(lastUser);
}