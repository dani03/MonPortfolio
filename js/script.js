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
  if($(document).scrollTop() < 390){
    $(".presentation").addClass('animated zoomOut');
    $("#cacher").css('animated zoomIn','');
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
