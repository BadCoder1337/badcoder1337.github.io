function getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function b64DecodeUnicode (str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

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