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
    $('.header-logo')[i].style['background-image'] = `url(${settings.logo[i]})`;
    $('.score')[i].innerHTML = settings.score[i];
}

$('.title').text(settings.name);

settings.esl ? $('.esl-logo').show() : $('.esl-logo').hide();

if (getParameterByName('f')) {
    $('.header').show();
} else {
    $('.header').fadeIn();
}