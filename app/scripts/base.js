import './jqueryLoad'
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
        return $(this.element).data('offset') || Math.ceil(this.context.element.innerHeight * 0.85)
      }
    })
})
