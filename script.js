$(function() {
  $(".toggles button").click(function() {
    var get_id = this.id;
    var get_current = $(".posts ." + get_id);

    $(".post")
      .not(get_current)
      .hide(1000);
    get_current.show(1000);
  });

  $("#showall").click(function() {
    $(".post").show(1000);
  });
});
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 8
  });
});
$(document).ready(function() {
  const brandSlider = $("#brand-slider");
  brandSlider.owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        margin: 5
      },
      300: {
        items: 2,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        margin: 5
      },
      420: {
        items: 4,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        margin: 10
      },
      720: {
        items: 6,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        margin: 15
      },
      1100: {
        items: 8,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        margin: 25
      }
    }
  });
});
