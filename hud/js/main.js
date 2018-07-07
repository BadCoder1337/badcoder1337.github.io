let settings = JSON.parse(b64DecodeUnicode(getParameterByName('c')));

for (let i = 0; i < 2; i++) {
    $('.team-title')[i].innerHTML = settings.title[i];
}

for (let i = 0; i < 2; i++) {
    $('.header-logo')[i].style['background-image'] = `url(${settings.logo[i]})`;
}

for (let i = 0; i < 2; i++) {
    $('.score')[i].innerHTML = settings.score[i];
}

$('.title').text(settings.name);

settings.esl ? $('.esl-logo').show() : $('.esl-logo').hide();

if (getParameterByName('f')) {
    $('.header').show();
} else {
    $('.header').fadeIn();
}