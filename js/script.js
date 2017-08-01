var $win = $(window);
$win.on('scroll', function(){
  console.log($win.scrollTop());
})

// pop up

$(document).ready(function(){
  $("#boutton").on('click', function(){
    $('#monModal').show('slow');
  });
  $("#closeMe").click(function(){
    $('#monModal').hide(300);
  });
});
// animation au scroll
$win.scroll(function(){
  if($(document).scrollTop() > 332){
    $(".presentation").addClass('animated fadeOut');
    $("#cacher").addClass('animated fadeIn');
    $(".devWeb").addClass('animated fadeInUp');
  }
  else{
    $('.presentation').removeClass('animated fadeOut',1000);
    $("#cacher").removeClass('animated fadeIn',1000);
  }

})
$(document).ready(function(){
  var headerheight = $('nav').outerHeight();
  $('.slide').click(function(e){
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerheight
    },1000);
    e.preventDefault();
  })
})
// effet fade au scroll fadeout
 var documentEl = $(document),
 fadeElement = $('.fade-scroll');
 $(document).on('scroll', function(){
   var myscroll= documentEl.scrollTop();
   $('.fade-scroll').each(function(){
     var $this = $(this),
     elementOffsetTop = $this.offset().top;
     if(myscroll > elementOffsetTop) $this.css('opacity', 1 -(myscroll-elementOffsetTop)/400);
   });
 });
  //  barres de progressions
$win.scroll(function(){
  if($(document).scrollTop() > 1650){
    $('#html').addClass('html');
  }
});

function onScrollevent(element, more_offset = 0) {
		let on_scroll = function() {
			if ($(window).scrollTop() > element.offset().top - more_offset) {
				element.animate({opacity: 1}, 700);
			}
		}

		let increaseSkill =	function() {
			if ($(window).scrollTop() > $('#story').offset().top - more_offset) {
				$('#html').addClass("hmtl");
				$('#git').addClass("level85");
				$('#sql').addClass("level75");
				$('#bootstrap').addClass("level60");
				$('#jquery').addClass("level85");
				$('#sass').addClass("level85");
				$('#javascript').addClass("level85");
			  $('#php').addClass("level80");
				$('#angular').addClass("level60");
			}
		}
  }
