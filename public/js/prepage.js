let lastUser = '';

let lastPersonP = document.getElementById('lastPersonP');

function testStorage(){
    var test = 'test';
    try{
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }catch(e){
        return false
    }
}

if(testStorage() === true){
    lastUser = localStorage.getItem('name');
    if(lastUser == null || lastUser === ''){
        lastPersonP.textContent = 'Jij bent de eerste die deze lijst invult';
    }else{
        lastPersonP.textContent = 'Deze persoon heeft voor jou deze lijst ingevuld: ' + lastUser;
        console.log(lastUser);
    } 
}else{
    console.log('bob');
    lastPersonP.textContent = 'Deze browser support geen localstorage of je hebt deze uitgezet, zet deze weer aan als je de volledige ervaring wil.';
}