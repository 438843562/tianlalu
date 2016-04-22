//通用js
$(document).ready(function(){	

	//tabs
	$(".title-tabs li").click(function(){			
		$(this).addClass("activetabs").siblings("li").removeClass("activetabs");
		$(this).parent().siblings(".tab-container").hide().eq($(this).index()).fadeIn();		
	});
	//tabs end
	
	//article-tabs
	$(".article-tabs li").click(function(){	
		i=$(this).index();
		switch (i) {
		  case 0: $(this).siblings("a").attr("href","notice.html");
			break;
		  case 1: $(this).siblings("a").attr("href","faf.html");
			break;
		  case 2: $(this).siblings("a").attr("href","help.html");
			break;
		  default: $(this).siblings("a").attr("href","notice.html");
		}		
	});
	//article-tabs end
	
	//table bgcolor
	$("table.tableindex tr").hover(function(){		
			$(this).addClass("tr-bg");
		},function(){
			$("table.tableindex tr").removeClass("tr-bg");
		}
	);
	//table bgcolor end
	
	//条件筛选
	$(".category li a").click(function(){
		$(this).addClass("category-active").siblings("a").removeClass("category-active");			
	});
	//条件筛选 end
	
	//帮助中心
	$(".faq-question").click(function(){	
		if($(this).next(".faq-answer").is(":hidden")){
			$(this).siblings(".faq-answer").hide().end().next(".faq-answer").slideToggle();
		}	
		
	});
	//帮助中心 end
	
	daojishi(); //调用倒计时
	

	
});

//倒计时
Date.prototype.DateDiff = function(strInterval, dtEnd) {   
	var dtStart = this;  
	if (typeof dtEnd == 'string' )//如果是字符串转换为日期型  
	{   
		dtEnd = StringToDate(dtEnd);  
	}  
	switch (strInterval) {   
		case 's' :return parseInt((dtEnd - dtStart) / 1000);  
		case 'n' :return parseInt((dtEnd - dtStart) / 60000);  
		case 'h' :return parseInt((dtEnd - dtStart) / 3600000);  
		case 'd' :return parseInt((dtEnd - dtStart) / 86400000);  
		case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7));  
		case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1);  
		case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear();  
	}  
}  
	
var overtime = new Date("2016/07/01 9:0:0");
var thistime = new Date();
var leftss = thistime.DateDiff('s',overtime );
function timespan(t){
	var h = parseInt(t / 3600);
	var d = parseInt(h/24);
	var m = parseInt((t - h * 3600) / 60);
	var s = t - h * 3600 - m * 60;
	var a='';
	if(t<=0){
		a='<span class="orangecolor day">0</span> 天 <span class="orangecolor hour">0</span> 小时 <span class="orangecolor min">0</span> 分 <span class="orangecolor sec">0</span> 秒';
	}else{
		if(d>0){
			a+= '<span class="orangecolor day">'+d+'</span> 天 ';
			h=h % 24;
		}else{
			a+= '<span class="orangecolor day">'+0+'</span> 天 '
		}
		if(h>=0) a+= '<span class="orangecolor hour">'+h+'</span> 小时 ';
		if(m>=0) a+= '<span class="orangecolor min">'+m+'</span> 分 ';
		if(s>=0) a+= '<span class="orangecolor sec">'+s+'</span> 秒 ';
	}
	if(t<=0){		
		return false;
	}
	return a;
}

function daojishi(){
	$("#timeleft").html( timespan(leftss--) );
	setTimeout("daojishi()",1000);
}
//倒计时 end








