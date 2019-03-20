const settings = new URLSearchParams(window.location.search);

for (let i = 0; i < 2; i++) {
    $('.team-title')[i].innerHTML = settings.get('title').split(',')[i];
    $('.header-logo')[i].style['background-image'] = `url(${settings.get('logo').split(',')[i]})`;
    $('.score')[i].innerHTML = settings.get('score').split(',')[i];
}

$('.title').text(settings.get('name'));

settings.esl ? $('.esl-logo').show() : $('.esl-logo').hide();

if (settings.get('f')) {
    $('.header').show();
} else {
    $('.header').fadeIn();
}