"use strict";

// $(document).ready(function () {
  /* ---- For auto change Date ---- */
  var date = new Date;
  $("#data_year").text(date.getFullYear());
  var isMobail = window.matchMedia("only screen and (max-width: 414px)");

  var clearControllers = () => {
    controlMain.destroy();
  };

  var animateMain = () => {
    controlMain = new ScrollMagic.Controller();

    var tween1 = TweenMax.staggerFromTo(".test-content", 1,
        { position: 'relative', top: 500 },
        { position: 'fixed', top: 100 },
        0.15);
    var firstScena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 10, offset: 1
    }).setTween(tween1)
    .addIndicators({name: "test-content"});

    controlMain.addScene([
      firstScena
    ]);
  }

  // ---- Beginning Parallax animation for first loading -------
  if (isMobail.matches) {
    console.log('mobile');
    animateMain();
  } else {
    console.log('desctop');
    animateMain();
  }
// })