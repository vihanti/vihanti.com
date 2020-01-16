import $ from 'jquery'
window.$ = $
window.jQuery = $

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
})
