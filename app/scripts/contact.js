import './base'
import 'jquery-validation'

$(document).ready(() => {
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
})
