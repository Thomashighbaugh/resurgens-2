

let bgColor; //used for holding color of the card to be used as background!

let effect = 'animated bounceInLeft';
/* bounceIn, bounceInUp, bounceInDown, bounceInLeft,
                                        bounceInRight, rotateIn, rotateInUpLeft, rotateInDownLeft,
                                        rotateInUpRight, rotateInDownRight  */
//hide the content of the back side of the cards
$('.all-content').hide();
//function to both change the display of the card to show the content contained
$('.content li').click(function () {
    $('.card-front, .card-back').hide();
    $('.content li').removeClass('active').hide().css('border', 'none');
    $(this).addClass('active').show(); //shows card content
    bgColor = $('.active .card-back').css('background-color');
    $('.content').css('background-color', bgColor);
    $('.close, .all-content').show();
    $('.responsive').append('<span class="close">close</span>').addClass(effect);
});//end the opening content function

//creates the close button functionality
$('.responsive').on('click', '.close', function(){
//close function definition that "undoes" what was done prior
	$('.close').remove();
    bgColor = $('.active .card-front').css('background-color'); //restores background
	$('.responsive').removeClass(effect);
	$('.all-content').hide();
	$('.content li').removeClass('active').show().css({ 'border-bottom':'1px solid #2c2c2c',
        'border-left': '1px solid #2c2c2c'
    }); //recreates borders for cards
	$('.card-front, .card-back').show();
	$('.content').css('background-color',bgColor);
}); //ends restore main function