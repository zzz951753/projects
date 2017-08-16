var imglist = document.getElementById("imglist");
var imgs = document.getElementsByClassName("img");
var imgdetail = document.getElementById("imgdetail");
var contain = document.getElementById("imgs");
var details = document.getElementById("details");
var close = document.getElementsByTagName("span")[0];
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var text = document.getElementById("text");
var num = document.getElementById("num");
var len = imgs.length;
var currentindex;
close.onclick = function(){
	contain.style.display = "block";
	details.style.display = "none";
}
for(var i =0;i<len;i++){
	(function(val){
		imgs[val].onclick =  function(){
			slide(val);
			imgdetail.className ="bigimg";
			contain.style.display = "none";
			details.style.display = "block";
			currentindex = val;
			if(imglist.childNodes.length==1){
				for(var i = 0;i<len;i++){
					var img = document.createElement("img");
					img.src = imgs[i].src;
					img.className = "img";
					imglist.appendChild(img);
					(function(n){
						img.onclick = function(){
							slide(n);
						}
					})(i);
				}
			}
		}
		
	})(i);
}
function slide(index){
	if(index==len){
		currentindex = 0;
	}
	else if(index < 0){
		currentindex = len-1;
	}
	else{
		currentindex = index;
	}
	num.innerHTML = (index+1)+"/"+len
;	imgdetail.src = imgs[currentindex].src;
	text.innerHTML = imgs[currentindex].alt;
}

pre.onclick = function(){
	slide(--currentindex);
}
next.onclick =function (){
	slide(++currentindex);
}