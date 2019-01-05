$(document).ready(function(){

  $('#map').click(function(){
    $('.contactBlock').hide();
    $('#mapWrapper').show();
  });

  $('#closeMap').click(function(){
    $('#mapWrapper').hide();
    $('.contactBlock').show();
  });

  $('.questionWrapper').click(function(){
    button = $(this).find('.open');
    if( button.hasClass('rotate'))
      button.removeClass('rotate')
    else
      button.addClass('rotate');
    $('.answerWrapper', this).toggle();
  });


  $('.closePromotion').click(function(){
    $('.promotion').hide();
  });
});
