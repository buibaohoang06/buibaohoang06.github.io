const mantra = document.getElementById('mantra-h4');
const mantraAuthor = document.getElementById('mantra-author');
function loadMantra(){
    //fetch data from server
    fetch('https://api.quotable.io/random?maxLength=30')
    .then((res) => res.json())
    .then((data) => {
        mantra.innerText = data.content;
        mantraAuthor.innerText = "_" + data.author;
    });
}

if (window.addEventListener){
    window.addEventListener('load', loadMantra(), false);
} else{
    window.addEventListener('onload', loadMantra());
}