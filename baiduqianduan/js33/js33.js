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

var setcoordinates = function(coordinates){
	var pointer = document.getElementsByClassName('pointer')[0];
	if(pointer){
		pointer.remove();
	}
	
	var x = coordinates.split('-')[0];
	var y = coordinates.split('-')[1];
	var t = coordinates.split('-')[2];
	
	var obj = document.getElementsByClassName('obedient-white-square')[0].children[0].children[1].children[x-1].children[y];
	
	var htmlobj = document.createElement('div');
	var html = '<span></span><span></span>';
	htmlobj.className = "pointer direction-"+t;
	htmlobj.setAttribute('data-coordinates', coordinates);
	htmlobj.innerHTML = html;
	obj.appendChild(htmlobj);
}
var getcoordinates = function(){
	var coordinates = document.getElementsByClassName('pointer')[0];
	return coordinates;
}
/*坐标移动*/
var coordinatesgo = function(){
	var pointer = getcoordinates();
	coordinates = pointer.getAttribute('data-coordinates');
	var x = coordinates.split('-')[0];
	var y = coordinates.split('-')[1];
	var t = coordinates.split('-')[2];
	
	switch (t){
		case 'T':
			x = parseInt(x) - 1; 
			break;
		case 'R':
			y = parseInt(y) + 1;
			break;
		case 'B':
			x = parseInt(x) + 1;
			break;
		case 'L':
			y = parseInt(y) - 1;
			break;
		default:
			break;
	}
	
	if(x<1)x=1;
	if(x>10)x=10;
	if(y<1)y=1;
	if(y>10)y=10;
	
	coordinates = x+'-'+y+'-'+t;
	setcoordinates(coordinates);
}
/*坐标转向*/
var changedirection = function(type){
	var pointer = getcoordinates();
	coordinates = pointer.getAttribute('data-coordinates');
	var x = coordinates.split('-')[0];
	var y = coordinates.split('-')[1];
	var t = coordinates.split('-')[2];
	type = type.toLowerCase();
	
	switch (type){
		case 'tun rig':
			if(hasClass(pointer, 'direction-T')){
				pointer.className = pointer.className.replace('direction-T', 'direction-R');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'R');
				break;
			}else if(hasClass(pointer, 'direction-R')){
				pointer.className = pointer.className.replace('direction-R', 'direction-B');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'B');
				break;
			}else if(hasClass(pointer, 'direction-B')){
				pointer.className = pointer.className.replace('direction-B', 'direction-L');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'L');
				break;
			}else if(hasClass(pointer, 'direction-L')){
				pointer.className = pointer.className.replace('direction-L', 'direction-T');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'T');
				break;
			}
			break;
		case 'tun lef':
			if(hasClass(pointer, 'direction-T')){
				pointer.className = pointer.className.replace('direction-T', 'direction-L');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'L');
				break;
			}else if(hasClass(pointer, 'direction-R')){
				pointer.className = pointer.className.replace('direction-R', 'direction-T');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'T');
				break;
			}else if(hasClass(pointer, 'direction-B')){
				pointer.className = pointer.className.replace('direction-B', 'direction-R');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'R');
				break;
			}else if(hasClass(pointer, 'direction-L')){
				pointer.className = pointer.className.replace('direction-L', 'direction-B');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'B');
				break;
			}
			break;
		case 'tun bac':
			if(hasClass(pointer, 'direction-T')){
				pointer.className = pointer.className.replace('direction-T', 'direction-B');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'B');
				break;
			}else if(hasClass(pointer, 'direction-R')){
				pointer.className = pointer.className.replace('direction-R', 'direction-L');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'L');
				break;
			}else if(hasClass(pointer, 'direction-B')){
				pointer.className = pointer.className.replace('direction-B', 'direction-T');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'T');
				break;
			}else if(hasClass(pointer, 'direction-L')){
				pointer.className = pointer.className.replace('direction-L', 'direction-R');
				pointer.setAttribute('data-coordinates', x+'-'+y+'-'+'R');
				break;
			}
			break;
		default:
			break;
	}
}

/*执行命令go*/
var going = function(){
	var obj = document.getElementsByClassName('go')[0].children[1];
	
	obj.addEventListener('click', function(){
		var type = document.getElementsByClassName('go')[0].children[0].value;
		type = type.toLowerCase();
		switch (type){
			case 'go':
				coordinatesgo();
				break;
			default:
				changedirection(type);
				break;
		}
	});
}

window.onload = function (){
	setcoordinates('5-5-L');
	going();
}