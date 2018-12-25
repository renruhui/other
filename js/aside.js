
$(function(){
	$(".aside_title").click(function(){
		$(this).hide();
		$(this).parent(".aside_online").animate({right:"0"},500)
	})
	$("#del").click(function(){
		$(this).parents(".aside_online").animate({right:"-138px"},500,function(){
			$(".aside_title").show();
		})
		
	})
})