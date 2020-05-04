<script>
import 'waypoints/lib/noframework.waypoints.js'

let waypoints = []

function updateAnimated() {
  if (waypoints) {
    waypoints.forEach((waypoint) => waypoint.destroy())
    waypoints = []
  }

  let elements = document.getElementsByClassName('animated')
  waypoints = Array.prototype.map.call(elements, (element) => {
    if (element.dataset.animated.indexOf('In') !== -1) {
      element.style.opacity = 0
    }

    return new Waypoint({
      element: element,
      handler: function (direction) {
        let animated = element.dataset.animated
        let animatedReverse = element.dataset.animatedReverse

        if (direction === 'down') {
          this.element.classList.remove(animatedReverse)
          this.element.classList.add(animated)
        } else if (direction === 'up' && animatedReverse) {
          this.element.classList.remove(animated)
          this.element.classList.add(animatedReverse)
        }
      },
      offset: function () {
        return this.element.dataset.offset || Math.ceil(this.context.element.innerHeight * 0.9)
      }
    })
  })
}

export default {
  name: 'WaypointAnimations',
  mounted () {
    updateAnimated()
  },
  updated () {
    this.$nextTick(() => {
      updateAnimated()
    })
  }
}
</script>