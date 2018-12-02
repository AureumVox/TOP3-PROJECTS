(function($){
  $(function(){  
    var scroll = $(document).scrollTop();
    var headerHeight = $('.page-header').outerHeight();
    
    $(window).scroll(function() {
      var scrolled = $(document).scrollTop();
      if (scrolled > headerHeight){
        $('.page-header').addClass('off-canvas');
      } else {
        $('.page-header').removeClass('off-canvas');
      }

        if (scrolled > scroll){
         $('.page-header').removeClass('fixed');
        } else {
        $('.page-header').addClass('fixed');
        }             
      scroll = $(document).scrollTop();  
     });
       
   });
})(jQuery); 


const sr = ScrollReveal({
  duration: 2000,
  reset:true
});

sr.reveal ('#banner', {
  delay: 50
})

sr.reveal ('.swatches', {
  delay: 30
})

sr.reveal ('.lightness', {
  delay: 50
})

sr.reveal ('.saturation', {
  delay: 30
})

sr.reveal ('.hue', {
  delay: 50
})

sr.reveal ('.greens', {
  delay: 30
})


