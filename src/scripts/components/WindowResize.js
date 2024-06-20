import Footer from "./Footer";

const WindowResize = (() => {
  let _timeout = false,
    _delta = 100,
    _rtime;

  // - handleWindowResize
  const handleWindowResize = () => {
    $(window).on("resize", () => {
      _rtime = new Date();
      if (_timeout === false) {
        _timeout = true;
        $("body").addClass("hold-transition");
        setTimeout(handleWindowResizeEnd, _delta);
      }
    });
  };

  const handleWindowResizeEnd = () => {
    if (new Date() - _rtime < _delta) {
      setTimeout(handleWindowResizeEnd, _delta);
    } else {
      _timeout = false;
      $("body").removeClass("hold-transition");
      Footer.resetAccordionFooter();
      Footer.handleAccordionFooter();
    }
  };

  // - init
  const init = () => {
    handleWindowResize();
  };

  return {
    init,
  };
})();

export default WindowResize;
