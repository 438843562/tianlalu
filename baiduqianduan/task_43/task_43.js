(function (w, d){
	'use strict';
	
	function PhotoAlbum(){
	}

	var imagecount = 0;
	var obj = '';
	var t_images = 0;
	
	/*设置相册*/
	PhotoAlbum.prototype.setImage = function (images, option) {
        if (typeof images === 'string') {
            this.setImage([images]);
            return;
        }
        
		imagecount = images.length;
		if(imagecount <= 0){
			throw new Error('-1', 'image count not is 0');
		}
		t_images = images;
    };

	/*添加图片*/
	PhotoAlbum.prototype.addImage = function(image){
		if(imagecount < 6){
			t_images.push(image);
			imagecount = t_images.length;
			this.createAlbum(false, true);
		}
	};
	
	Array.prototype.indexOf = function(val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == val) return i;
            }
            return -1;
        };
	/*删除照片*/
	PhotoAlbum.prototype.deleteImage = function(image){
		var found = -1;
		for (var i = 0; i < t_images.length; i++) {
            if (t_images[i] == image) found = i;
        }
        if (found > -1) {
            t_images.splice(found, 1);
        }
		imagecount = t_images.length;
		this.createAlbum(false, true);
	};
	
	/*初始化*/
	PhotoAlbum.prototype.init = function(config){
		try{
			this.config = config;
			this.setImage(this.config.images);
			obj = config.classobj || document.getElementById('image-container');
			obj.addEventListener('click', function(e){
				if(e.target && e.target.nodeName == 'SPAN'){
					PhotoAlbum.prototype.deleteImage(e.target.previousElementSibling.getAttribute('src'));
				}
			});
			document.getElementsByClassName('addimage')[0].addEventListener('click', function(e){
				if(e.target && e.target.nodeName == 'SPAN'){
					PhotoAlbum.prototype.addImage(document.getElementsByClassName('addimage')[0].children[0].value);
				}
			});
			this.selectImage();
			return true;
		}catch(e){
			return false;
		}
	};
	
	/*查询按钮监听*/
	var hasClass = function(obj, name){
		try{
		    var isId = obj.hasAttribute('class');
		}catch(e){
		    return false;
		}finally{
		    if(isId){
		    	var classstr = obj.className;
		    	if(classstr.indexOf(name) >= 0 ){
		    	    return true;
		    	}else{
		    		return false;
		    	}
		    }
		}
		return false;
	}
	
	/*点击图片放大*/
	PhotoAlbum.prototype.selectImage = function(){
		obj.addEventListener('click', function(e){
			if(e.target && e.target.nodeName == 'IMG'){
				if(hasClass(e.target, 'selectedimage')){
					e.target.className =  e.target.className.replace('selectedimage', ' ')+' ';
				}else{
					e.target.className = e.target.className+' selectedimage';
				}
			}
		});
	}
	
	/*生成相册*/
	PhotoAlbum.prototype.createAlbum = function(config, restart){
		if(!restart && config){
			if(!this.init(config)){
				return false;
			}
		}
		
		var html = "";
		switch (imagecount){
			case 1:
				html = '<div class="images image_one">';
				break;
			case 2:
				html = '<div class="images image_two">';
				break;
			case 3:
				html = '<div class="images image_three">';
				break;
			case 4:
				html = '<div class="images image_four">';
				break;
			case 5:
				html = '<div class="images image_five">';
				break;
			default:
				html = '<div class="images image_six">';
				break;
		}
		if(imagecount > 6)imagecount=6;
		for(var i=0; i<imagecount; i++){
			html += '<div class="image">';
			html += '<img src="'+t_images[i]+'"/>';
			html += '<span title="删除相片">-</span>';	
			html += '</div>';		
		}
		html += '</div>';
		obj.innerHTML = html;
	};
	
	w.PhotoAlbum = new PhotoAlbum();
})(window, document);