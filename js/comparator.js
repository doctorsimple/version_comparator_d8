Drupal.behaviors.versionComparator = {
  attach : function(context, settings) {
    jQuery('#selectbuttonswrapper', context).on('click', '.author-select',  addTranslator);
    jQuery('button.fullscreen', context).on('click', function(e) {
      var $button = jQuery(e.target);
      jQuery( $button.data('target') ).addClass('fullscreen-block');
      $button.addClass('hidden');
      jQuery('button.undofullscreen').removeClass('hidden');
      jQuery(window).scrollTop(0);
    });
    jQuery('button.undofullscreen', context).on('click', function(e) {
      var $button = jQuery(e.target);
      jQuery( $button.data('target') ).removeClass('fullscreen-block');
      $button.addClass('hidden');
      jQuery('button.fullscreen').removeClass('hidden');
    })
  }


}

function addTranslator(e){
  //  var $t = jQuery('#translators');
  var tname = e.target.value;
  var $textswrapper = jQuery('#textswrapper');
  jQuery('#selectbuttonswrapper').append("<div id='tilethrobber'></div>");
  var $removedbutton = jQuery(e.target).detach();
  jQuery.post(
      drupalSettings.path.baseUrl+'views/ajax',
      {
        view_name : 'comparator_book',
        view_display_id : 'block_1',
        view_args : tname,
      },
      function(response) {
        for (r in response)
        {
          if (response[r].command == 'insert' && response[r].method == 'replaceWith') {
            var viewHtml = response[r].data;
            jQuery('#tilethrobber').remove();
            $textswrapper.append(viewHtml);
            jQuery('.vc-book-header').width('auto');
            jQuery('#textswrapper .view-header').width('auto');
            var bookscount = jQuery('.view-comparator-book').length;
            $textswrapper.find('.view-comparator-book')
            //Adjust row heights
                .last().find('.views-row').each( function(i){
              if ( bookscount == 1) {
                return false;
              }
              var $samerows = jQuery('.views-row-' + (i+1));
              jQuery($samerows).matchHeight();
            });
            //Set headers
            jQuery('.vc-book-header').each(function (i) {
              // var setwidth = jQuery(this).parents('.view-header').width();
              // jQuery(this).width(setwidth);
              // jQuery(this).parents('.view-header').width(setwidth);
            })
            // jQuery('#textswrapper .vc-book-header')
            //     .affix({
            //           offset: {
            //             top: jQuery('#textswrapper').offset().top, target: '.view-header'
            //           }
            //         }
            //     );
          }
        }
      }
  )
}