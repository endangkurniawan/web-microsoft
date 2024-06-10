/* ------------------------------------------------------------------------------
@name: Layout Header
@description: Layouting from Header
--------------------------------------------------------------------------------- */

//Header
const Header = (() => {
  //handleDropdownMenu
  const handleDropdownMenu = () => {
    $(".js-dropdown").on("click", (e) => {
      e.stopPropagation(); // Prevent the click from propagating to the document
      $(e.currentTarget).toggleClass("selected");
      $(e.currentTarget).siblings(".header__nav__dropdown").toggle(300);
    });
  };

  //handleSearchInput
  const handleSearchInput = () => {
    $(".js-search-box").on("click", (e) => {
      e.stopPropagation(); // Prevent the click from propagating to the document
      $(e.currentTarget).toggleClass("active");
      $(".js-search-input").toggleClass("active");
    });

    $(".header__menu__search .close-input").on("click", (e) => {
      e.preventDefault();
      $(".js-search-input").removeClass("active");
    });
  };

  //handleClickOutside
  const handleClickOutside = () => {
    $(document).on("click", (e) => {
      if (
        !$(e.target).closest(".js-dropdown").length &&
        !$(e.target).closest(".header__nav__dropdown").length
      ) {
        $(".js-dropdown").removeClass("selected");
        $(".header__nav__dropdown").hide(300);
      }

      if (
        !$(e.target).closest(".js-search-box").length &&
        !$(e.target).closest(".js-search-input").length
      ) {
        $(".js-search-input").removeClass("active");
      }
    });
  };

  const init = () => {
    handleDropdownMenu();
    handleSearchInput();
    handleClickOutside();
  };

  return {
    init,
  };
})();

export default Header;
