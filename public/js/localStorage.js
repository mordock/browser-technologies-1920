let firstNameA = document.getElementById('firstNameA');

firstNameA.textContent = firstNameA.textContent.replace('Jouw voornaam is: ', '');

console.log(firstNameA.textContent);



console.log('call');
if(window.localStorage){
    window.localStorage.setItem('name', firstNameA.textContent);
    console.log(window.localStorage);
}