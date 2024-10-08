/* ------------------------------------------------------------------------------
@name: Layout Header
@description: Layouting from Header
--------------------------------------------------------------------------------- */

import { Scrolllable } from "utilities";

//Header
const Header = (() => {
  const handleShowNavigation = () => {
    $(".js-burger-menu").on("click", (e) => {
      const $this = $(e.currentTarget);
      handleToggleMenu($this, $this.hasClass("show"));
    });
  };

  const handleCloseEscp = () => {
    $(document).on("keyup", (e) => {
      if (e.which === 27) {
        // ESC key
        if ($(".js-burger-menu").hasClass("show")) {
          handleToggleMenu($(".js-burger-menu"), true);
        }

        if ($(".js-dropdown").hasClass("selected")) {
          $(".js-dropdown").removeClass("selected");
          $(".header__nav__dropdown").slideUp(100);
        }

        if ($(".js-search-input").hasClass("active")) {
          $(".js-search-input").removeClass("active");
          $(".js-search-input input").val("");
        }

        if ($("body").hasClass("close-input")) {
          $("body").removeClass("close-input");
        }
      }
    });
  };

  const handleToggleMenu = (selector, status) => {
    if (status) {
      $("body").removeClass("show-menu");
      selector.removeClass("show");
      $(".header__nav__item--active .header__nav__items").slideUp(200);
      $(".header__nav__item").removeClass("header__nav__item--active");
      $(".header__nav__title").removeClass("active");
      Scrolllable.enable();
    } else {
      $("body").addClass("show-menu");
      selector.addClass("show");
      $(".header__nav__dropdown").show();
      Scrolllable.disable();
    }
  };

  const handleHideMenu = () => {
    if ($(window).width() > 992) {
      handleToggleMenu($(".js-burger-menu"), true);
    } else {
      $(".header__nav__dropdown").hide();
    }
  };

  const handleDropdownMenu = () => {
    $(".js-dropdown").on("click", (e) => {
      if (window.innerWidth > 992) {
        e.stopPropagation();
        const $dropdown = $(e.currentTarget).siblings(".header__nav__dropdown");
        $(e.currentTarget).toggleClass("selected");

        if ($(e.currentTarget).hasClass("selected")) {
          $dropdown.slideDown(100);
        } else {
          $dropdown.slideUp(100);
        }
      }
    });
  };

  const handleSearchInput = () => {
    $(".js-search-box").on("click", (e) => {
      e.stopPropagation();
      closeDropdowns();

      // Tutup navigasi jika sedang terbuka
      if ($(".js-burger-menu").hasClass("show")) {
        handleToggleMenu($(".js-burger-menu"), true);
      }

      // Toggle kelas active pada search box
      $(e.currentTarget).toggleClass("active");
      $(".js-search-input").toggleClass("active");

      if ($(".js-search-input").hasClass("active")) {
        $("body").addClass("close-input");
        $(".js-search-input input").focus();
      } else {
        $("body").removeClass("close-input");
      }
    });

    $(".header__search .header__close-arrow").on("click", (e) => {
      e.preventDefault();
      $(".js-search-input").removeClass("active");
      $(".js-search-input input").val("");
      $("body").removeClass("close-input");
    });
  };

  const handleClickOutside = () => {
    $(document).on("click", (e) => {
      if (window.innerWidth > 992) {
        if (
          !$(e.target).closest(".js-dropdown").length &&
          !$(e.target).closest(".header__nav__dropdown").length
        ) {
          $(".js-dropdown").removeClass("selected");
          $(".header__nav__dropdown").slideUp(100);
        }
      }

      if (
        !$(e.target).closest(".js-search-box").length &&
        !$(e.target).closest(".js-search-input").length
      ) {
        $(".js-search-input").removeClass("active");
      }
    });
  };

  const handleAccordionHeader = () => {
    $(".js-header-accordion .header__nav__title").on("click", (e) => {
      if ($(window).width() <= 992) {
        const _this = $(e.currentTarget);
        const _navItem = _this.parents(".header__nav__item");
        const _itemSibling = _navItem.siblings(".header__nav__item");

        if (_itemSibling.hasClass("header__nav__item--active")) {
          _itemSibling.removeClass("header__nav__item--active");
          _itemSibling.find(".header__nav__items").slideUp(300);
          _itemSibling.find(".header__nav__title").removeClass("active");
        }

        if (_this.hasClass("active")) {
          _navItem.find(".header__nav__items").slideUp(300);
          _navItem.removeClass("header__nav__item--active");
          _this.removeClass("active");
        } else {
          _navItem.find(".header__nav__items").slideDown(300);
          _navItem.addClass("header__nav__item--active");
          _this.addClass("active");
        }
      }
    });
  };

  // Fungsi untuk menutup semua dropdown
  const closeDropdowns = () => {
    $(".js-dropdown").removeClass("selected");
    $(".header__nav__dropdown").slideUp(100);
  };

  const init = () => {
    handleShowNavigation();
    handleCloseEscp();
    handleDropdownMenu();
    handleSearchInput();
    handleClickOutside();
    handleAccordionHeader();
  };

  return {
    init,
    hideMenu: handleHideMenu,
    closeDropdowns,
  };
})();

export default Header;
