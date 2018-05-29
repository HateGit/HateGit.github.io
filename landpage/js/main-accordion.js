$(document).ready(function() {

// ACCORDION
  $('.accordion-list__item').click(function() {
    $(this).toggleClass('open').next('.accordion-content').slideToggle('.accordion-content');
    $('.accordion-list__item').not(this).removeClass('open');
  });


//tabs sidebar
	$('.tab-menu__chapter').click(function() {
  $(this).toggleClass('open').next('.tab-submenu').slideToggle;
  $('.tab-menu__chapter').not(this).removeClass('open')
});

//main FORM tabs

  $(function() {
    $('.form-tabs__nav-item').click(function() {
        $('.form-tabs__nav-item.active').removeClass('active');
        $(this).addClass('active');

        var panelToShow = $(this).attr('rel');

        $('.form-tabs__container.active')

  })

  

  
  
  $('.form-tabs__container.is-active').slideUp(300, function() {
    $(this).removeClass('is-active');

    $('#' +panelToShow).slideDown(300, function() {
      $(this).addClass('is-active');
    })
  })
  // $('.form-tabs__nav-item').not(this).removeClass('active');
  // $('.form-tabs__container').toggleClass('is-active');
  // $('.form-tabs__container').not(this).removeClass('is-active');
});
});