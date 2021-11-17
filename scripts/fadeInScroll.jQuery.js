(function($) {

      $.fn.fadeInScroll = function(options) {

            // VARIABLES ------------------------------------
            var elements = $(this);



            // SETTINGS ------------------------------------
            var settings = $.extend({
                  minDistance: 80 * $(window).height() / 100 //Distance between the browser top scroll and the next element
            }, options);



            // MAIN ------------------------------------
            // Add sFade classes
            $(elements).each(function() {
                  $(this).css('opacity', '0');
            });

            // Check the position of all the elemnents.
            CheckFades();



            // FUNCTIONS ------------------------------------
            function CheckFades() {


                  //Get the top of the browser
                  vWindowScrollTop = $(window).scrollTop();

                  //Test if the window TopScroll reachs the element TopScroll minus the minimun distance
                  $(elements).each(function() {
                        if (((vWindowScrollTop + parseInt(settings.minDistance)) >= $(this).offset().top)) {
                              $(this).css('opacity', '1');
                              $(this).addClass("fadeInUp");
                        }
                  });
            }



            // EVENTS ------------------------------------
            $(window).scroll(function() {
                  CheckFades();
            });
      };

}(jQuery));


//Function with counter in


(function($) {

      $.fn.fadeInScrollWithCount = function(options) {

            // VARIABLES ------------------------------------
            var elements = $(this);
            var done = false;


            // SETTINGS ------------------------------------
            var settings = $.extend({
                  minDistance: 100 * $(window).height() / 100 //Distance between the browser top scroll and the next element
            }, options);


            // MAIN ------------------------------------
            // Add sFade classes
            $(elements).each(function() {
                  $(this).css('opacity', '0');
            });

            // Check the position of all the elemnents.
            CheckFades();


            // FUNCTIONS ------------------------------------
            function CheckFades() {
                  // console.log(done);
                  //Get the top of the browser
                  vWindowScrollTop = $(window).scrollTop();

                  //Test if the window TopScroll reachs the element TopScroll minus the minimun distance
                  $(elements).each(function() {
                        if (((vWindowScrollTop + parseInt(settings.minDistance)) >= $(this).offset().top)) {
                              $(this).css('opacity', '1');
                              $(this).addClass("fadeInUp");
                              if (done == false) {
                                    setTimeout(function() {
                                          // console.log("do awy");
                                          $('.counter').each(function() {
                                                var $this = $(this),
                                                      countTo = $this.attr('data-count');
                                                $({
                                                      countNum: $this.text()
                                                }).animate({
                                                      countNum: countTo
                                                }, {
                                                      duration: 1000,
                                                      easing: 'linear',
                                                      step: function() {
                                                            $this.text(Math.floor(this.countNum));
                                                      },
                                                      complete: function() {
                                                            $this.text(this.countNum.toLocaleString());
                                                            //alert('finished');
                                                      }
                                                });
                                          });
                                    }, 50);
                              }
                              done = true;
                        }
                  });
            }


            // EVENTS ------------------------------------
            $(window).scroll(function() {
                  CheckFades();
            });
      };

}(jQuery));

// 
// //  scrolling effect
// (function($) {
//
//       $.fn.parallaxScroll = function(options) {
//
//             // VARIABLES ------------------------------------
//             var elements = $(this);
//
//             // SETTINGS ------------------------------------
//             var settings = $.extend({
//                   minDistance: $(window).height() //Distance between the browser top scroll and the next element
//             }, options);
//
//             // MAIN ------------------------------------
//             // Add sFade classes
//             $(elements).each(function() {
//                   $(this).css('opacity', '0');
//                   console.log("Comming to ViewPort");
//             });
//
//             // Check the position of all the elemnents.
//             checkPlax();
//
//             // FUNCTIONS ------------------------------------
//             function checkPlax() {
//
//                   //Get the top of the browser
//                   vWindowScrollTop = $(window).scrollTop();
//                   var scrHeight = [],
//                         proGress = [];
//
//                   //Test if the window TopScroll reachs the element TopScroll minus the minimun distance
//                   $(elements).each(function() {
//                         winScroll = vWindowScrollTop;
//                         viewportHeight = parseInt(settings.minDistance);
//                         topSpace = $(this).offset().top;
//                         boxHeight = $(this).height()
//                         proGress = ((topSpace - winScroll) / boxHeight);
//
//                         if ((winScroll + (viewportHeight * 1)) >= topSpace) {
//                               $(this).css('opacity', '1');
//                               if (!((winScroll + viewportHeight) >= topSpace + viewportHeight + boxHeight)) {
//                                     $(this).find('.plax').each(function() {
//                                           plax = $(this).data('plax');
//                                           calcPlax = ((proGress * plax));
//
//                                           $(this).css('transition: all 1s');
//                                           $(this).css({
//                                                 '-webkit-transform': 'translateY(' + calcPlax + '%)',
//                                                 '-moz-transform': 'translateY(' + calcPlax + '%)',
//                                                 '-ms-transform': 'translateY(' + calcPlax + '%)',
//                                                 '-o-transform': 'translateY(' + calcPlax + '%)',
//                                                 'transform': 'translateY(' + calcPlax + '%)'
//                                           });
//                                     });
//                               } else {
//                                     $(this).css('opacity', '1');
//                               }
//                         } else {
//                               $(this).css('opacity', '1');
//                         }
//                   });
//             }
//
//             // EVENTS ------------------------------------
//             $(window).scroll(function() {
//                   checkPlax();
//             });
//       };
//
// }(jQuery));
