/* ==========================================================================

    Project: xplosion_test
    Author: XHTMLized
    Last updated: Fri Feb 13 2015 10:48:40

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
     * colorbox gallery on start
     */
    initColorbox: function(selector) {
      var images = $(selector),
        imgQuant = images.length,
        actImg = 0;

      //open first image
      show_img();

      //set timer on colorbox close
      $(document).bind('cbox_complete', function() {
        setTimeout(function() {
          show_img();
        }, 2000);
      });

      /**
       * function show lightbox
       */
      function show_img() {
        if (actImg === imgQuant) {
          $.colorbox.close();
        } else {
          $.colorbox({
            href: images.eq(actImg).attr('src')
          });
          actImg++;
        }
      }
    },
  };

  $(function() {
    App.init();
  });

})(jQuery);
