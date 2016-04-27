(function(){
var phone = false;
if(document.body.offsetWidth < 768){
	phone = true;
}
var selecttoggle = function(){
	$('#select-toggle').click(function(){
		$('.daohang').toggle();
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





var init = function(){
	selecttoggle();
	createPaginator(1,20);
};
$(document).ready(init);
})()


