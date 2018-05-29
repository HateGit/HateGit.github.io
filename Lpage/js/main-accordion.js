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

  $('.form-tabs__nav-item').click(function() {
  $(this).addClass('active');
  $('.form-tabs__nav-item').not(this).removeClass('active');
  $('.form-tabs__container').toggleClass('is-active');
  // $('.form-tabs__container').not(this).removeClass('is-active');
});
});