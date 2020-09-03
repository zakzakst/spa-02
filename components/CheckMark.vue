<template>
  <div>
    <svg ref="checkMark" class="check-mark" viewBox="0 0 200 200">
      <path ref="checkMarkCircle" class="check-mark__circle" d="M 100 5 c 52.4 0 95 42.6 95 95 c 0 52.4 -42.6 95 -95 95 c -52.4 0 -95 -42.6 -95 -95 c 0 -52.4 42.6 -95 95 -95 Z" />
      <path class="check-mark__line-long" d="M 75 140 l 75 -75" />
      <path class="check-mark__line-short" d="M 45 110 l 30 30" />
    </svg>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      svg: null,
      circle: null,
      lineShort: null,
      lineLong: null,
      circleColor: '#333',
      lineShortColor: '#333',
      lineLongColor: '#666',
      circleLoadingSpeed: 600,
      loaded: false,
    }
  },
  methods: {
    animCheckMark() {
      const tl = gsap.timeline();
      tl.to('.check-mark', {
        onStart: () => {
          this.animCircle();
        }
      }).to('.check-mark', {
        onStart: () => {
          this.animLine();
        }
      }, this.circleLoadingSpeed / 1000);
    },
    animLoading() {
      const strokeLength = this.circle.getTotalLength();
      this.circle.attr({
        strokeDashoffset: strokeLength * 3,
      });
      this.circle.animate({
        strokeDashoffset: strokeLength * 2,
      }, this.circleLoadingSpeed, mina.easeinout, () => {
        this.circle.animate({
          strokeDashoffset: strokeLength,
        }, this.circleLoadingSpeed, mina.easeinout, () => {
          if(this.loaded) {
            this.animCheckMark();
          } else {
            this.animLoading();
          }
        });
      });
    },
    animCircle() {
      this.circle.animate({
        strokeDashoffset: 0,
      }, this.circleLoadingSpeed, mina.easeinout);
    },
    animLine() {
      this.lineShort.animate({
        strokeDashoffset: 0,
      }, 100, mina.linear, () => {
        this.lineLong.animate({
          strokeDashoffset: 0,
        }, 200, mina.easeout);
      });
    },
    strokeInit(el, color) {
      const strokeLength = el.getTotalLength();
      el.attr({
        stroke: color,
        strokeDasharray: `${strokeLength} ${strokeLength}`,
        strokeDashoffset: strokeLength,
      });
    },
    loadDone() {
      this.loaded = true;
    },
  },
  mounted() {
    // 要素の設定
    this.svg = Snap(this.$refs.checkMark);
    this.circle = this.svg.select('.check-mark__circle');
    this.lineShort = this.svg.select('.check-mark__line-short');
    this.lineLong = this.svg.select('.check-mark__line-long');
    // スタイルの初期化
    this.strokeInit(this.circle, this.circleColor);
    this.strokeInit(this.lineShort, this.lineShortColor);
    this.strokeInit(this.lineLong, this.lineLongColor);
  }
}
</script>

<style lang="scss">
.check-mark {
  fill: none;
  stroke-linecap: round;
}
.check-mark__circle {
  stroke-width: 5px;
}
.check-mark__line-short {
  stroke-width: 30px;
}
.check-mark__line-long {
  stroke-width: 30px;
}
</style>
