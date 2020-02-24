$('document').ready(function(){
    var padtop = $('.___header').height() + 32;
    $('.ynr___').css('--padtop',padtop+'px');
    reachFooter();
    $('.select-control').select2();
});
$(window).resize(function(){
    $('.select-control').select2();
});
window.onscroll = function() {
    reachFooter();
};
function reachFooter() {
    var hei = $('.ynr___').height();
    var hex = $('.___header').height();
    if (document.body.scrollTop > hei || document.documentElement.scrollTop > hei) {
        $('.___header').removeClass('active');
        $('.___header').addClass('foot');
    }
    else if(document.body.scrollTop > hex || document.documentElement.scrollTop > hex) {
        $('.___header').removeClass('foot');
        $('.___header').addClass('active');
    }
    else {
        $('.___header').removeClass('active');
        $('.___header').removeClass('foot');
    }
}