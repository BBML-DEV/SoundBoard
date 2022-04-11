const applause = document.querySelector('.applause');
const boo = document.querySelector('.boo');
const gasp = document.querySelector('.gasp');
const tada = document.querySelector('.tada');
const victory = document.querySelector('.victory');
const wrong = document.querySelector('.wrong');

applause.addEventListener('click', function (){
    const applauseSong = document.querySelector('#applause');
    applauseSong.play();
});

boo.addEventListener('click', function (){
    const booSong = document.querySelector('#boo');
    booSong.play();
}); 


gasp.addEventListener('click', function (){
    const gaspSong = document.querySelector('#gasp');
    gaspSong.play();
});

tada.addEventListener('click', function (){
    const tadaSong = document.querySelector('#tada');
    tadaSong.play();
}); 


victory.addEventListener('click', function (){
    const victorySong = document.querySelector('#victory');
    victorySong.play();
});

wrong.addEventListener('click', function (){
    const wrongSong = document.querySelector('#wrong');
    wrongSong.play();
}); 



