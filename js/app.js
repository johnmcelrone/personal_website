const domHTML = $('html');
const domBody = $('body');

const navJcons = $('.li-nav');
const menuClose = $('.jcon-menuclose');

const sectionMenu = $('.section-menu');
const sectionMenuShow = $('.section-menu-show');
const sectionIntro = $('.section-intro');
const navMenu = $('.nav-menu');

$(document).ready(function(){
    $("li.jcon-menuopen").click(function(){
        $("section.section-menu").toggleClass("section-menu-show");
        
        if($('.section-menu-show').css('display') == 'flex') {
            navJcons.css('color', 'var(--light)');
            domHTML.css('background', 'var(--dark)');
            domBody.css('overflow', 'hidden');
            navMenu.css('display', 'flex');
        } else {
            navJcons.css('color', 'var(--dark)');
            domHTML.css('background', 'var(--light)');
            domBody.css('overflow-y', 'scroll');
            navMenu.css('display', 'none');
        }
    });
});