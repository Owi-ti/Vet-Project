(function ($) {
  ("use-strict");
  $(document).on("ready", function () {
    // MENU JS
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".main-menu-area-two, .main-menu-area").addClass("menu-shrink");
      } else {
        $(".main-menu-area-two, .main-menu-area").removeClass("menu-shrink");
      }
    });
    // Default Slider
    var swiper1 = new Swiper(".swiper1", {
      pagination: ".swiper-pagination1",
      paginationClickable: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      spaceBetween: 0,
      effect: "coverflow",
      speed: 700,
      loop: true,
    });
  });
})(jQuery);
