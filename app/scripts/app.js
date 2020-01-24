import './jqueryLoad'
import 'jquery-validation'
import 'slick-carousel'
import 'waypoints/lib/jquery.waypoints.js'

$(document).ready(() => {
  // Initialize cookie consent.
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#252e39'
      },
      button: {
        background: '#14a7d0'
      }
    },
    theme: 'edgeless'
  })

  // Handle clicking navbar burger icon.
  $('.navbar-burger').click(() => {
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  })

  // Initialize animations.
  $('.animated')
    .waypoint(function (direction) {
      const animated = $(this.element).data('animated')
      const animatedReverse = $(this.element).data('animated-reverse')

      if (direction === 'down') {
        $(this.element).removeClass(animatedReverse).addClass(animated)
      } else if (direction === 'up' && animatedReverse) {
        $(this.element).removeClass(animated).addClass(animatedReverse)
      }
    }, {
      offset: function () {
        return $(this.element).data('offset') || Math.ceil(this.context.element.innerHeight * 0.9)
      }
    })

  // Initalize slick carousels.
  $('.slick').slick({
    autoplay: true
  })

  // Handle form validations.
  $('form').validate({
    errorClass: 'is-danger',
    validClass: 'is-success',
    highlight: (element, errorClass, validClass) => {
      $(element).addClass(errorClass).removeClass(validClass)
      $(element).siblings('.icon.is-right.' + errorClass).removeClass('is-hidden')
      $(element).siblings('.icon.is-right.' + validClass).addClass('is-hidden')
    },
    unhighlight: (element, errorClass, validClass) => {
      $(element).removeClass(errorClass).addClass(validClass)
      $(element).siblings('.icon.is-right.' + errorClass).addClass('is-hidden')
      $(element).siblings('.icon.is-right.' + validClass).removeClass('is-hidden')
    },
    errorPlacement: (error, element) => {
      error.appendTo(element.parent())
    }
  })

  // Initialize particles.
  window.particlesJS.load('particles', 'assets/particles.json')
})
