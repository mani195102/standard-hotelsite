$(document).ready(function(){

	/******Sidenavbar****/

	$(".navbar-toggle").on("click", function() {

	     $(".mob_navi").toggleClass("menu_open")

	 }), $("li.mob_sub_link a").on("click", function() {

	    $(this).next().next().toggleClass("submenu_open")

	}), $("li.mob_sub_link span").on("click", function() {

	     $(this).next().toggleClass("submenu_open")

	 }), $(".mob_sub_link a").on("click", function() {

	     $(".mob_navi").addClass("submenu_open1")

	 }), $(".mob_sub_link span").on("click", function() {

	   $(".mob_navi").addClass("submenu_open1")

	 }), $(".mob_sub_navigate a").on("click", function() {

	   $(".mob_navi").removeClass("submenu_open1")

	}), $(".mob_sub_navigate span").on("click", function() {

	     $(".mob_navi").removeClass("submenu_open1")

	}), $(".mob_sub_navigate i").on("click", function() {

	    $(".mob_navi").toggleClass("menu_open")

	 }), $(".mob_sub_navigate span").on("click", function() {

	    $(".mob_sub_menu").removeClass("submenu_open")

	});

	
	/*********************Banner*******************/
	$('.banner_wrapper').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows:false,
	  dots:true,
	  autoplay:true,
	  autoplaySpeed:1800,
      fade: true,
	  cssEase: 'linear',	
	 

	});
	
$('.ourservices_in').slick({
    slidesToShow: 3,
    slidesToScroll:1,
	centerMode: true,
	speed: 2000,
	autoplay:false,
	arrows:true,
	dots:false,
    responsive: [
        {
            breakpoint: 1024,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
					speed:2000,
                    infinite: true,
					arrows:false,
                    dots: false
                }
        },
      
        {
            breakpoint: 767,
             settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:false,
                }
        },
		{
            breakpoint: 480,
             settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:false,
                }
        }
    ]
});
$('.corporate_partners_inner').slick({
    slidesToShow: 5,
    slidesToScroll:1,
	speed: 2000,
	autoplay:true,
	arrows:true,
	dots:false,
    responsive: [
        {
            breakpoint: 1024,
             settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
					speed:2000,
                    infinite: true,
					arrows:true,
                    dots: false
                }
        },
      
        {
            breakpoint: 767,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:true,
                }
        },
		{
            breakpoint: 480,
             settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:true,
                }
        }
    ]
});

$('.hometestimonials_slider').slick({
    slidesToShow: 4,
    slidesToScroll:1,
	speed: 2000,
	autoplay:true,
	centerMode: true,
	arrows:true,
	infinite: true,
	dots:false,
    responsive: [
        {
            breakpoint: 1024,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
					speed:2000,
                    infinite: true,
					arrows:true,
                    dots: false
                }
        },
		     {
            breakpoint:992,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
					speed:2000,
                    infinite: true,
					arrows:true,
                    dots: false
                }
        },
      
        {
            breakpoint: 767,
             settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:true,
                }
        },
		{
            breakpoint: 480,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:true,
                }
        }
    ]
});	
$('.hometestimonials_bottomslider').slick({
    slidesToShow: 4,
    slidesToScroll:1,
	speed: 2000,
	autoplay:true,
	arrows:false,
	infinite: true,
	dots:false,
    responsive: [
        {
            breakpoint: 1024,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
					speed:2000,
                    infinite: true,
					arrows:false,
                    dots: false
                }
        },
		     {
            breakpoint:992,
             settings: {
                    slidesToShow: 3,
					centerMode: true,
                    slidesToScroll: 1,
					speed:2000,
                    infinite: true,
					arrows:false,
                    dots: false
                }
        },
      
        {
            breakpoint: 767,
             settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:false,
                }
        },
		{
            breakpoint: 480,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
					arrows:false,
                }
        }
    ]
});

  /***********blogLoadmore**********/ 

		$(".homeourblogs_inner_bottom").slice(0, 3).show();

		$(".loadmore").on("click", function(e){

		  e.preventDefault();

		  $(".homeourblogs_inner_bottom:hidden").slice(0, 3).slideDown();

		  if($(".homeourblogs_inner_bottom:hidden").length == 0) {

			$(".loadmore").text("exit").addClass("exit").hide();

		  }

	});	
	
			$(".treatments_view").slice(0, 3).show();

		$(".treat_readmore").on("click", function(e){

		  e.preventDefault();

		  $(".treatments_view:hidden").slice(0, 1).slideDown();

		  if($(".treatments_view:hidden").length == 0) {

			$(".treat_readmore").text("exit").addClass("exit").hide();

		  }

	});
	
	/***********doctor_listLoadmore**********/ 

		$(".doctor_info_list").slice(0, 12).show();

		$("#load").on("click", function(e){

		  e.preventDefault();

		  $(".doctor_info_list:hidden").slice(0, 4).slideDown();

		  if($(".doctor_info_list:hidden").length == 0) {

			$("#load").text("exit").addClass("exit").hide();

		  }

	});	
	function toggleResetPswd(e){

	    e.preventDefault();

	    $('#logreg-forms .form-signin').toggle() // display:block or none

	    $('#logreg-forms .form-reset').toggle() // display:block or none

	}

	function toggleSignUp(e){

	    e.preventDefault();

	    $('#logreg-forms .form-signin').toggle(); // display:block or none

	    $('#logreg-forms .form-signup').toggle(); // display:block or none

	}

	$(()=>{

	    // Login Register Form

	    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);

	    $('#logreg-forms #cancel_reset').click(toggleResetPswd);

	    $('#logreg-forms #btn-signup').click(toggleSignUp);

	    $('#logreg-forms #cancel_signup').click(toggleSignUp);

	})	  

	/**Dropdown ***/

	$(window).scroll(function () {	var e = $(".header_wrapper");		$(window).scrollTop() >= 100 ? e.addClass("fixed") : e.removeClass("fixed")	});

	$(window).scroll(function () {	var e = $(".mobile-header");		$(window).scrollTop() >= 100 ? e.addClass("fixed") : e.removeClass("fixed")	});

	$(window).scroll(function () {	var e = $(".mob_navi");		$(window).scrollTop() >= 100 ? e.addClass("fixed") : e.removeClass("fixed")	});

});



