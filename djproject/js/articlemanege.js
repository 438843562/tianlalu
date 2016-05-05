(function(){
//var ue = UE.getEditor('editer', {
//	
//	initialFrameHeight:400,
//	enableAutoSave:false,
//	autoHeightEnabled:false,
//});

/*边框动画*/
var border_animate = function(){
	function fun_top(){
		$(".flowline #line-top").css('left', '-4000px');
		
		$(".flowline #line-top").animate({
		    left:'-2000px',
	    }, 60000, 'linear', fun_top);
	};
	function fun_bottom(){
		$(".flowline #line-bottom").css('left', '-2000px');
		
		$(".flowline #line-bottom").animate({
		    left:'-4000px',
	    }, 60000, 'linear', fun_bottom);
	};
	function fun_left(){
		$(".flowline #line-left").css('top', '-2000px');
		
		$(".flowline #line-left").animate({
		    top:'-4000px',
	    }, 60000, 'linear', fun_left);
	};
	function fun_right(){
		$(".flowline #line-right").css('top', '-4000px');
		
		$(".flowline #line-right").animate({
		    top:'-2000px',
	    }, 60000, 'linear', fun_right);
	};
	
	
	fun_top();
	fun_bottom();
	fun_left();
	fun_right();
};
	
var init = function(){
	border_animate();
};
$(document).ready(init);
})()
