<template>
  <div ref="toastBottom" class="toast-bottom">
    <div class="toast-bottom__content">
      <p class="toast-bottom__content-text">{{ toastText }}</p>
      <button class="toast-bottom__content-close" @click="hideToast">
        <fa :icon="['fas', 'times']" />
      </button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      isActive: false,
      toastText: '',
      showTime: 2000,
    }
  },
  methods: {
    showToast(text) {
      // トーストが表示されている場合は何もしない
      if(this.isActive) return;
      this.isActive = true;
      this.toastText = text;
      const el = this.$refs.toastBottom;
      const tl = gsap.timeline();
      tl.set(el, {
        display: 'block',
      })
      .to(el, {
        duration: .3,
        ease: 'back.out(3)',
        opacity: 1,
        y: -12,
        onComplete: () => {
          setTimeout(() => {
            this.hideToast();
          }, this.showTime);
        }
      });
    },
    hideToast() {
      // トースト非表示の場合は何もしない
      if(!this.isActive) return;
      const el = this.$refs.toastBottom;
      const tl = gsap.timeline();
      tl.to(el, {
        duration: .3,
        ease: 'back.in(3)',
        opacity: 0,
        y: 0,
      })
      .set(el, {
        clearProps: 'all',
        onComplete: () => {
          this.isActive = false;
        }
      });
    }
  }
}
</script>

<style lang="scss">
.toast-bottom {
  display: none;
  position: fixed;
  width: 300px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
}
.toast-bottom__content {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  color: $color-text-light;
  background: rgba(0, 0, 0, .8);
  border-radius: $radius-default;
}
.toast-bottom__content-text {
  margin: 0;
  word-break: break-all;
  text-align: left;
}
.toast-bottom__content-close {
  position: absolute;
  width: 24px;
  height: 24px;
  top: -8px;
  right: -8px;
  border: 2px solid #000;
  border-radius: 12px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}
</style>
