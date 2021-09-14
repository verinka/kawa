$(function() {
  /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
  $('.rs-carousel').each(function() {
    var owlCarousel = $(this),
      loop = owlCarousel.data('loop'),
      items = owlCarousel.data('items'),
      margin = owlCarousel.data('margin'),
      stagePadding = owlCarousel.data('stage-padding'),
      autoplay = owlCarousel.data('autoplay'),
      autoplayTimeout = owlCarousel.data('autoplay-timeout'),
      smartSpeed = owlCarousel.data('smart-speed'),
      dots = owlCarousel.data('dots'),
      nav = owlCarousel.data('nav'),
      navSpeed = owlCarousel.data('nav-speed'),
      xsDevice = owlCarousel.data('mobile-device'),
      xsDeviceNav = owlCarousel.data('mobile-device-nav'),
      xsDeviceDots = owlCarousel.data('mobile-device-dots'),
      smDevice = owlCarousel.data('ipad-device'),
      smDeviceNav = owlCarousel.data('ipad-device-nav'),
      smDeviceDots = owlCarousel.data('ipad-device-dots'),
      mdDevice = owlCarousel.data('md-device'),
      mdDeviceNav = owlCarousel.data('md-device-nav'),
      mdDeviceDots = owlCarousel.data('md-device-dots')
    owlCarousel.owlCarousel({
      loop: loop ? true : false,
      items: items ? items : 5,
      lazyLoad: true,
      margin: margin ? margin : 0,
      //stagePadding: (stagePadding ? stagePadding : 0),
      autoplay: autoplay ? true : false,
      autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
      smartSpeed: smartSpeed ? smartSpeed : 250,
      dots: dots ? true : false,
      nav: nav ? true : false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      navSpeed: navSpeed ? true : false,
      responsiveClass: true,
      responsive: {
        0: {
          items: xsDevice ? xsDevice : 1,
          nav: xsDeviceNav ? true : false,
          dots: xsDeviceDots ? true : false,
          autoplay: false
        },
        768: {
          items: smDevice ? smDevice : 3,
          nav: smDeviceNav ? true : false,
          dots: smDeviceDots ? true : false
        },
        992: {
          items: mdDevice ? mdDevice : 5,
          nav: mdDeviceNav ? true : false,
          dots: mdDeviceDots ? true : false
        }
      }
    })
  })
})

$(function() {
  // magnificPopup init
  var popupquote = $('.popup-quote')
  if (popupquote.length) {
    $('.popup-quote').magnificPopup({
      type: 'image',
      callbacks: {
        beforeOpen: function() {
          this.st.image.markup = this.st.image.markup.replace(
            'mfp-figure',
            'mfp-figure animated zoomInDown'
          )
        }
      },
      disableOn: function() {
        if ($(window).width() < 768) {
          popupquote.click(function(e) {
            e.preventDefault()
          })
          return false
        }
        return true
      },
      // disableOn: 700,
      gallery: {
        enabled: true
      }
    })
  }

  if ($(window).width() < 768) {
    popupquote.click(function(e) {
      e.preventDefault()
    })
  }

  if ($('.arrow-btn a').length) {
    $('.arrow-btn a').on(' click ', function() {
      $('html, body').animate(
        {
          scrollTop: $('#about-section').offset().top
        },
        1000
      )
    })
  }

  // video popup
  var popupyoutube = $('.popup-youtube')
  if (popupyoutube.length) {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    })
  }

  // Counter Up
  var rscounter = $('.rs-counter')
  if (rscounter.length) {
    $('.rs-counter').counterUp({
      delay: 20,
      time: 1500
    })
  }
})

// $(function() {
//   $('.language').click(function() {
//     $('.language__list').slideToggle()
//   })

//   $('.language__item').click(function() {
//     console.log($(this))
//   })
// })

$(function() {
  //Faq tabs

  $('.collapse.show')
    .prev('.card-header')
    .addClass('active')

  $('#accordion')
    .on('show.bs.collapse', function(a) {
      $(a.target)
        .prev('.card-header')
        .addClass('active')
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target)
        .prev('.card-header')
        .removeClass('active')
    })
})

// $(function() {
//   $('.features-service').hover(function() {
//     $('#featureImage').attr('src', $(this).data('img'))
//   })
// })

var win = $(window)
// scrollTop init
$(function() {
  var totop = $('#scrollUp')
  totop.fadeOut()
  win.on('scroll', function() {
    if (win.scrollTop() > 200) {
      totop.fadeIn()
    } else {
      totop.fadeOut()
    }
  })
  totop.on('click', function() {
    $('html,body').animate(
      {
        scrollTop: 0
      },
      500
    )
  })
})

function preloadImages() {
  for (var i = 0; i < arguments.length; i++)
    $('<img />').attr('src', arguments[i])
}

$(function() {
  //preload images
  // $('.features-service').each(function() {
  //   preloadImages($(this).data('img'))
  //   preloadImages($(this).data('img-webp'))
  // })

  //mobile menu
  $('#openMenu').click(function() {
    $('.sidebar').toggleClass('active')
    this.classList.toggle('is-active')
    $('.overlay-mobile').show()
  })

  $('.overlay-mobile').click(function() {
    $('.sidebar').toggleClass('active')
    $('.overlay-mobile').hide()
    $('#openMenu').removeClass('is-active')
  })
})

$(function() {
  $('.lazy').lazy()
})

$(function() {
  Modernizr.on('webp', function(result) {
    if (result) {
      $('.features-service').each(function() {
        preloadImages($(this).data('img-webp'))
      })
      $('.features-service').hover(function() {
        $('#featureImageWebp').attr('srcset', $(this).data('img-webp'))
      })
    } else {
      $('.features-service').each(function() {
        preloadImages($(this).data('img'))
      })
      $('.features-service').hover(function() {
        $('#featureImage').attr('src', $(this).data('img'))
      })
    }
  })
})

$(function() {
  // Bind the swipeleftHandler callback function to the swipe event on div.box
  $('.sidebar, .overlay-mobile').on('swipeleft', swipeleftHandler)

  $('body').on('swiperight', swiperightHandler)

  // Callback function references the event target and adds the 'swipeleft' class to it
  function swipeleftHandler(e) {
    e.preventDefault()
    $('.sidebar').toggleClass('active')
    $('.overlay-mobile').hide()
    $('#openMenu').removeClass('is-active')
  }

  function swiperightHandler(e) {
    e.preventDefault()
    if (
      $(window).width() < 768 &&
      !$(e.target).parents('#gallery-section').length
    ) {
      $('.sidebar').toggleClass('active')
      $('#openMenu').addClass('is-active')
      $('.overlay-mobile').show()
    }
  }
})
