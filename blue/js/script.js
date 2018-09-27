$(document).ready(function() {
    $('.details').mouseover(function(){
        $('.details__content').css('display', 'block')
        $('.details__icon').css('display', 'none')
    }).mouseleave(function() {
        $('.details__content').css('display', 'none')
        $('.details__icon').css('display', 'block')
    })
})