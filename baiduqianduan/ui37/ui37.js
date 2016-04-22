/*确定 和 取消*/
var okListener = function(){
	var obj = document.getElementsByClassName('ok')[0];
	obj.addEventListener('click', function(){
		alert('你点击了确定！');
		var temp = document.getElementsByClassName('pop')[0];
		temp.style.display = 'none';
	});
}

/*取消浮出层*/
var cancel_hander = function(){
	tempobj = document.getElementsByClassName('pop')[0];
	tempobj.style.display = 'none';
	
	tempobj = document.getElementsByTagName('body')[0];
	tempobj.style.overflowY = 'auto';
	tempobj.style.marginRight = '8px';
	
	var tempobj = document.getElementsByClassName('t_content')[0];
	tempobj.removeEventListener('animationend', cancel_hander);
}
var cancel = function(){
	var tempobj = document.getElementsByClassName('t_content')[0];
	
	tempobj.addEventListener("animationend", cancel_hander); 
	tempobj.style.animation = 't_content_e 1s';
}
var cancelListener = function(){
	var obj = document.getElementsByClassName('cancel')[0];
	obj.addEventListener('click', function(){
		cancel();
	});
	
	var obj = document.getElementsByClassName('notes')[0];
	obj.addEventListener('click', function(e){
		if(e.target && hasClass(e.target, 'notes') && popconf.closeforclickoutside == 'yes'){
			var temp = document.getElementsByClassName('pop')[0];
			if(hasClass(this, 'notes')){
				cancel();
			}
		}
	});
}

/*查询按钮监听*/
var hasClass = function(obj, name){
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

/*监听复选栏*/
var clickmultiselect = function(){
	var obj = document.getElementsByClassName('multi-select')[0];
	obj.addEventListener('click', function(e){
		if(e.target && e.target.nodeName == 'SPAN'){
			var name = e.target.getAttribute('name');
			if(hasClass(e.target, 'active')){
				e.target.className = e.target.className.replace('active','');
				popconf[name] = 'no';
			}else{
				e.target.className = e.target.className+'active';
				popconf[name] = 'yes';
			}
		}
	});
}

/*拖曳效果*/
var drop = function(){
	var obj = document.getElementsByClassName('title')[0];
	obj.addEventListener('mousedown', function(e){
		if(popconf.allowdrop == 'no'){
			return true;
		}
		popconf.dorping = true;
		var obj = document.getElementsByClassName('title')[0];
		popconf.startX = e.pageX;
		popconf.startY = e.pageY;
		
		var obj = document.getElementsByClassName('t_content')[0];
		popconf.sleft = parseInt(obj.style.left.replace('px',''));
		popconf.stop = parseInt(obj.style.top.replace('px',''));
		if(isNaN(popconf.sleft))popconf.sleft=0;
		if(isNaN(popconf.stop))popconf.stop=0;
	});
	var obj = document.getElementsByClassName('pop')[0];
	obj.addEventListener('mouseup', drogFn = function(e){ 
		if(popconf.allowdrop == 'no'){
			return true;
		}
		popconf.dorping = false;
	});
	obj.addEventListener('mousemove', mFn = function(e){ 
		if(popconf.allowdrop == 'no'){
			return true;
		}
		if(popconf.dorping){
			var obj = document.getElementsByClassName('t_content')[0];
			var left = popconf.sleft+(e.pageX-popconf.startX);
			var top = popconf.stop+(e.pageY-popconf.startY);
			if(left<-1000)left=-1000;
			if(left>990)left=990;
			if(top<-230)top=-230;
			if(top>550)top=550;
			obj.style.left = left+'px';
			obj.style.top = top+'px';
		}
	})
	
	
}

var popconf = {
	'rolling':'no',
	'closeforclickoutside':'no',
	'allowdrop':'no',
	'dorping' : false,
	'startX' : 0,
	'startY' : 0,
	'sleft' : 0,
	'stop' : 0
}
var clickbuttom = function(){
	var obj = document.getElementsByClassName('buttom')[0];
	obj.addEventListener('click', function(){
		var tempobj = document.getElementsByClassName('t_content')[0];
		tempobj.style.animation = 't_content_s 1s';
		
		var obj = document.getElementsByClassName('pop')[0];
		obj.style.display = 'block';
		if(popconf.rolling == 'no'){
			var tempobj = document.getElementsByTagName('body')[0];
			tempobj.style.overflowY = 'hidden';
			tempobj.style.marginRight = '25px';
			var tempobj = document.getElementsByClassName('t_content')[0];
		}
		
		if(popconf.allowdrop == 'no'){
			document.getElementsByClassName('title')[0].style.cursor = 'auto';
		}else{
			document.getElementsByClassName('title')[0].style.cursor = 'move';
		}
	});
}
window.onload = function(){
	okListener();
	cancelListener();
	clickmultiselect();
	drop();
	clickbuttom();
}