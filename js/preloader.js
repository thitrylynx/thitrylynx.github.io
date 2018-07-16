
// PRELOADER
$(window).on('load', function () {
    var $preloader = $('.page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(250).fadeOut('slow');
});

// MENU CODE
var menu = $('li:last-child'),
	menuButton = $('#menu-button'),
	home = $('li:nth-child(1)'),
	skills = $('li:nth-child(2)'),
	portfolio = $('li:nth-child(3)'),
	contact = $('li:nth-child(4)');

menu.on('click',() => {
	menuButton.toggleClass('active');
	if(menuButton.hasClass('active')){
		home.animate({'right':'20px','opacity':'1','z-index':'1'},500);
		skills.animate({'right':'130px','opacity':'1','z-index':'30'},500);
		portfolio.animate({'right':'240px','opacity':'1','z-index':'20'},500);
		contact.animate({'right':'350px','opacity':'1','z-index':'1'},500);
	}
	else {
		home.animate({'right':'0','opacity':'0'},500);
		skills.animate({'right':'0','opacity':'0'},500);
		portfolio.animate({'right':'0','opacity':'0'},500);
		contact.animate({'right':'0','opacity':'0'},500);
	}
});

//FULLPAGE CODE
$('.fullpage').onepage_scroll();