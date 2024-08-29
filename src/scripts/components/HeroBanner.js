const HeroBanner = (() => {
  const handleRunCarousel = () => {
    const _selector = $(".js-hero-banner");
    const _itemLength = $(".js-hero-banner .hero-banner__item").length;

    // Destroy carousel
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // Run
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
      });

      $(".play").on("click", () => {
        _selector.trigger("play.owl.autoplay", [4000]);
        $(".play").css("display", "none");
        $(".stop").css("display", "block");
      });

      $(".stop").on("click", () => {
        _selector.trigger("stop.owl.autoplay");
        $(".stop").css("display", "none");
        $(".play").css("display", "block");
      });
    } else {
      _selector.addClass("hero-banner--single-show");
      $(".play, .stop").css("display", "none");
    }
  };

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
