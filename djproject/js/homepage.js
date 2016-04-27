(function(){
	$('#select-toggle').click(function(){
		$('.daohang').toggle();
	});
})()

var createPaginator = function(page, totalPages){
	var width = document.body.offsetWidth;
	if(width < 768){
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
	
}
createPaginator(1,20);
