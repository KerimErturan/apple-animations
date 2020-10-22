"use strict";

// $(document).ready(function () {
  /* ---- For auto change Date ---- */
  var date = new Date;
  $("#data_year").text(date.getFullYear());
  var isMobail = window.matchMedia("only screen and (max-width: 414px)");

  var clearControllers = () => {
    controlMain.destroy();
  };
  var getSize = () => {
    windowHight = $(window).height();
    windowWidth = $(window).width();
    iPhonHeight = $('#iphone').innerHeight();
    sectFirst = $('.first-sect').innerHeight();
    console.log('sectFirst=',sectFirst);
  }

  var animateMain = () => {
    controlMain = new ScrollMagic.Controller();

    var tweenMainText = TweenMax.staggerFromTo(".animate-sect__hed ", 1,
        {  top: sectFirst  },
        {  top: 100 },
        0.15);
    var textMainScena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger",
        duration: sectFirst,
        offset: -100,
        ease: 'none'
    }).setTween(tweenMainText)
    // .addIndicators({name: "text"});

    var tweenColorText = TweenMax.staggerFromTo(".animate-sect__hed__h2", 1,
        {  color: 'white'  },
        {  color: 'black' },
        0.15);
    var textColorScena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 300, offset: sectFirst/2
    }).setTween(tweenColorText)
    // .addIndicators({name: "textColor"});

    // --- iPhon --------------

    var tweenBack = TweenMax.staggerFromTo(".animate-sect__iphon", 1,
        { top: windowHight },
        { top: -(iPhonHeight+20) },
        0.15);
    var backScena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger",
        duration      : (windowHight + 2 * iPhonHeight),
        offset        : -100,
        ease: 'none'
    }).setTween(tweenBack)
    // .addIndicators({name: "iPhone"});

    // --- Block animation --------------

    var tweenBlock01 = TweenMax.staggerFromTo(".block-01", 1,
        { width: 500, height: 200, marginLeft: -75 },
        { width: 300, height: 120, marginLeft: 25 },
        0.15);
    var block01_Scena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 200
    }).setTween(tweenBlock01)
    // .addIndicators({name: "block_01_Scena"});

    var tweenBlock02 = TweenMax.staggerFromTo(".block-02", 1,
        { width: 500, height: 200, marginLeft: -75, marginTop: 375 },
        { width: 300, height: 120, marginLeft: 25, marginTop: 325  },
        0.15);
    var block02_Scena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+200
    }).setTween(tweenBlock02)
    // .addIndicators({name: "block_02_Scena"});

    var tweenBlock03 = TweenMax.staggerFromTo(".block-03", 1,
        { width: 500, height: 200, marginLeft: -75, marginTop: 550 },
        { width: 300, height: 120, marginLeft: 25, marginTop: 450  },
        0.15);
    var block03_Scena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+200+50
    }).setTween(tweenBlock03)
    // .addIndicators({name: "block_03_Scena"});

    var tweenBlock04 = TweenMax.staggerFromTo(".block-04", 1,
        { width: 500, height: 200, marginLeft: -75, marginTop: 700 },
        { width: 300, height: 120, marginLeft: 25, marginTop: 575  },
        0.15);
    var block04_Scena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+200+100
    }).setTween(tweenBlock04)
    // .addIndicators({name: "block_04_Scena"});

    // --- Text animation --------------

    var textAnim01 = TweenMax.staggerFromTo(".text-anim-01", 1,
        { fontSize: 30 },
        { fontSize: 14 },
        0.15);
    var text_Scena01 = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 200
    }).setTween(textAnim01)

    var textAnim02 = TweenMax.staggerFromTo(".text-anim-02", 1,
        { fontSize: 30 },
        { fontSize: 14 },
        0.15);
    var text_Scena02 = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+200
    }).setTween(textAnim02)

    var textAnim03 = TweenMax.staggerFromTo(".text-anim-03", 1,
        { fontSize: 30 },
        { fontSize: 14 },
        0.15);
    var text_Scena03 = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+200+50
    }).setTween(textAnim03)

    var textAnim04 = TweenMax.staggerFromTo(".text-anim-04", 1,
        { fontSize: 30 },
        { fontSize: 14 },
        0.15);
    var text_Scena04 = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: 200, offset: 100+200+100
    }).setTween(textAnim04)

    // ---- End text -------------

    var tweenBackText = TweenMax.staggerFromTo(".animate-sect__text", 1,
        {  top: windowHight  },
        {  top: 0 },
        0.15);
    var backTextScena = new ScrollMagic.Scene({
        triggerElement: "#start_trigger", duration: windowHight*2, offset: windowHight
    }).setTween(tweenBackText)
    // .addIndicators({name: "02"});


    controlMain.addScene([
      backScena, textMainScena, textColorScena,
      block01_Scena, block02_Scena, block03_Scena, block04_Scena,
      text_Scena01, text_Scena02, text_Scena03, text_Scena04,
      backTextScena,
    ]);
  }

  // ---- Beginning Parallax animation for first loading -------
  getSize();

  if (isMobail.matches) {
    console.log('mobile');
    animateMain();
  } else {
    console.log('desctop');
    animateMain();
  }

  // ---- Parallax animation for resize -------
  $(window).resize(() => {
    getSize();
    if (isMobail.matches) {
      animateMain();
    } else {
      animateMain();
    }
  });
// })