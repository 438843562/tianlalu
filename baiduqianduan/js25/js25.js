/*打开关闭文件夹监听事件*/
var addfolderListener = function (){
	var obj = document.getElementById('tree');
	obj.addEventListener("click",function(e){
		if(e.target && e.target.nodeName == "SPAN" && hasClass(e.target, 'show_hide')) {
			var type = e.target.innerText;
			if(type == '-'){
				e.target.innerText = '+';
				var body = e.target.parentElement.parentElement;
				body.className = body.className.replace('child_show', 'child_hide');
			}else if(type == '+'){
				e.target.innerText = '-';
				var body = e.target.parentElement.parentElement;
				body.className = body.className.replace('child_hide', 'child_show');
			}
		}
	});
}

/*增加删除节点*/
var handerchangenode = function(obj){
	var subobj = document.getElementsByClassName('add');
	var n = subobj.length;
	for (i=0; i<n; i++){
		subobj[i].style.display = "none";
	}
	subobj = document.getElementsByClassName('delete');
	n = subobj.length;
	for (i=0; i<n; i++){
		subobj[i].style.display = "none";
	}
	
	var maxwhile = 20;
	subobj = obj;
	while(maxwhile--){
		subobj = subobj.nextElementSibling;
		if(subobj){
			subobj.style.display = 'block';
		}else{
			break;
		}
	}
	
	subobj = document.getElementsByClassName('filename');
	n = subobj.length;
	for (i=0; i<n; i++){
		subobj[i].style.color = '#000';
	}
	obj.style.color = 'red';
}
var changenode = function(){
	var obj = document.getElementById('tree');
	obj.addEventListener("click",function(e){
		if(e.target && e.target.nodeName == "SPAN" && hasClass(e.target, 'filename')) {
			handerchangenode(e.target);
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
var selectListener = function(){
	var obj = document.getElementsByClassName('select')[0].children[1];
	obj.addEventListener('click', function(){
		var text = document.getElementsByClassName('select')[0].children[0].value;
		var found = 0;
		subobj = document.getElementsByClassName('filename');
		n = subobj.length;
		for (i=0; i<n; i++){
			var text2 = subobj[i].innerText;
			if(text2 == text){
				var tempobj = subobj[i];
				handerchangenode(subobj[i]);
				var n = 100;
				while(n--){
					if(tempobj){
						tempobj = tempobj.parentElement;
						if(hasClass(tempobj, 'tree')){
							break;
						}
						if(hasClass(tempobj, 'folder')){
							openobj = tempobj.children[0].children[0];
							openobj.innerHTML = '-';
							var body = openobj.parentElement.parentElement;
							body.className = body.className.replace('child_hide', 'child_show');
						}
					}else{
						break;
					}
				}
				found = 1;
				break;
			}
		}
		
		if(!found){
			alert('未查询到指定文件或文件夹');
		}
	});
}

/*删除节点*/
var deleteListener = function(){
	var obj = document.getElementById('tree');
	obj.addEventListener("click",function(e){
		if(e.target && e.target.nodeName == "SPAN" && hasClass(e.target, 'delete')) {
			e.target.parentElement.parentElement.remove();
		}
	});
}

/*增加节点*/
var addListener = function(){
	var obj = document.getElementById('tree');
	obj.addEventListener("click",function(e){
		if(e.target && e.target.nodeName == "SPAN" && hasClass(e.target, 'add')) {
			var j = 100;
			var subobj = e.target;
			while(j--){
				subobj = subobj.previousElementSibling;
				if(!subobj){
					break;
				}
				if(hasClass(subobj, 'filename')){
					var filename = subobj.innerText;
					document.getElementsByClassName('content')[0].children[2].value = filename;
					document.getElementsByClassName('pop')[0].style.display = 'block';
				}
			}
		}
	});
}

/*确定 和 取消*/
var okListener = function(){
	var obj = document.getElementsByClassName('ok')[0];
	obj.addEventListener('click', function(){
		var obj = document.getElementsByClassName('content')[0];
		var name = obj.children[0].children[1].value;
		var type = obj.children[1].children[1].value;
		var folder = obj.children[2].value;
		var found = 0;
		if(name.length <= 0){
			alert('输入文件名不正确');
		}
		
		subobj = document.getElementsByClassName('filename');
		n = subobj.length;
		for (i=0; i<n; i++){
			var text2 = subobj[i].innerText;
			var addobj = subobj[i].parentElement.parentElement;
			if(text2 == folder){
				var addhtml = '';
				if(type == 2){
					var html = '<label><span class="show_hide">-</span><span class="filename">'+name+'</span><span class="delete">-</span><span class="add">+</span></label>';
					html += '<div></div>';
					addhtml = document.createElement('div');
					addhtml.innerHTML = html;
					addhtml.className = "folder child_show";
				}else if(type ==1){
					var html = '<label><span class="filename">'+name+'</span><span class="delete">-</span>';
					addhtml = document.createElement('div');
					addhtml.innerHTML = html;
					addhtml.className = 'file';
				}
				addobj.children[1].appendChild(addhtml);
				
				found = 1;
				break;
				
			}
			if(found){
				break;
			}
		}
		
		document.getElementsByClassName('pop')[0].style.display = 'none';
		if(!found){
			alert('添加不成功');
		}else{
			alert('添加成功');
		}
	});
}
var cancelListener = function(){
	var obj = document.getElementsByClassName('cancel')[0];
	obj.addEventListener('click', function(){
		var temp = document.getElementsByClassName('pop')[0];
		temp.style.display = 'none';
	});
	
	var obj = document.getElementsByClassName('notes')[0];
	obj.addEventListener('click', function(e){
		if(e.target && hasClass(e.target, 'notes')){
			var temp = document.getElementsByClassName('pop')[0];
			if(hasClass(this, 'notes')){
				temp.style.display = 'none';
			}
		}
	});
	
}

window.onload = function(){
	addfolderListener();
	changenode();
	selectListener();
	deleteListener();
	addListener();
	okListener();
	cancelListener();
}
