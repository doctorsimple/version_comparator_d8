  Drupal.behaviors.formautofill = {
    attach: function (context, settings) {

      jQuery('#node-text-for-comparison-form').on('submit', function(e){
        var $titlefield = jQuery("input[data-drupal-selector=edit-title-0-value]");
        var book = jQuery("input[data-drupal-selector=edit-field-comparator-book-0-value]").val().split(' ',2);
        var author = jQuery("input[data-drupal-selector=edit-field-comparator-author-0-value]").val().split(' ').pop();
        var chapter = jQuery("input[data-drupal-selector=edit-field-comparator-chapter-0-value]").val();
         var thetitle = [book[0], author, chapter]
        $titlefield.val(thetitle.join(' '));
      });

    }
  }
