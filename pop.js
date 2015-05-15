$(document).ready(function(){
		
		$(".small").hover(function(){
			var t = $(this).offset().top;
			var l = $(this).offset().left;
			$("#tooltip").html($(this).html()).css({top:t,left:l});
			setTimeout(function(){
				$("#tooltip").fadeIn();
			}, 300);
		});



		$("#tooltip").mouseenter(function(){
		    clearTimeout($(this).data('timeoutId'));
		 
			}).mouseleave(function(){
		    var someElement = $(this),
		        timeoutId = setTimeout(function(){
		            $("#tooltip").hide();
		        }, 600);
		    someElement.data('timeoutId', timeoutId); 
		});

		$('.wsk-shadow--z1').hover(function(){
			$('.wsk-shadow--z1 span').hide().html("box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12), <br /> 0 1px 1px 0 rgba(0,0,0,.24);").fadeIn(150);
			$(this).addClass('shadow-box-css');
		});
		$('.wsk-shadow--z1').mouseleave(function(){
			$('.wsk-shadow--z1 span').hide().html("z=1").fadeIn(150);
			$(this).removeClass('shadow-box-css');
		});

		$('.wsk-shadow--z2').hover(function(){
			$('.wsk-shadow--z2 span').hide().html("box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), <br /> 0 2px 5px 0 rgba(0,0,0,.23);").fadeIn(150);
			$(this).addClass('shadow-box-css');
		});
		$('.wsk-shadow--z2').mouseleave(function(){
			$('.wsk-shadow--z2 span').hide().html("z=2").fadeIn(150);
			$(this).removeClass('shadow-box-css');
		});

		$('.wsk-shadow--z3').hover(function(){
			$('.wsk-shadow--z3 span').hide().html("box-shadow: 0 10px 10px 0 rgba(0,0,0,.19), <br /> 0 6px 3px 0 rgba(0,0,0,.23);").fadeIn(150);
			$(this).addClass('shadow-box-css');
		});
		$('.wsk-shadow--z3').mouseleave(function(){
			$('.wsk-shadow--z3 span').hide().html("z=3").fadeIn(150);
			$(this).removeClass('shadow-box-css');
		});

		$('.wsk-shadow--z4').hover(function(){
			$('.wsk-shadow--z4 span').hide().html("box-shadow: 0 14px 14px 0 rgba(0,0,0,.25), <br /> 0 10px 5px 0 rgba(0,0,0,.22);").fadeIn(150);
			$(this).addClass('shadow-box-css');
		});
		$('.wsk-shadow--z4').mouseleave(function(){
			$('.wsk-shadow--z4 span').hide().html("z=4").fadeIn(150);
			$(this).removeClass('shadow-box-css');
		});

		$('.wsk-shadow--z5').hover(function(){
			$('.wsk-shadow--z5 span').hide().html("box-shadow: 0 19px 19px 0 rgba(0,0,0,.3), <br /> 0 15px 6px 0 rgba(0,0,0,.22);").fadeIn(150);
			$(this).addClass('shadow-box-css');
		});
		$('.wsk-shadow--z5').mouseleave(function(){
			$('.wsk-shadow--z5 span').hide().html("z=5").fadeIn(150);
			$(this).removeClass('shadow-box-css');
		});
		
		
});