//To make hover work on a mobile website//
document.addEventListener("touchstart", function() {}, true);

//------------------------------//



console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').id = 'default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').id = 'blue.css'
    }

    if(mode == 'red'){
        document.getElementById('theme-style').id = 'red.css'
    }


    localStorage.setItem('theme', mode)
}

//modify html through the json object of information

var output = document.getElementById('about-short')
output.innerHTML = informations[0].about