/* ==========================================================================

    Project: xplosion_test
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.initColorbox('.img-auto-open');
    },

    /**
     * Auto trigger this function on start
     */
    initColorbox: function(selector) {
      var images = $(selector),
          totalImages = images.length,
          count = 0;

      //open first image
      popout_Img();

      //set timer on callback of image close
      $(document).bind('cbox_complete', function(){
        setTimeout( function() {
          popout_Img();
        }, 2000);
      });

      /**
       * Display image
       */
      function popout_Img() {
        if(count === totalImages) {
          $.colorbox.close();
        }
        else {
          $.colorbox({href: images.eq(count).attr('src')});
          count++;
        }
      }
    },
  };

  $(function() {
    App.init();
  });

})(jQuery);