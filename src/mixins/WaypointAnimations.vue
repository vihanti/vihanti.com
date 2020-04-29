<script>
import $ from 'jquery'
import 'waypoints/lib/jquery.waypoints.js'

function initAnimated() {
  $('.animated')
    .css('opacity', function () {
      let animated = $(this).data('animated')
      if (animated.indexOf('In') !== -1) {
        return 0
      }
    })
    .waypoint(function (direction) {
      let animated = $(this.element).data('animated')
      let animatedReverse = $(this.element).data('animated-reverse')

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
}

export default {
  name: 'WaypointAnimations',
  mounted () {
    initAnimated()
  },
  updated () {
    this.$nextTick(() => {
      initAnimated()
    })
  }
}
</script>