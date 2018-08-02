// reference DOM elements
const domHTML = $('html');
const domBody = $('body');

// reference menu elements
const navJcons = $('.li-nav');
const menuClose = $('.jcon-menuclose');

// reference sections
const sectionMenu = $('.section-menu');
const sectionMenuShow = $('.section-menu-show');
const sectionIntro = $('.section-intro');
const navMenu = $('.nav-menu');
const sectionProj = $('.section-proj');
const sectionChat = $('.section-contact');

// reference intro rows
const divIntro = $('.intro-parent');
const rowOne = $('.intro-row-1');
const rowTwo = $('.intro-row-2');
const rowThree = $('.intro-row-3');
const rowFour = $('.intro-row-4');
const rowFive = $('.intro-row-5');

//reference intro headers
const headerJohn = $('.h1-john');
const headerDes = $('.h1-des');
const headerDev = $('.h1-dev');
const headerLight = $('.h1-pad');

// intro header animation
window.onload = function () {
    divIntro.hide().delay(1000).fadeIn(1550);
    headerLight.delay(2600).animate({width: '97%'}, 673);
}

// menu toggle
$(document).ready(function(){
    $("li.jcon-menuopen").click(function(){
        $("section.section-menu").toggleClass("section-menu-show");
        // shows menu, hides sections
        if($('.section-menu-show').css('display') == 'flex') {
            domBody.css('overflow', 'hidden');
            navMenu.fadeIn(2000).css('display', 'block');
            navJcons.css('color', 'var(--light)');
            sectionProj.css('display', 'none');
            sectionChat.css('display', 'none');
        // shows sections, hides menu
        } else {
            domBody.css('overflow-y', 'scroll');
            navMenu.fadeOut(2000).css('display', 'none');
            navJcons.css('color', 'var(--dark)');
            sectionProj.css('display', 'flex');
            sectionChat.css('display', 'flex');
        }
    });
});

// anchor scrolls for nav links
$(document).ready(function(){
    $( "a.scroll-link" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});

/*
// changes nav css @ section reaching browser top
var distance = $('.section-proj').offset().top, $window = $(window);
$window.scroll(function() {
    if ($window.scrollTop() >= distance) {
        navJcons.css('color', 'var(--light)');
    }
});
*/