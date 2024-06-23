/* ------------------------------------------------------------------------------
@name: Layout Header
@description: Layouting from Header
--------------------------------------------------------------------------------- */

//Header
const Header = (() => {
  const handleShowNavigation = () => {
    $(".js-burger-menu").on("click", (e) => {
      const _this = $(e.currentTarget);
      handleToggleMenu(_this, _this.hasClass("show"));
    });
  };

  // - handleCloseNav
  const handleCloseNav = () => {
    $(document).on("keyup", (e) => {
      if (e.which === 27) {
        if ($(".js-burger-menu").hasClass("show")) {
          handleToggleMenu($(".js-burger-menu"), true);
        }
      }
    });
  };

  // - handleToggleMenu
  const handleToggleMenu = (selector, status) => {
    if (status) {
      $("body").removeClass("show-menu");
      selector.removeClass("show");
      Scrolllable.enable();
    } else {
      $("body").addClass("show-menu");
      selector.addClass("show");
      Scrolllable.disable();
    }
  };

  // - handleHideMenu
  const handleHideMenu = () => {
    if ($(window).width() > 992) {
      handleToggleMenu($(".js-burger-menu"), true);
    }
  };
  // handleDropdownMenu
  const handleDropdownMenu = () => {
    $(".js-dropdown").on("click", (e) => {
      if (window.innerWidth > 768) {
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

  // handleSearchInput
  const handleSearchInput = () => {
    $(".js-search-box").on("click", (e) => {
      e.stopPropagation();
      $(e.currentTarget).toggleClass("active");
      $(".js-search-input").toggleClass("active");

      if ($(e.currentTarget).hasClass("active")) {
        $(".js-search-input input").focus();
      }
    });

    $(".header__menu__search .close-input").on("click", (e) => {
      e.preventDefault();
      $(".js-search-input").removeClass("active");
    });
  };

  // menutup dengan handle klik sembarang untuk dropdown dan input
  const handleClickOutside = () => {
    $(document).on("click", (e) => {
      if (window.innerWidth > 768) {
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

  // handleAccodionHeader
  const handleAccordionHeader = () => {
    $(".js-header-accordion .header__nav__title").on("click", (e) => {
      if ($(window).width() <= 768) {
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

  const init = () => {
    handleShowNavigation();
    handleCloseNav();
    handleDropdownMenu();
    handleSearchInput();
    handleClickOutside();
    handleAccordionHeader();
  };

  return {
    init,
    init,
    hideMenu: handleHideMenu,
  };
})();

export default Header;
