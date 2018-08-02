const domHTML = $('html');
const domBody = $('body');

const navJcons = $('.li-nav');
const menuClose = $('.jcon-menuclose');

const sectionMenu = $('.section-menu');
const sectionMenuShow = $('.section-menu-show');
const sectionIntro = $('.section-intro');
const navMenu = $('.nav-menu');
const sectionProj = $('.section-proj');

const divIntro = $('.intro-parent');
const rowOne = $('.intro-row-1');
const rowTwo = $('.intro-row-2');
const rowThree = $('.intro-row-3');
const rowFour = $('.intro-row-4');
const rowFive = $('.intro-row-5');

const headerJohn = $('.h1-john');
const headerDes = $('.h1-des');
const headerDev = $('.h1-dev');
const headerLight = $('.h1-pad');

window.onload = function () {
    divIntro.hide().delay(1000).fadeIn(1550);
    headerLight.delay(2600).animate({width: '97%'}, 673);
}

$(document).ready(function(){
    $("li.jcon-menuopen").click(function(){
        $("section.section-menu").toggleClass("section-menu-show");
        
        if($('.section-menu-show').css('display') == 'flex') {
            domBody.css('overflow', 'hidden');
            navMenu.fadeIn(2000).css('display', 'block');
            navJcons.css('color', 'var(--light)');
            sectionProj.css('display', 'none');
        } else {
            domBody.css('overflow-y', 'scroll');
            navMenu.fadeOut(2000).css('display', 'none');
            navJcons.css('color', 'var(--dark)');
            sectionProj.css('display', 'flex');
        }
    });
});