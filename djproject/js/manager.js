(function(){
/*导航栏*/
var daohang_left = function(){
	$('#daohang-list').on('click', 'li', function(){
		var leftoffset = $(this).offset().left+'px';
		$(this).animate({right:leftoffset}, 500, function(){
			$(this).animate({opacity:'0.5',bottom:'-23px'}, 500, function(){
				$('#daohang-list li').each(function(){
					if(!$(this).hasClass('active')){
						$(this).css('opacity','1');
						$(this).css('right','0px');
						$(this).css('bottom','0px');
					}
				});
				$('#daohang-list li').show();
				$(this).hide();
				var text = $(this).html();
				$('.daohang-left .title').html(text);
			});
		});
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
	$('#daohang-list li').first().click();
};
$(document).ready(init);
})()
