const settings = new URLSearchParams(window.location.search);

for (let i = 0; i < 2; i++) {
    $('.team-title')[i].innerHTML = settings.get('title').split(',')[i]
    $('.logo')[i].style['background-image'] = `url(${settings.get('logo').split(',')[i]})`;
}

$('.footer-name').text(settings.get('name'));

if (settings.get('f')) {
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