$(document).ready(function() {

    $(".print").click(function() {

        var daid = $(this).attr('data-id');

        var content = "#content_" + daid;

        var divContents = jQuery(content).html();

        var printWindow = window.open();

        printWindow.document.write("<html><head><title> Mr.Electric </title>");

        printWindow.document.write('<style type="text/css"> .print-btn { display:none; } .print_bg { position:absolute;top:0px;left:0px;z-index:-1; } .couponswrap_single_inner{-webkit-print-color-adjust: exact !important;color-adjust: exact !important;margin:0 10px;background-image:url(assets/css/images/home/coupons.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;height:400px;padding:3em;float: left;text-align:center}.couponswrap_single_inner h5{font-size:60px;letter-spacing:-4px;line-height:60px;color:#005bac;font-weight:700;margin:0;display:inline-block;margin-bottom:15px}.couponswrap_single_inner span{font-size:32px;letter-spacing:0;line-height:32px;color:#005bac;font-weight:400;text-transform:uppercase;vertical-align:top}.couponswrap_single_inner p{font-size:23px;letter-spacing:0;color:#000;font-weight:500;font-family:RobotoCondensed-Bold}.couponswrap_single_inner h6{font-size:15px;line-height:24px;letter-spacing:0;color:#000;font-weight:400;font-family:Roboto-Regular;margin-bottom:15px}a.print{width:200px;display:inline-block;font-size:27px;letter-spacing:0;color:#000;font-weight:700;background-color:#fff;line-height:36px;padding:15px 0;border-radius:50px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}a.print:hover{background-color:#005baa;color:#fff} </style>');

        printWindow.document.write('<link rel="stylesheet" href="http://park75.com/dev/assets/css/frontend/style.css00"  type="text/css" />');

        printWindow.document.write('<body class="print_full"> <div class="print_cover"> <img class="print_bg" src="" />');

        printWindow.document.write(divContents);

		printWindow.document.write("</body>");

		printWindow.print();

		printWindow.document.close(); //i.close()

    });
		
	
	/***********services-loadmore**********/ 

		$(".servicespage_section").slice(0, 1).show();

		$("#loadmore1").on("click", function(e){

		  e.preventDefault();

		  $(".servicespage_section:hidden").slice(0, 1).slideDown();

		  if($(".servicespage_section:hidden").length == 0) {

			$("#loadmore1").text("exit").addClass("exit").hide();

		  }

	});	

});

/*********accrodian*********/
$(document).ready(function () {
	$(".set > a").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this)
				.siblings(".content")
				.slideUp(200);
			$(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
		} else {
			$(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
			$(this)
				.find("i")
				.removeClass("fa-plus")
				.addClass("fa-minus");
			$(".set > a").removeClass("active");
			$(this).addClass("active");
			$(".content").slideUp(200);
			$(this)
				.siblings(".content")
				.slideDown(200);
		}
	

	});
	
	// $(".set").click(function(){
	// 	$(this).removeClass("main");
	//   });


	// *******DATE-TIME*******
$(document).ready(function(){
	//$('#datetimepicker3').datetimepicker({
	//  format: 'LT'
	//});
	//$('#datetimepicker1').datetimepicker({
	//  format: 'L'
	//});
  });
			


	/**************Search Button*************************/
	$(document).on("click", ".search_btn", function () {
		$(".search_box_input").addClass("open_search");
	});
	$(document).on("click", ".closebutton", function () {
		$(this).parent().removeClass("open_search");
	});

});
$(document).ready(function(){
$(function () {
  // Image moving On hover
  moveBackgroundLeft();
  moveBackgroundRight();
});
$(window).on('mousemove click', function (e) {
    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (30 * lMouseX) / 100;
    lFollowY = (20 * lMouseY) / 100;
    var iMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var iMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    iFollowX = (-20 * iMouseX) / 100;
    iFollowY = (-20 * iMouseY) / 100;
});

var lFollowX = 0,
    lFollowY = 0,
    x2 = 0,
    y2 = 0,
    friction = 1 / 30;
function moveBackgroundRight() {
    x2 += (lFollowX - x2) * friction;
    y2 += (lFollowY - y2) * friction;
    translate = 'translate(' + x2 + 'px, ' + y2 + 'px)';
    $('.mouse_move_right').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });
    window.requestAnimationFrame(moveBackgroundRight);
}

var iFollowX = 0,
    iFollowY = 0,
    x1 = 0,
    y1 = 0,
    friction = 1 / 30;
function moveBackgroundLeft() {
    x1 += (iFollowX - x1) * friction;
    y1 += (iFollowY - y1) * friction;
    translate = 'translate(' + x1 + 'px, ' + y1 + 'px)';
    $('.mouse_move_left').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });
    window.requestAnimationFrame(moveBackgroundLeft);
}
});

$(document).ready(function(){

	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
});
});
