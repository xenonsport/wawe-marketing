$(function(){

    $(".header__list-item a").on("click", function (event) {
		event.preventDefault();
    
        var id  = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});

    $('.blog__slider').slick({
        dots: true,
        arrows: false
    });

    $('.header__menu-btn, .header__list-link').click(function(event){

        $(".header__menu-list, .header__menu, .header__menu-btn").toggleClass('menu--active');

    });

    var mixer = mixitup('.galary__content');

    
    $(document).scroll(function(){
        var scroll = $(this).scrollTop();
        var nav = $('#top-line');
        if (scroll > 0) {
          if (!nav.hasClass('active')) {
            nav.addClass('active');
          }
        } else {
          if (nav.hasClass('active')) {
            nav.removeClass('active');
          }
        }
    });

});
