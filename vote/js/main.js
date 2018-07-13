const settings = JSON.parse(b64DecodeUnicode(getParameterByName('c')));

for (let i = 0; i < 2; i++) {
    $('.team-title')[i].innerHTML = settings.title[i];
    $('.logo')[i].style['background-image'] = `url(${settings.logo[i]})`;
}

$('.footer-name').text(settings.name);

if (getParameterByName('f')) {
    $('.footer').show();
} else {
    $('.footer').fadeIn();
}

const socket = io('http://localhost:9876');

socket.on('message', (message)=>{
    console.log(message);
    for (let i = 0; i < 2; i++) {
        $('.percent')[i].innerHTML = message.percent[i]+'%';  
    }
    $('.progress-bar-part').css('width', message.percent[0]+'%')
})