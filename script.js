let informations = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addInfo = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let information = {
        id: Date.now(),
        name: document.getElementById('name').value,
        about: document.getElementById('about').value
    }
    informations.push(information);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {informations} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(informations, '\t', 2);

    //saving to localStorage
    localStorage.setItem('CV', JSON.stringify(informations) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addInfo);
});


