(function(){
/*导航栏*/
var daohang_left = function(){
	$('#daohang-list').on('click', 'li', function(){
		$('#daohang-list li').removeClass('active');
		$(this).addClass('active');
		var subid = 'sub-'+$(this).attr('name');
		$('#sub-list ul').hide();
		$('#'+subid).show();
	});
	$('.daohang-left #sub-list').on('click', 'li', function(){
		$('.daohang-left #sub-list li').removeClass('active');
		$(this).addClass('active');
	});
	$('#open-close').click(function(){
		var leftoffset = $('.daohang-left').css('left');
		if(leftoffset == '0px'){
			$('#open-close span').html('>>');
			$('.daohang-left').animate({left:'-149px'}, 500, 'linear');
			$('.console').animate({'margin-left':'30px'}, 500, 'linear');
		}else{
			$('#open-close span').html('<<');
			$('.console').animate({'margin-left':'179px'}, 500, 'linear');
			$('.daohang-left').animate({left:'0px'}, 500, 'linear');
		}
	});
};
var open_close = function(){
	if($('#open-close span').css('left') == '0px'){
		$('#open-close span').animate({left:'10px'}, 1000, 'linear', open_close);
	}else{
		$('#open-close span').animate({left:'0px'}, 1000, 'linear', open_close);
	}
};

var init = function(){
	daohang_left();
	open_close();
};
$(document).ready(init);
})()
