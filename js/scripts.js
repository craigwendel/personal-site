$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('#scroll').fadeIn()
    } else {
      $('#scroll').fadeOut()
    }
  })
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 900)
    return false
  })
})

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault()
      var hash = this.hash
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        window.location.hash = hash
      })
    }
  })
})
