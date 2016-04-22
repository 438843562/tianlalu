//通用js
$(document).ready(function(){	
	
	//管理中心左边导航
	var path = window.location.pathname;
	$(".itemlist  a").each(function () {
                if ($(this).attr("href") == path) {                	
					$(".item-title").removeClass("select-title");
					$(".itemlist").addClass("display");
                    $(this).css('color','#078CCF').parent().slideDown();	
					$(this).parent().siblings().addClass("select-title");				
                }				
            });
	
	
			
	 $(".item-title").click(function(){		 	 	
			$(".item-title").removeClass("select-title");	

			$(this).addClass("select-title")
			.children(".title-icon").removeClass("title-icon-up").end()
			.next(".itemlist").slideToggle(function(){
					if($(this).is(":hidden")){
						$(this).siblings().children(".title-icon").addClass("title-icon-up")
					}
			});	
			
	})

	 // if ($(".item-title").children().attr("href") == path)
	 // 	{	 alert(2);			 		
	 // 		$(".item-title").removeClass("select-title");
	 // 		$(".itemlist").addClass("display");	 		
	 // 		$(this).addClass("select-title");
	 // 	}
	//管理中心左边导航 end	

});

