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

    var tweenBack = TweenMax.staggerFromTo(".animate-sect__iphon", 1,
        {  top: 700  },
        {  top: 100 },
        0.15);
    var backScena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 500, offset: 100
    }).setTween(tweenBack)
    .addIndicators({name: "01"});

    var tweenBlock01 = TweenMax.staggerFromTo(".block-01", 1,
        { width: 500, height: 200, marginLeft: -75 },
        { width: 300, height: 120, marginLeft: 25 },
        0.15);
    var block01_Scena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+500
    }).setTween(tweenBlock01)
    .addIndicators({name: "block_01_Scena"});

    var textAnim = TweenMax.staggerFromTo(".block__text__anim", 1,
        { fontSize: 30 },
        { fontSize: 14 },
        0.15);
    var text_Scena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+500
    }).setTween(textAnim)
    .addIndicators({name: "block_01_Scena"});
    controlMain.addScene([
      backScena, block01_Scena, text_Scena
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