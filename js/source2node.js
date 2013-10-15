// $Id$

/**
 * @file
 * The main javascript file for the source2node module
 */

(function ($) {

Drupal.source2node = Drupal.source2node || {};
//Drupal.source2node.someVariable = Drupal.source2node.someVariable || {};



/**
 * Update the redirect notice
 *
 * @param object urlField
 *   The jquery object containing the full url path
 */
Drupal.source2node.updateRedirect = function(urlField) {
  var path = urlField.val();
  if (!path) {
    return;
  }
  var parts = path.match(/:\/\/[^\/]+\/([^?]+)/);
  console.log(parts);

  if (!parts || typeof parts[1] === 'undefined') {
    $('#edit-source2node' + Drupal.settings.source2node.globalId + 'do-redirect').attr('disabled', 'disabled');
    $('#source2node-redirect em.placeholder').text('???');
  }
  else {
    $('#edit-source2node' + Drupal.settings.source2node.globalId + 'do-redirect').removeAttr('disabled');
    $('#source2node-redirect em.placeholder').text(parts[1]);
  }
}

/**
 * Core behavior for source2node.
 */
Drupal.behaviors.source2node = {
  attach: function (context, settings) {

    //this is the body field that we will place content into
    var globalId = Drupal.settings.source2node.globalId;

    //update on load to get the span current with form cache
    Drupal.source2node.updateRedirect($('#edit-source2node' + globalId + 'url'));

    //monitor changes in the url and update the redirect message
    $('#edit-source2node' + globalId + 'url').keyup(function(){
      Drupal.source2node.updateRedirect($(this));
    });


    //when the button is clicked...
    $('#edit-source2node' + globalId + 'get-source').click(function(){

      var data = {
        url: $('#edit-source2node' + globalId + 'url').val(),
        title: $('#edit-source2node' + globalId + 'title').val(),
        begin: $('#edit-source2node' + globalId + 'begin').val(),
        end: $('#edit-source2node' + globalId + 'end').val(),
        offset: $('#edit-source2node' + globalId + 'offset').val(),
        token: Drupal.settings.source2node.token
      };

      //send find/replace based on setting
      if ($('#edit-source2node' + globalId + 'find-active:checked').length) {
        data.find = $('#edit-source2node' + globalId + 'find').val();
        data.replace = $('#edit-source2node' + globalId + 'replace').val();
      }

      //don't do the ajax if we have no url
      if (!data.url) {
        alert(Drupal.t('You have not entered a source URL; please do so and try again.'));
        return false;
      }

      //if the field has text then we need to confirm
      var title = $('.source2node-insert-title-field');
      var body = $('.source2node-insert-body-field .form-textarea');
      var bodyLabel = body.find('label').text();
      if (body.val() && !confirm(Drupal.t('This will overright the text in the @body field. Do you wish to continue?', {'@body': bodyLabel}))) {
        return false;
      }

      var button = $(this);
      var buttonText = button.val();
      button.val(Drupal.t('Retrieving source HTML...'));

      //go grab the section from the source url...
      $.post('/source2node/get', data, function(json){

        button.val(buttonText);

        if (json.result == '1') {

          //place the title
          if (json.elements.title) {
            title.val(json.elements.title);
          }

          //place the globalId
          if (json.elements.body) {
            body.val(json.elements.body);
          }
        }
      }, 'json');
      return false;
    });



	}
}

/**
 * @} End of "defgroup admin_behaviors".
 */

})(jQuery);
