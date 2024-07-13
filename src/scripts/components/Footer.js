/* ------------------------------------------------------------------------------
@name: Footer
@description: Js Footer
--------------------------------------------------------------------------------- */
const Footer = (() => {
  // - handleAccordionFooter
  // const handleAccordionFooter = () => {
  //   $(".js-footer-accordion .footer__nav__title").on("click", function (e) {
  //     e.stopPropagation();
  //     if ($(window).width() <= 575.86) {
  //       const _this = $(this);
  //       const _navWrapper = _this.parents(".footer__nav");
  //       const _navSibling = _navWrapper.siblings(".footer__nav");

  //       // Menutup semua sibling yang sedang terbuka
  //       if (_navSibling.hasClass("footer__nav--active")) {
  //         _navSibling.removeClass("footer__nav--active");
  //         _navSibling.find(".footer__nav__list").slideUp(300);
  //         _navSibling.find(".footer__nav__title").removeClass("active");
  //       }

  //       // Membuka atau menutup elemen yang diklik
  //       if (_navWrapper.hasClass("footer__nav--active")) {
  //         _navWrapper.find(".footer__nav__list").slideUp(300);
  //         _navWrapper.removeClass("footer__nav--active");
  //         _this.removeClass("active");
  //       } else {
  //         _navWrapper.find(".footer__nav__list").slideDown(300);
  //         _navWrapper.addClass("footer__nav--active");
  //         _this.addClass("active");
  //       }
  //     }
  //   });
  // };

  // // - resetAccordionFooter
  // const resetAccordionFooter = () => {
  //   if ($(window).width() > 575.86) {
  //     $(".js-footer-accordion .footer__nav__list").removeAttr("style");
  //     $(".js-footer-accordion .footer__nav").removeClass("footer__nav--active");
  //     $(".js-footer-accordion .footer__nav__title").removeClass("active");
  //   }
  // };

  // - hanlePaddingBottomMain
  const handlePaddingBottomMain = () => {
    if ($(window).width() > 320) {
      const _heightFooter = $(".footer").innerHeight();
      $(".js-main-site").css("padding-bottom", `${_heightFooter}px`);
    } else {
      $(".js-main-site").removeAttr("style");
    }
  };

  // - init
  const init = () => {
    $(document).ready(() => {
      if ($(".footer").length) {
        // handleAccordionFooter();
        // $(window).on("resize", resetAccordionFooter); // reset accordion saat window diresize
        handlePaddingBottomMain();
      }
    });
  };

  return {
    init,
    // resetAccordionFooter,
    // handleAccordionFooter,
    setPaddingBottomMain: handlePaddingBottomMain,
  };
})();

export default Footer;
