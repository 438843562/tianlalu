(function(){
var ue = UE.getEditor('editer', {
	initialFrameHeight:460,
	enableAutoSave:false,
	autoHeightEnabled:false,
	enableAutoSave:false,
});

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
	
	
	//fun_top();
	//fun_bottom();
	//fun_left();
	//fun_right();
};

/*获取get参数值*/
function getArgs() {
    var args = {};
        var query = location.search.substring(1);
    var pairs = query.split("&");
    for(var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
            var argname = pairs[i].substring(0,pos);
            var value = pairs[i].substring(pos+1);
            value = decodeURIComponent(value);
            args[argname] = value;
        }
    return args;
 }

/*页面类型初始化*/
var pagetype = function(){
	var type = getArgs().type;
	if(type && type == 'add'){
		$('#save').hide();
	}else if(type && type == 'save'){
		$('#add').hide();
	}
}


var init = function(){
	border_animate();
	pagetype();
};
$(document).ready(init);
})()
