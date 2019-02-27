  Drupal.behaviors.formautofill = {
    attach: function (context, settings) {
      var $titlefield = jQuery("input[data-drupal-selector=edit-title-0-value]");

      jQuery('#node-text-for-comparison-form').on('change',
          'input[data-drupal-selector="edit-field-comparator-chapter-0-value"]',
          function(e){
            if ( !$titlefield.val().match(/[a-zA-Z]/g) ) {
              $titlefield.val(e.target.value + '.');
            }
      });
    }
  }
