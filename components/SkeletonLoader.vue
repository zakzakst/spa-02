<template>
  <div class="skeleton-loader" :class="skeletonType ? `skeleton-loader--${skeletonType}`: ''"></div>
</template>

<script>
export default {
  props: ['skeletonType'],
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
.skeleton-loader {
  position: relative;
  background: #ddd;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: skeleton-loader-anim 1.2s linear infinite;
  }
  &.skeleton-loader--text {
    height: 16px;
    margin-bottom: 8px;
    border-radius: 8px;
    &:last-child {
      width: 75%;
      margin-bottom: 0;
    }
  }
  &.skeleton-loader--heading {
    width: 50%;
    height: 24px;
    margin-bottom: 12px;
    border-radius: 12px;
  }
  &.skeleton-loader--img {
    height: 120px;
    margin-bottom: 12px;
    border-radius: 12px;
  }
}
@keyframes skeleton-loader-anim {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
