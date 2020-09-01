<template>
  <a :href="link" class="ripple-btn" @click.prevent="animRipple($event)">
    <slot></slot>
  </a>
</template>

<script>
import gsap from 'gsap'

export default {
  props: ['link'],
  methods: {
    animRipple(e) {
      // リップル要素を作成
      const btnEl = e.target;
      const rippleEl = document.createElement('div');
      // クリック位置をリップルに反映
      const diffX = e.pageX - btnEl.offsetLeft;
      const diffY = e.pageY - btnEl.offsetTop;
      rippleEl.setAttribute('style', `top: ${diffY}px; left: ${diffX}px;`);
      // リップル要素を挿入
      rippleEl.classList.add('ripple-btn__ripple');
      // アニメーションを実行
      btnEl.appendChild(rippleEl);
      gsap.to(rippleEl, {
        scale: 50,
        opacity: 0,
        onComplete: () => {
          btnEl.removeChild(rippleEl);
          // リンク先へ移動
          const link = btnEl.getAttribute('href');
          // this.$router.push(link);
        },
      });
    }
  },
}
</script>

<style lang="scss">
.ripple-btn {
  position: relative;
  display: block;
  padding: 12px;
  text-align: center;
  color: $color-text-light;
  background: $color-primary;
  text-decoration: none;
  overflow: hidden;
}
.ripple-btn__ripple {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  background: $color-primary-light;
  border-radius: 50%;
  opacity: .3;
  transform: translate(-50%, -50%);
}
</style>
