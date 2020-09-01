<template>
  <div class="ripple-img"
    @mouseenter="showPointer($event)"
    @mouseleave="hidePointer($event)"
    @mousemove="animPointer($event)"
    @click.prevent="animRipple"
  >
    <div class="ripple-img__img">
      <img src="https://picsum.photos/id/237/600/600" alt="">
    </div>
    <div class="ripple-img__ripple"></div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      pointerFlg: false,
      pointerParentEl: null,
      pointerEl: null,
      delay: 10,
    }
  },
  methods: {
    showPointer(e) {
      // ポインター要素を設定
      this.pointerParentEl = e.target;
      this.pointerEl = e.target.querySelector('.ripple-img__ripple');
      // ポインター表示位置を設定
      const posX = e.pageX - this.pointerParentEl.offsetLeft;
      const posY = e.pageY - this.pointerParentEl.offsetTop;
      gsap.set(this.pointerEl, {
        top: posY,
        left: posX,
      });
      // ポインターを表示
      this.pointerParentEl.classList.add('is-hover');
      this.pointerFlg = true;
    },
    hidePointer(e) {
      // ポインターを非表示
      const el = e.target;
      el.classList.remove('is-hover');
      this.pointerFlg = false;
    },
    animPointer(e) {
      if(this.pointerFlg) {
        // ポインター表示位置を変更
        const posX = e.pageX - this.pointerParentEl.offsetLeft;
        const posY = e.pageY - this.pointerParentEl.offsetTop;
        gsap.to(this.pointerEl, {
          delay: .02,
          top: posY,
          left: posX,
        });
      }
    },
    animRipple() {
      this.pointerFlg = false;
      const tl = gsap.timeline();
      tl.to(this.pointerEl, {
        opacity: 0,
        scale: 20,
      }).set(this.pointerEl, {
        clearProps: 'all',
      });
    },
  },
}
</script>

<style lang="scss">
.ripple-img {
  position: relative;
  overflow: hidden;
}
.ripple-img__img {
  & > img {
    width: 100%;
  }
}
.ripple-img__ripple {
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  background: $color-primary-light;
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity .3s;
}

// 画像ホバー時のスタイル
.ripple-img.is-hover {
  .ripple-img__ripple {
    opacity: .5;
  }
}
</style>
