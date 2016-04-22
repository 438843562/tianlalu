var xuanfuover = function(){
	$(this).css('border-bottom', '4px solid #FFF');
}
var xuanfuout = function(){
	$(this).css('border-bottom', 'none');
}

var xialaover = function(){
	$(this).parent().find('.xiala-me').css('display', 'block');
}
var xialaout = function(){
	$(this).find('.xiala-me').css('display', 'none');
}
var zcdover = function(){
	$(this).css('color', '#BDC797');
	$(this).parent().css('background-color', '#FFF');
}
var zcdout = function(){
	$(this).css('color', '#FFF');
	$(this).parent().css('background-color', '#BDC797');
}
var moreover = function(){
	$('.page1-but-sub').animate({
		opacity:1,
	});
}
var moreout = function(){
	$('.page1-but-sub').animate({
		opacity:0,
	});
}

var xialatexiao = function(){
		$('.gobacked img').animate({
			top:'+=6px',
			opacity:1,
		},1000);
		$('.gobacked img').animate({
			top:'-=6px',
			opacity:0.5,
		},1000,xialatexiao);
}

var li_click = function(){
	var href = $(this).attr("href");
    var pos = $(href).offset().top;
    $("html,body").animate({scrollTop: pos}, 1000);
    return false;
}

var li_set_active = function($obj){
	$('.right-daohang li').removeClass('active');
	$obj.addClass('active');
}

var set_head = function(type){
	if(type == 'one'){
		$('.ziti-color').css('color', '#FFF');
		$('.head').css('background', 'none');
		$('.request').show();
	}else{
		$('.ziti-color').css('color', '#000');
		$('.head').css('background-color', '#FFF');
		$('.request').hide();
	}
}

var hander_scroll = function(){
	var scroll_off = $(this).scrollTop();
	var one_off = $('#one').offset().top;
	var two_off = $('#two').offset().top;
	var three_off = $('#three').offset().top;
	var four_off = $('#four').offset().top;
	
	if(scroll_off>=one_off && scroll_off<two_off){
		$('.page').css('padding-top','0px');
		li_set_active($('#li_one'));
		set_head('one');
	}else if(scroll_off>=two_off && scroll_off<three_off){
		$('.page').css('padding-top','0px');
		$('.page2').css('padding-top','95px');
		li_set_active($('#li_two'));
		set_head('two');
	}else if(scroll_off>=three_off && scroll_off<four_off){
		$('.page').css('padding-top','0px');
		$('.page3').css('padding-top','220px');
		li_set_active($('#li_three'));
		set_head('three');
	}else if(scroll_off>=four_off){
		$('.page').css('padding-top','0px');
		$('.page4').css('padding-top','120px');
		li_set_active($('#li_four'));
		set_head('four');
		
	}
}

var request_move = function(e){
	var x = e.pageX-$('.request').offset().left;
	var y = e.pageY-$('.request').offset().top;
	var xx = 77;
	var yy = 49;
	
	if(x < 0){
		x=0;
	}
	if(x>77){
		var p_x = 90-(x-xx)/4;
	}else{
		var p_x = 90-(x-xx)/2;
	}
	
	var l_x = 90-(x-xx)/10;
	var l_t_x = 39+(x-xx)/7;
	
	$('.xian').css('width', '120px');
	
	$('.xian').css('transform', 'translate(18px,0px) rotate('+l_x+'deg)');
	$('.xian').css('-ms-transform', 'translate(18px,0px) rotate('+l_x+'deg)');
	$('.xian').css('-webkit-transform', 'translate(18px,0px) rotate('+l_x+'deg)');
	$('.neirong').css('transform', 'translate('+l_t_x+'px,0px) rotate('+p_x+'deg)');
	$('.neirong').css('-ms-transform', 'translate('+l_t_x+'px,0px) rotate('+p_x+'deg)');
	$('.neirong').css('-webkit-transform', 'translate('+l_t_x+'px,0px) rotate('+p_x+'deg)');
}
var request_out = function (){
	$('.xian').css('width', '0px');
	
	$('.xian').css('transform', 'translate(18px,0px) rotate(0deg)');
	$('.xian').css('-ms-transform', 'translate(18px,0px) rotate(0deg)');
	$('.xian').css('-webkit-transform', 'translate(18px,0px) rotate(0deg)');
	
	$('.neirong').css('transform', 'translate(31px,-66px) rotate(45deg)');
	$('.neirong').css('-ms-transform', 'translate(31px,-66px) rotate(45deg)');
	$('.neirong').css('-webkit-transform', 'translate(31px,-66px) rotate(45deg)');
}

var tiaodong = function(obj, i){

	obj.delay(i*80).animate({
		top:'-10px',
	},200,function(){
		obj.animate({
			top:'0px',
		},200,tiaodong(obj, 0));
	});
}
var konghanshu = function(idx){
	console.log(idx);
};

var yuanover = function(){
	$('.yuan-neirong').find('span').stop(true);
	$('.yuan').stop(true);
	$('.yuan-neirong').find('span').css('top', '0px');
	
	$('.yuan').animate({
		width:'270px',
		height:'270px',
	},200);
	
	var i = 0;
	$('.yuan-neirong').find('span').each(function(){
		tiaodong($(this), i);
		i++;
	});
}
var yuanout = function(){
	$('.yuan-neirong').find('span').stop(true);
	$('.yuan').stop(true);
	$('.yuan-neirong').find('span').css('top', '0px');
	
	$('.yuan').animate({
		width:'280px',
		height:'280px'
	},200);
}
var listdownover = function (){
	$(this).stop(false,true);
	$(this).children().stop(false,true);
	$(this).animate({
		height:'80px',
	},200);
	$(this).children().animate({
		top:'+=10px',
	},400);
}
var listdownout = function (){
	$(this).stop(false,true);
	$(this).children().stop(false,true);
	$(this).children().animate({
		top:'-=10px',
	},200);
	$(this).animate({
		height:'70px',
	},400);
}

var fanzhuanstart = function(obj){
	obj = obj.find('.sublist-3D').first();
	if(obj){
		obj.on('webkitAnimationEnd',function() {
			fanzhuanstart(obj);
		});
		
		obj.css('-webkit-animation', 'myfirst 600ms forwards');
	}
}
var fanzhuanenter = function(){
	fanzhuanstart($(this));
}
var fanzhuanout = function(){
	$('.sublist-3D').each(function (){
		$(this).css('-webkit-animation', 'myfirstt '+i+'s forwards');
		i++;
	});
	$('.sublist-3D').css('animation', 'none');
}

$(document).ready(function(){
	$('.xuanfu').children('a').mouseover(xuanfuover);
	$('.xuanfu').children('a').mouseout(xuanfuout);
	$('.xiala').children('a').mouseover(xialaover);
	$('.xiala-me').mouseover(xialaover);
	$('.xiala').mouseout(xialaout);
	$('.zicaidan').find('a').mouseover(zcdover);
	$('.zicaidan').find('a').mouseout(zcdout);
	$('.page1-but-sub').mouseover(moreover);
	$('.page1-but-sub').mouseout(moreout);
	xialatexiao();
	$(".gundong").click(li_click);
	$(window).scroll(hander_scroll);
	$('.request').mousemove(function (e){
		request_move(e);
	});
	$('.request').mouseout(request_out);
	$('.yuan').mouseover(yuanover);
	$('.yuan').mouseout(yuanout);
	$('.listdown a').mouseenter(listdownover);
	$('.listdown a').mouseleave(listdownout);
	
	$('.list-3D').mouseenter(fanzhuanenter);
	
});