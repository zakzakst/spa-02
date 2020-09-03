<template>
  <div class="favorite-heart__wrapper">
    <svg ref="favoriteHeart" class="favorite-heart" :class="{'is-active': isActive}" viewBox="0 0 36 36" @click="toggleFavorite">
      <g class="favorite-heart__circles">
        <path class="favorite-heart__circle" d="M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z" />
        <path class="favorite-heart__circle" d="M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z" />
        <path class="favorite-heart__circle" d="M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z" />
        <path class="favorite-heart__circle" d="M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z" />
        <path class="favorite-heart__circle" d="M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z" />
      </g>
      <path class="favorite-heart__heart" d="M24,12.178c-3.313,0 -6,2.687 -6,6.001c0,-3.314 -2.687,-6.001 -6,-6.001c-3.313,0 -6,2.687 -6,6.001c0,3.116 1.468,9.065 10.245,12.948c0.555,0.246 1.674,0.679 1.674,0.679c0.025,0.01 0.053,0.016 0.081,0.016c0.028,0 0.056,-0.006 0.081,-0.016c0,0 1.119,-0.433 1.674,-0.679c8.777,-3.883 10.245,-9.832 10.245,-12.948c0,-3.314 -2.687,-6.001 -6,-6.001Z" />
    </svg>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  // props: ['isActive'],
  data() {
    return {
      isActive: false,
      svg: null,
      heart: null,
      circles: null,
      heartPath: {
        base: 'M24,12.178c-3.313,0 -6,2.687 -6,6.001c0,-3.314 -2.687,-6.001 -6,-6.001c-3.313,0 -6,2.687 -6,6.001c0,3.116 1.468,9.065 10.245,12.948c0.555,0.246 1.674,0.679 1.674,0.679c0.025,0.01 0.053,0.016 0.081,0.016c0.028,0 0.056,-0.006 0.081,-0.016c0,0 1.119,-0.433 1.674,-0.679c8.777,-3.883 10.245,-9.832 10.245,-12.948c0,-3.314 -2.687,-6.001 -6,-6.001Z',
        anim: 'M25,10.541c-3.866,0 -7,3.135 -7,7.001c0,-3.866 -3.134,-7.001 -7,-7.001c-3.866,0 -7,3.135 -7,7.001c0,3.636 1.712,10.576 11.953,15.107c0.647,0.287 1.952,0.791 1.952,0.791c0.03,0.012 0.063,0.019 0.095,0.019c0.032,0 0.065,-0.007 0.095,-0.019c0,0 1.305,-0.504 1.952,-0.791c10.241,-4.531 11.953,-11.471 11.953,-15.107c0,-3.866 -3.134,-7.001 -7,-7.001Z'
      },
      circlesPath: [
        {
          base: 'M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z',
          anim: 'M3,12c1.103,0 2,0.897 2,2c0,1.104 -0.897,2 -2,2c-1.103,0 -2,-0.896 -2,-2c0,-1.103 0.897,-2 2,-2Z',
        },
        {
          base: 'M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z',
          anim: 'M8,4c1.103,0 2,0.897 2,2c0,1.103 -0.897,2 -2,2c-1.103,0 -2,-0.897 -2,-2c0,-1.103 0.897,-2 2,-2Z',
        },
        {
          base: 'M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z',
          anim: 'M18,1c1.103,0 2,0.897 2,2c0,1.103 -0.897,2 -2,2c-1.103,0 -2,-0.897 -2,-2c0,-1.103 0.897,-2 2,-2Z',
        },
        {
          base: 'M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z',
          anim: 'M27,4c1.103,0 2,0.897 2,2c0,1.103 -0.897,2 -2,2c-1.103,0 -2,-0.897 -2,-2c0,-1.103 0.897,-2 2,-2Z',
        },
        {
          base: 'M18,21c0.552,0 1,0.449 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.551 0.448,-1 1,-1Z',
          anim: 'M33,12c1.103,0 2,0.897 2,2c0,1.104 -0.897,2 -2,2c-1.103,0 -2,-0.896 -2,-2c0,-1.103 0.897,-2 2,-2Z',
        },
      ],
    }
  },
  methods: {
    toggleFavorite() {
      if(this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
        this.animHeart();
        this.animCircles();
      }
    },
    animHeart() {
      this.heart.animate({
        d: this.heartPath.anim,
      }, 150, mina.easein, () => {
        this.heart.animate({
          d: this.heartPath.base,
        }, 200, mina.backout);
      });
    },
    animCircles() {
      for(let i = 0; i < this.circles.length; i++) {
        const circle = this.circles[i];
        circle.attr({
          fillOpacity: 1,
        });
        circle.animate({
          d: this.circlesPath[i].anim,
        }, 300, mina.easeout, () => {
          circle.attr({
            fillOpacity: null,
          });
        });
        setTimeout(() => {
          circle.animate({
            d: this.circlesPath[i].base,
          }, 0);
        }, 300);
      }
    },
  },
  mounted() {
    // 要素の設定
    this.svg = Snap(this.$refs.favoriteHeart);
    this.heart = this.svg.select('.favorite-heart__heart');
    this.circles = this.svg.selectAll('.favorite-heart__circle');
  },
}
</script>

<style lang="scss">
.favorite-heart__wrapper {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.favorite-heart {
  position: absolute;
  bottom: -2px;
  left: -6px;
  width: 36px;
  height: 36px;
}
.favorite-heart__heart {
  fill: #888;
  transition: fill .2s;
}
.favorite-heart__circles {
  fill: #f6a;
  fill-opacity: 0;
  transition: fill-opacity .2s;
}

// アクティブ時のスタイル
.favorite-heart.is-active {
  .favorite-heart__heart {
    fill: #f6a;
  }
}
</style>
