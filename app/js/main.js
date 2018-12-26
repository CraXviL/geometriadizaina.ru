$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    items: 5,
    margin: 20,
  });

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 300,
    zoom: {
      enabled: true,
      duration: 300, // продолжительность анимации. Не меняйте данный параметр также и в CSS
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
  // делаем плавную прокрутку по якорям
  const HEIGHT1 = parseInt($('#block-main').css('height'), 10);
  const HEIGHT2 = parseInt($('#block-portfolio').css('height'), 10);
  const HEIGHT3 = parseInt($('#block-price').css('height'), 10);

  $('#menu-portfolio').click(() => {
    $('html').animate({ scrollTop: HEIGHT1 });
    window.location = '#block-portfolio';
  });

  $('#menu-price').click(() => {
    $('html').animate({ scrollTop: HEIGHT1 + HEIGHT2 });
    window.location = '#block-price';
  });

  $('#menu-contact').click(() => {
    $('html').animate({ scrollTop: HEIGHT1 + HEIGHT2 + HEIGHT3 });
    window.location = '#block-order';
  });

  $('input[type="tel"]').on('input', (e) => {
    if (!/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/.test(e.target.value.trim())) {
      $('input[type="tel"]').css({ border: '3px solid red' });
    } else {
      $('input[type="tel"]').css({ border: '3px solid white', 'border-bottom': '1px solid black' });
    }
  });

  $('input[type="email"]').on('input', (e) => {
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.target.value.trim())) {
      $('input[type="email"]').css('border', '3px solid red');
    } else {
      $('input[type="email"]').css({ border: '3px solid white', 'border-bottom': '1px solid black' });
    }
  });

  $('form').submit((e) => {
    e.preventDefault();
    $.ajax({
      url: 'sendmail.php',
      type: 'POST',
      data: $('form').serialize(),
      success: function () {
          console.log('Успешно');
      },
      error: function () {
          console.log('возникла ошибка');
      }
    });
    $('form').html('<h2>Заявка отправлена</h2><p>Мы с Вами обязательно свяжемся</p>');
  });

  // $('#block-portfolio > div').click((e) => {
  //   if (e.target.id === "oldGalleryButton") {
  //     $('#oldGallery').removeClass('hidden');
  //     $('#newGallery').addClass('hidden');
  //     $('#oldGalleryButton').addClass('active');
  //    $('#newGalleryButton').removeClass('active');
  //   } else {
  //     $('#newGallery').removeClass('hidden');
  //     $('#oldGallery').addClass('hidden');
  //     $('#newGalleryButton').addClass('active');
  //     $('#oldGalleryButton').removeClass('active');
  //   }
  // })
});
