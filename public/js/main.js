(function ($) {
   "use strict";

   /*-------------------------------------
   After Load All Content Add a Class
   -------------------------------------*/

   window.onload = addNewClass();

   function addNewClass() {
      $(".fxt-template-animation")
         .imagesLoaded()
         .done(function (instance) {
            $(".fxt-template-animation").addClass("loaded");
         });
   }
})(jQuery);
