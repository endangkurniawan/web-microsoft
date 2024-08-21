/* ------------------------------------------------------------------------------
@name: Hero banner
@description: Hero banner
--------------------------------------------------------------------------------- */

const HeroBanner = (() => {
  // - handleHeroBanner
  const handleRunCarousel = () => {
    const _selector = $(".js-hero-banner");
    const _itemLength = $(".js-hero-banner .hero-banner__item").length;
    //destroy carosuel
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // run
    if (_itemLength > 1) {
      _selector.addClass("owl-carousel").owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        // autoHeight: true,
        // animateOut: "fadeIn",
      });
      $(".play").on("click", function () {
        _selector.trigger("play.owl.autoplay", [4000]);
        $(".play").css("display", "none");
        $(".stop").css("display", "block");
      });
      $(".stop").on("click", function () {
        _selector.trigger("stop.owl.autoplay");
        $(".stop").css("display", "none");
        $(".play").css("display", "block");
      });
    } else {
      _selector.addClass("hero-banner--single-show");
      $(".play, .stop").css("display", "none");
    }
  };

  // - init
  const init = () => {
    if ($(".js-hero-banner").length) {
      handleRunCarousel();
    }
  };

  return {
    init,
  };
})();

export default HeroBanner;
