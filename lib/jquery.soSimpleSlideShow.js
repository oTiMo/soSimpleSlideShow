(function($){
    $.fn.extend({
        //plugin name - soSimpleSlideShow
        soSimpleSlideShow: function(options) {
 
          //Settings list and the default values
          var defaults = {
              speed: 5000,
              random: false
          };
            
          var options = $.extend(defaults, options);
        
          return this.each(function() {
            var o =options;
              
            var obj = $(this);       
            
            obj.addClass("so-simple-slide-show");

            setInterval(function(){
            
              var active = obj.children('.slide.active');

              if ( active.length == 0 ) active = obj.children('.slide:last');
              
              if ( active.length == 0 ) return false;

              // use this to pull the images in the order they appear in the markup
              var next =  active.next().length ? active.next() : obj.children(' .slide:first');

              // uncomment the 3 lines below to pull the images in random order
              /*
              if (o.random) {
                var sibs  = active.siblings();
                var rndNum = Math.floor(Math.random() * sibs.length );
                var next  = $( sibs[ rndNum ] );
              }
              */
              active.addClass('last-active');
              active.css({"z-index": 9})
              active.removeClass('active');

              next.css({opacity: 0.0, "z-index": 10})
                  .addClass('active')
                  .animate({opacity: 1.0}, 1500, function() {
                      active.removeClass('last-active');
                      active.css({"z-index": 8})
                  });                                                                           
            }, o.speed);

          });
        }
    });
})(jQuery);