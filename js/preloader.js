
// PRELOADER
$(window).on('load', function () {
    var $preloader = $('.page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(250).fadeOut('slow');
});

// MENU CODE
var menu = $('.nav-item:last-child'),
	menuButton = $('#nav-icon1'),
	home = $('.nav-item:nth-child(1)'),
	skills = $('.nav-item:nth-child(2)'),
	education = $('.nav-item:nth-child(3)'),
	portfolio = $('.nav-item:nth-child(4)'),
	certificates = $('.nav-item:nth-child(5)'),
	contact = $('.nav-item:nth-child(6)');

menuButton.on('click',() => {
	menuButton.toggleClass('active');
	if(menuButton.hasClass('active')){
		home.animate({'right':'10px','opacity':'1','z-index':'1'},500);
		skills.animate({'right':'85px','opacity':'1','z-index':'30'},500);
		education.animate({'right':'180px','opacity':'1','z-index':'30'},500);
		portfolio.animate({'right':'290px','opacity':'1','z-index':'20'},500);
		certificates.animate({'right':'400px','opacity':'1','z-index':'20'},500);
		contact.animate({'right':'510px','opacity':'1','z-index':'1'},500);
	}
	else {
		home.animate({'right':'0','opacity':'0'},500);
		skills.animate({'right':'0','opacity':'0'},500);
		education.animate({'right':'0','opacity':'0'},500);
		portfolio.animate({'right':'0','opacity':'0'},500);
		certificates.animate({'right':'0','opacity':'0'},500);
		contact.animate({'right':'0','opacity':'0'},500);
	}
});

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

//FULLPAGE CODE
(function($){
	$(window).on("load",function(){
		
		/* Page Scroll to id fn call */
		$("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"#navigation-menu a"
		});
		
		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		
	
		
	});
})(jQuery);

//VIEWPORTCECKER

