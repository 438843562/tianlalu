(function(){
var phone = false;
if(document.body.offsetWidth < 768){
	phone = true;
}
var selecttoggle = function(){
	$('#select-toggle').click(function(){
		console.log($('.daohang').css('display'));
		if($('.daohang').css('display') == 'none'){
			$('.daohang').show();
			if(phone){
				$('body').css('overflow', 'hidden');
			}
		}else{
			$('.daohang').hide();
			if(phone){
				$('body').css('overflow', 'auto');
			}
		}
		
	});
};

/*分页*/
var createPaginator = function(page, totalPages){
	if(phone){
		$('#jqPaginator').jqPaginator({
		    totalPages: totalPages,
		    visiblePages: 1,
		    currentPage: page,
		
		    first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
		    prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
		    next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
		    last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
		    page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
		    onPageChange: function (num) {
		    	
		    }
		});
	}else{
		$('#jqPaginator').jqPaginator({
		    totalPages: totalPages,
		    visiblePages: 7,
		    currentPage: page,
		
		    first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
		    prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
		    next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
		    last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
		    page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
		    onPageChange: function (num) {
		    	
		    }
		});
	}
	
};

/*导航*/
(function(){
	$('.daohang li').click(function(){
		$('.daohang li').removeClass('active');
		$(this).addClass('active');
		if(phone){
			$('#select-toggle').click(); 
		}
	});
})();

/*判断客服端类型*/
var clienttype = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = 'PC';
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = Agents[v];
            if(Agents[v] == 'Windows Phone'){
        		flag = 'WindowsPhone';
        	}
            break;
        }
    }
    return flag;
}

/*qq群和qq交谈类型选择*/
var qq_check_type = function(){
	var type = clienttype();
	$('.client').children().hide();
	$('.client .'+type).show();
};


var init = function(){
	qq_check_type();
	selecttoggle();
	createPaginator(1,20);
};
$(document).ready(init);
})()


