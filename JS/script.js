function changeHandler(evt, id) {
    evt.stopPropagation();
    evt.preventDefault();

    // FileList object.
    var files = evt.target.files;

    var file = files[0];

    var fileReader = new FileReader();


    fileReader.onload = function(progressEvent) {
        var url = fileReader.result;

        // Something like: data:image/png;base64,iVBORw...Ym57Ad6m6uHj96js
        console.log(url);
        //
        localStorage.setItem(id, JSON.stringify(fileReader.result))
    }


    // Read file asynchronously.
    fileReader.readAsDataURL(file); // fileReader.result -> URL.
}

let informations = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addInfo = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let information = {
        id: Date.now(),
        name: document.getElementById('name').value,
        about: document.getElementById('about').value,
        aboutlong: document.getElementById('aboutlong').value,
        skilllist: document.getElementById('skilllist').value,
        social1: document.getElementById('social1').value,
        social2: document.getElementById('social2').value,
        social3: document.getElementById('social3').value,
        project1: document.getElementById('project1').value,
        project2: document.getElementById('project2').value,
        project3: document.getElementById('project3').value,
        education1: document.getElementById('education1').value,
        education2: document.getElementById('education2').value,
        experience1: document.getElementById('experience1').value,
        experience2: document.getElementById('experience2').value,
        experience3: document.getElementById('experience3').value,
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






