$(document).ready(function() {
	var arrow = null;

	$('.product_types').hover(
		function () {
			console.dir(this);
			arrow = $(this).find('.product-arrow');
			console.dir(arrow);
			arrow.show();
		},
		function () {
			console.log("exit area");
			arrow.hide();
		}
	);

	$('#basecamp-module').hover( 
		function () {
			$("#basecamp-slogan").show();
			$("#basecamp-sub-slogan").show();
			$("#main").hide();
			$("#main_sub_slogan").hide();
		},
		function () {
			$("#basecamp-slogan").hide();
			$("#basecamp-sub-slogan").hide();
			$("#main").show();
			$("#main_sub_slogan").show();
		}
	);

	$('#highrise-module').hover( 
		function () {
			$("#highrise-slogan").show();
			$("#highrise-sub-slogan").show();
			$("#main").hide();
			$("#main_sub_slogan").hide();
		},
		function () {
			$("#highrise-slogan").hide();
			$("#highrise-sub-slogan").hide();
			$("#main").show();
			$("#main_sub_slogan").show();
		}
	);

	$('#campfire-module').hover( 
		function () {
			$("#campfire-slogan").show();
			$("#campfire-sub-slogan").show();
			$("#main").hide();
			$("#main_sub_slogan").hide();
		},
		function () {
			$("#campfire-slogan").hide();
			$("#campfire-sub-slogan").hide();
			$("#main").show();
			$("#main_sub_slogan").show();
		}
	);

});

/*$("li.fade").hover(function(){$(this).fadeOut(100);$(this).fadeIn(500);});



/*	$("#basecamp-module").on('mouseout', function(){
		$("basecamp-arrow").hide();
	});

	$('#highrise-module').on('mouseenter', function () {
		$("#highrise-arrow").show();
	});
	$("#highrise-module-module").on('mouseout', function(){
		$("highrise-arrow").hide();
	});

	$('#campfire-module').on('mouseenter', function () {
		$("#campfire-arrow").show();
	});
	$("#campfire-module").on('mouseout', function(){
		$("campfire-arrow").hide();
	});

});

		/*var arrow = $(".product-types").find('.product-arrow');
		console.dir(arrow);
		/*arrow.show();
		/*$('.product-type').prepend('.alt-slogan');
		$('.purpose_slogan').remove();*/