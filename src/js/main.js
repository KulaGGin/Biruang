// inject:app
// endinject

var mySiema;

window.onload = function() {
    jQuery(document).ready(function($) {
        $('.hero-Slider_container').unslider({
            autoplay: true,
            arrows: false
        });
    });
};

function queueSlide() {
    var randomNum = getRandom(3000, 7000);
    var randomBool = Math.random() >= 0.5;
    
    window.setTimeout(function() {
        if(randomBool) {
            mySiema.next();
        }
        else {
            mySiema.prev();
        }
        queueSlide();
    }, randomNum)
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}