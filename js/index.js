$(document).ready(function(){
    $("#menu").click(function(){
//		$("#show").toggleClass("none");
		$("#show").slideToggle("slow");
	}); 
	
	var btn=document.getElementById("btn");
	  btn.onclick=function(){
	      if(btn.innerHTML=="查看更多  +"){
	      	$(".over").css("display","block");
	      	btn.innerHTML="关闭  x";
	      }else{
	      	$(".over").css("display","none");
	      	btn.innerHTML="查看更多  +";
	      }
	  }
	  
	var btnn=document.getElementById("button");
	  btnn.onclick=function(){
	      if(btnn.innerHTML=="查看更多  +"){
	      	$(".close").css("display","block");
	      	btnn.innerHTML="关闭  x";
	      }else{
	      	$(".close").css("display","none");
	      	btnn.innerHTML="查看更多  +";
	      }
	  }
	  
	var btnnn=document.getElementById("push");
	  btnnn.onclick=function(){
	      if(btnnn.innerHTML=="查看更多  +"){
	      	$(".hide").css("display","block");
	      	btnnn.innerHTML="关闭  x";
	      }else{
	      	$(".hide").css("display","none");
	      	btnnn.innerHTML="查看更多  +";
	      }
	  }
	  
	var btnnnnn=document.getElementById("come");
	  btnnnnn.onclick=function(){
	      if(btnnnnn.innerHTML=="查看更多  +"){
	      	$(".hiden").css("display","block");
	      	btnnnnn.innerHTML="关闭  x";
	      }else{
	      	$(".hiden").css("display","none");
	      	btnnnnn.innerHTML="查看更多  +";
	      }
	  }
	  
	  $(function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#toTop").fadeIn(1500);
                }
                else
                {
                    $("#toTop").fadeOut(1500);
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            $("#toTop").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
            });
        });
    });
});