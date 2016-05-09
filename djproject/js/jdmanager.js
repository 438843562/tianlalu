(function(d,w){
/*初始化页面高度*/
var scrollHeight = d.body.scrollHeight;
$('#page-wrapper').css('min-height', scrollHeight+'px');
$(window).resize(function(){
	var scrollheight = d.body.scrollHeight;
	$('#page-wrapper').css('min-height', scrollheight+'px');
});

/*改变导航样式*/
var navbartype = function(){
	$('.navbar-type').click(function(){
		if($('.wrapper').hasClass('mini-navbar')){
			$('.wrapper').removeClass('mini-navbar');
			$('.navbar-left').css('opacity', '0');
			$('.navbar-left').delay(300).animate({opacity:'1'}, 700);
		}else{
			$('.wrapper').addClass('mini-navbar');
		}
	});
};
/*导航选择*/
var navmetismenu = function(){
	$('.nav-list').click(function(e){
		if(e.target && $(e.target).hasClass('nav-list')){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).find('.glyphicon-img').removeClass('glyphicon-chevron-down');
				$(this).find('.glyphicon-img').addClass('glyphicon-chevron-right');
			}else{
				$('.nav-list').removeClass('active');
				$('.nav-list').find('.glyphicon-img').removeClass('glyphicon-chevron-down');
				$('.nav-list').find('.glyphicon-img').addClass('glyphicon-chevron-right');
				$(this).addClass('active');
				$(this).find('.glyphicon-img').removeClass('glyphicon-chevron-right');
				$(this).find('.glyphicon-img').addClass('glyphicon-chevron-down');
			}
		}
	});
}
/*导航菜单初始化展开*/	
var navmetismenuinit = function(){
	$('.nav-list').removeClass('active');
	var labelname = $('.nav-page label').text();
	$('.nav-list li a').each(function(){
		if($(this).text() == labelname){
			$(this).parent().parent().parent().addClass('active');
		}
	});
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
function init(){
	navbartype();
	navmetismenu();
	navmetismenuinit();
};
$(document).ready(init);
})(document,window)