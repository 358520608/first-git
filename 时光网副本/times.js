window.onload = function(){
//搜索框
var cic = document.getElementById('cic');
var searc = document.getElementsByClassName('searc')[0];
var ccc = document.getElementsByClassName('ccc')[0];
var logo = document.getElementsByClassName('logo')[0];
cic.onclick = function(){
	if(searc.style.display=="none"){
		searc.style.display="block";
		logo.style.display="none";
        ccc.className="iconfont icon-chacha";
	}else{
		searc.style.display="none";
		logo.style.display="block";
		ccc.className="iconfont icon-search";
	}
}






var play_in = document.getElementById('play_in');
var clic = document.getElementsByClassName('clic')[0];
play_in.onfocus = function(){
	play_in.placeholder = '';
	clic.className = 'clic clic2';
}
play_in.onblur = function(){
	play_in.placeholder = '搜索电影、影人、影院、商品';
	clic.className = 'clic';
}







//轮播图
var imgs = document.getElementsByClassName('imgs')[0].children;
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
var point = document.getElementsByClassName('point')[0].children;
var cont = document.getElementsByClassName('cont');
var runImg = document.getElementsByClassName('runImg')[0];
var n = 1;
var mytime = setInterval(run,3000);
//自动轮播
runImg.onmouseover = function(){
	clearInterval(mytime);
}
runImg.onmouseleave = function(){
	mytime = setInterval(run,5000);
}
//触发事件
function run(){
	for(var i=0;i<imgs.length;i++){
	    imgs[i].className = '';
	    point[i].className = '';
	    cont[i].id = '';
	}
	if(n>=imgs.length){
        n=0;
	}
	if(n<0){
        n=imgs.length-1;
	}
    imgs[n].className = 'on_this';
	point[n].className = 'on';
	cont[n].id = 'active';
	n++;
}
//白点
for(var i=0;i<point.length;i++){
	point[i].m = i;
	point[i].onclick = function(){
		n = this.m;
		run();
	}
}
//左右键
left.onclick = function(){
	n-=2;
	run();
}
right.onclick = function(){
		run();
}
//console.log(n);
//结束


//点击事件
var news = document.getElementsByClassName('news');
var amov = document.getElementsByClassName('all_mov');
var left = document.getElementsByClassName('a_left')[0];
var right = document.getElementsByClassName('a_right')[0];
//console.log(amov);
  for(var i=0;i<news.length;i++){
  	news[i].m = i;
	news[i].onclick = function(){
		for(var k=0;k<amov.length;k++){
	    news[k].style.color = '#656565';
	    amov[k].style.display = 'none';
		}
		news[this.m].style.color = '#333';
		amov[this.m].style.display = 'block';
		if(amov[this.m].style.transform == 'translateX(0px)'){
			left.style.display = 'none';
	        right.style.display = 'block';
		}
		if(amov[this.m].style.transform == 'translateX(-973px)'){
            right.style.display = 'none';
	        left.style.display = 'block';
		}
	}
}
//点击事件
var hot_m = document.getElementsByClassName('hot_m');
var box_con2 = document.getElementsByClassName('box_con2');
var left2 = document.getElementsByClassName('a_left')[2];
var right2 = document.getElementsByClassName('a_right')[2];
//console.log(box_con);
  for(var i=0;i<hot_m.length;i++){
  	hot_m[i].m = i;
	hot_m[i].onclick = function(){
		for(var k=0;k<box_con2.length;k++){
	    hot_m[k].style.color = '#656565';
	    box_con2[k].style.display = 'none';
		}
		hot_m[this.m].style.color = '#333';
		box_con2[this.m].style.display = 'block';
		if(box_con2[this.m].style.transform == 'translateX(0px)'){
			left2.style.display = 'none';
	        right2.style.display = 'block';
		}
		if(box_con2[this.m].style.transform == 'translateX(-973px)'){
            right2.style.display = 'none';
	        left2.style.display = 'block';
		}
	}
}

//图片滚动
play('box');
play('box_s')
play('box_x')
function play(id){
var mybox = document.getElementById(id);
var left = mybox.getElementsByClassName('a_left')[0];
var right = mybox.getElementsByClassName('a_right')[0];
var all_mov = mybox.getElementsByClassName('box1')[0].children;
var n = 0;
//console.log(all_mov);
left.onclick = function(){
	left.style.display = 'none';
	right.style.display = 'block';
	for(var i=0;i<all_mov.length;i++){
        if(all_mov[i].style.display == 'block'){
    	all_mov[i].style.transform = 'translateX(0px)';
    	//console.log(all_mov[i].style.display);
        }
    }
    
}
right.onclick = function(){
	right.style.display = 'none';
	left.style.display = 'block';
	for(var i=0;i<all_mov.length;i++){
        if(all_mov[i].style.display == 'block'){
    	all_mov[i].style.transform = 'translateX(-973px)';
        }
    }
    
}

}


var inp = document.getElementById('inp');
inp.onfocus = function(){
	inp.placeholder = '';
}
inp.onblur = function(){
	inp.placeholder = '邮箱地址';
}



}