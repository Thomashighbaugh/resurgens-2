//boilerplate error that most likely only I will see that would have saved me 2 hours of debugging in producing this site as only with
//jQuery included on the server would the UI render correctly
if (typeof jQuery === 'undefined') {
    throw new Error('This site requires requires jQuery, if you need to download it (because you use an older browser) use NPM, ' +
        'Yarn, Google Search jQuery, update your browser or if you are TLH, include the minified version when uploading ')
}

var bgColor;
var effect = 'animated bounceInLeft'; /* bounceIn, bounceInUp, bounceInDown, bounceInLeft,
										 bounceInRight, rotateIn, rotateInUpLeft, rotateInDownLeft,
										 rotateInUpRight, rotateInDownRight  */

$('.all-content').hide();

$('.content li').click(function(){
    $('.card-front, .card-back').hide();
    $('.content li').removeClass('active').hide().css('border', 'none');
    $(this).addClass('active').show();
    bgColor = $('.active .card-back').css('background-color');
    $('.content').css('background-color', bgColor);
    $('.close, .all-content').show();
    $('.responsive').append('<span class="close">close</span>').addClass(effect);
});


$('.responsive').on('click', '.close', function(){

    $('.close').remove();
    bgColor = $('.active .card-front').css('background-color');
    $('.responsive').removeClass(effect);
    $('.all-content').hide();
    $('.content li').removeClass('active').show().css({
        'border-bottom': '1px solid #2c2c2c',
        'border-left': '1px solid #2c2c2c'
    });
    $('.card-front, .card-back').show();
    $('.content').css('background-color', bgColor);
});