$(document).ready(function () {

  var owlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 5,
    margin: 20
  };
  var $owl = $('.owl-carousel').owlCarousel(owlOptions);
  $owl.on('resized.owl.carousel', owlCarouselResize);

  function owlCarouselResize() {
    if (window.innerWidth > 1100) {
      owlOptions.items = 5;
    } else if (800 < window.innerWidth <= 1100) {
      owlOptions.items = 3;
    } else {
      owlOptions.items = 1;
    }
    owlCarouselRefresh($owl);
  }

  function owlCarouselRefresh(target) {
    target.trigger('destroy.owl.carousel');
    target.html(target.find('.owl-stage-outer').html()).removeClass('owl-loaded');
    target.owlCarousel(owlOptions);
  }

  owlCarouselResize();

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 300,
    zoom: {
      enabled: true,
      duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
  });
  // делаем плавную прокрутку по якорям
  var HEIGHT1 = parseInt($('#block-main').css('height'), 10);
  var HEIGHT2 = parseInt($('#block-portfolio').css('height'), 10);
  var HEIGHT3 = parseInt($('#block-price').css('height'), 10);
  $('#menu-portfolio').click(function () {
    $('html').animate({ scrollTop: HEIGHT1 });
    window.location = '#block-portfolio';
  });
  $('#menu-price').click(function () {
    $('html').animate({ scrollTop: HEIGHT1 + HEIGHT2 });
    window.location = '#block-price';
  });
  $('#menu-contact').click(function () {
    $('html').animate({ scrollTop: HEIGHT1 + HEIGHT2 + HEIGHT3 });
    window.location = '#block-order';
  });

  $('input[name="name"]').on('input', function (e) {
    validate(e, /^[ а-яё]+$/gi);
  });
  $('input[name="phone"]').on('input', function (e) {
    validate(e, /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/);
  });
  $('input[name="email"]').on('input', function (e) {
    validate(e, /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);
  });

  function validate(e, regExp) {
    if (!regExp.test(e.target.value.trim())) {
      $(e.target).addClass('error');
    } else {
      $(e.target).removeClass('error');
    }
  }

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: 'sendmail.php',
      type: 'POST',
      data: $('form').serialize(),
      success: function success() {
        console.log('Запрос отправлен');
      },
      error: function error() {
        console.log('Возникла ошибка при отправке');
      }
    });
    $('form').fadeOut();
    $('form').html('<h2>Заявка отправлена</h2><p>Мы с Вами обязательно свяжемся</p>');
    $('form').fadeIn();
  });
});