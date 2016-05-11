;(function(w, d){

	function maginfyglass(conf){
		/*公有变量*/
		this.init(conf);
		this.addmaginfy();
	}

	/*私有变量*/
	var obj = false;
	var conf_def = {
		position:'right',
		focuswidth:'400px',
		focusheight:'500px',
		imageOpacity:'0.6',
		xoffset:'0px',
		yoffset:'0px',
	};
	
	/*初始化*/
	maginfyglass.prototype.init = function(conf){
		/*更新参数配置*/
		for (i in conf){
			conf_def[i] = conf[i];
		}
		
		if(conf_def['focuswidth']){
			conf_def['focuswidth'] = 'width:'+conf_def['focuswidth'];
		}else{
			conf_def['focuswidth'] = '';
		}
		
		if(conf_def['focusheight']){
			conf_def['focusheight'] = 'height:'+conf_def['focusheight'];
		}else{
			conf_def['focusheight'] = '';
		}
		
		/*初始化对象style属性*/
		obj.css('position', 'relative');
		obj.css('display', 'block');
		obj.css('float', 'left');
		obj.addClass('allowmaginfy');
		
		obj.find('img').css('display','block');
		obj.find('img').css('height','100%');
		obj.find('img').css('width','100%');
		obj.find('img').addClass('allowmaginfy');
	}
	
	/*开始添加放大功能*/
	 maginfyglass.prototype.addmaginfy = function(){
		this.setclick();
		this.createmodule();
		this.addeventlistener();
	 }
	
	/*生成比较模块*/
	maginfyglass.prototype.createmodule = function(){
		/*放大区域*/
		var focusarea = '<div class="focusarea allowmaginfy" id="focusarea" style="'+conf_def['focuswidth']+';'+conf_def['focusheight']+';position:absolute;background-color:#6EABF5;opacity:'+conf_def['imageOpacity']+';display:none;"></div>';
		obj.append(focusarea);
		
		/*放大结果区域*/
		var src = obj.attr('href');
		var objwidth = obj.width();
		var objheight = obj.height();
		var focuswidth = $('#focusarea').width();
		var focusheight = $('#focusarea').height();
		var position='';
		switch (conf_def['position']){
			case 'right':
				position = 'left:'+objwidth+'px';
				break;
			case 'left':
			position = 'left:-'+objwidth+'px';
			break;
			case 'top':
			position = 'top:-'+objheight+'px';
			break;
			case 'bottom':
			position = 'top:'+objheight+'px';
			break;
			default:
				break;
		}
		var imgwidth = parseInt((objwidth/focuswidth)*objwidth);
		var imgheight = parseInt((objheight/focusheight)*objheight);
		
		var magnifyarea = '<div class="maginfyarea" id="maginfyarea" style="width:'+objwidth+'px;height:'+objheight+'px;position:absolute;display:none;overflow: hidden;top:0px;'+position+';margin-left:'+conf_def['xoffset']+';margin-top:'+conf_def['yoffset']+'"><img class="maginfyarea" id="maginfyareaimg" src="'+src+'" style="position:absolute;width:'+imgwidth+'px;height:'+imgheight+'px"/></div>';
		obj.append(magnifyarea);
		
		/*弹出层区域*/
		var wheight = $(window).height();
		var wwidth = $(window).width();
		var popup = '<div class="popup" style="display:none;cursor: default;"><div class="mask" style="width:'+wwidth+'px;height:'+wheight+'px;position: fixed;opacity:0.6;background-color: #000000;top:0px;left:0px;"></div><div class="imgarea" style="text-align: center;position:absolute;top:0px;z-index: 60;width:'+wwidth+'px"><img class="maginfyarea" id="maginfyareaimg" src="'+src+'"/><span class="close" style="position: absolute;top: 0px;color: #000;padding: 5px;background-color: #fff;cursor: pointer;">x<span></div></div>';
		obj.append(popup);
	}
	
	/*增加监听对象*/
	maginfyglass.prototype.addeventlistener = function(){
		obj.on('mouseover', function(e){
			if(!$(e.target).hasClass('allowmaginfy')){
				$('#focusarea').css('display','none');
				$('#maginfyarea').css('display', 'none');
				return true;
			}
			$('#focusarea').css('display','block');
			$('#maginfyarea').css('display', 'block');
		});
		
		obj.on('mouseout', function(){
			$('#focusarea').css('display','none');
			$('#maginfyarea').css('display', 'none');
		});
		
		var hasClass = this.hasClass;
		var maginfyarea = this.maginfyarea;
		obj.on('mousemove', function(e){
			if(e.target && hasClass(e.target,'focusarea')){
				var left = e.offsetX + parseInt($('#focusarea').css('left'));
				var top = e.offsetY + parseInt($('#focusarea').css('top'));
				
			}else{
				var left = e.offsetX;
				var top = e.offsetY;
			}
			var objwidth = obj.width();
			var objheight = obj.height();
			var focuswidth = $('#focusarea').width();
			var focusheight = $('#focusarea').height();
			
			left = left-focuswidth/2;
			top = top-focusheight/2;
			if(left < 0)left=0;
			if(top < 0)top=0;
			if(left > (objwidth-focuswidth))left=objwidth-focuswidth;
			if(top > (objheight-focusheight))top=objheight-focusheight;
			
			$('#focusarea').css('left', left+'px');
			$('#focusarea').css('top', top+'px');
			
			maginfyarea(left, top);
		});
		
		obj.on('click', function(e){
			if($(e.target).hasClass('close') || $(e.target).hasClass('mask') || $(e.target).hasClass('imgarea')){
				$('.popup').css('display', 'none');
			}
		});
	}
	
	/*放大指定区域*/
	maginfyglass.prototype.maginfyarea = function(left, top){
		var objwidth = obj.width();
		var objheight = obj.height();
		var focuswidth = $('#focusarea').width();
		var focusheight = $('#focusarea').height();
		
		var wmultiple = objwidth/focuswidth;
		var hmultiple = objheight/focusheight;
		var maginfyarealeft = parseInt(left*wmultiple);
		var maginfyareatop = parseInt(top*hmultiple);
		
		$('#maginfyareaimg').css('top', '-'+maginfyareatop+'px');
		$('#maginfyareaimg').css('left', '-'+maginfyarealeft+'px');
	}
	
	/*重置对象点击事件*/
	maginfyglass.prototype.setclick = function(){
		if(!obj) return false;
		obj.click(this.seebigphoto);
	}
	
	/*照片点击放大功能*/
	maginfyglass.prototype.seebigphoto = function(){
		$('.popup').css('display', 'block');
		
		return false;
	}
	
	/*判断元素是否含有class*/
	maginfyglass.prototype.hasClass = function(obj, name){
		try{
		    var isId = obj.hasAttribute('class');
		}catch(e){
		    return false;
		}finally{
		    if(isId){
		    	classstr = obj.className;
		    	if(classstr.indexOf(name) >= 0 ){
		    	    return true;
		    	}else{
		    		return false;
		    	}
		    }
		}
		return false;
	}
	
	$.fn.maginfyglass = function(conf){
		obj = $($(this)[0]);
		var maginfy_obj  = new maginfyglass(conf);
	}
})(window, document);
