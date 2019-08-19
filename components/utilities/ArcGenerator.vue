<template lang="pug">
  client-only
    .arc-generator(:class="classes" :style="styles")
      v-stage.arc-generator__stage(:config="stageConfig")
        v-layer
          v-rect(:config="rectConfig")
          v-ellipse(:config="ellipseConfig")
</template>

<script>
export default {
  name: 'ArcGenerator',

  props: {
    rotate: {
      type: Boolean,
      required: false,
      default: false,
    },
    position: {
      type: String,
      required: false,
      default: 'bottom',
      validator: p => ((p === 'top') || (p === 'bottom')),
    },
    bgFill: {
      type: String,
      required: false,
      default: '#fff',
    },
    fill: {
      type: String,
      required: false,
      default: '#422d96',
    },
  },

  data: () => ({
    stageConfig: {
      width: 0,
      height: 0,
    },
    ellipseConfig: {
      x: 0,
      y: 0,
      radiusX: 0,
      radiusY: 0,
      fill: 'red',
    },
    rectConfig: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      fill: 'black',
    },
    init: null,
    resizeListener: null,
  }),

  computed: {
    classes () {
      return {
        'arc-generator--rotated': this.rotate,
      }
    },
    styles () {
      return {
        bottom: (this.position === 'bottom') ? `-${this.stageConfig.height}px` : 'auto',
        top: (this.position === 'top') ? `-${this.stageConfig.height}px` : 'auto',
      }
    },
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.resizeListener)
  },

  mounted () {
    if (process.client) {
      this.init = () => {
        const pageWidth = document.body.clientWidth + 100
        const mobileSize = (pageWidth < 1366) ? 100 : 200
        this.stageConfig = {
          width: pageWidth,
          height: mobileSize,
        }
        this.rectConfig = {
          x: 0,
          y: 0,
          width: pageWidth,
          height: mobileSize,
          fill: this.bgFill,
        }
        this.ellipseConfig = {
          x: ((pageWidth / 2) - 50),
          y: this.rotate ? mobileSize : 0,
          radiusX: (pageWidth / 2),
          radiusY: mobileSize,
          fill: this.fill,
        }
      }
      this.init()
      this.resizeListener = () => this.init()
      window.addEventListener('resize', this.resizeListener)
    }
  },
}
</script>

<style lang="stylus" scoped>
.arc-generator
  position: absolute
  left: 0
  right: 0
  z-index: -1
  overflow: hidden
</style>
