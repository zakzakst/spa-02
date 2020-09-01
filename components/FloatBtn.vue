<template>
  <div class="float-btn" :class="{'is-open': menuOpen}">
    <button class="float-btn__control" @click="toggleItems">
      <fa :icon="['fas', 'plus']" class="float-btn__control-icon fa-lg" />
    </button>
    <div class="float-btn__items">
      <button class="float-btn__item">
        <fa :icon="['fas', 'cog']" />
      </button>
      <button class="float-btn__item">
        <fa :icon="['fas', 'user']" />
      </button>
      <button class="float-btn__item">
        <fa :icon="['fas', 'star']" />
      </button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      menuOpen: false,
      showItemSpeed: .3,
    }
  },
  methods: {
    toggleItems() {
      this.animControlBtn();
      if(this.menuOpen) {
        this.hideItems();
        this.menuOpen = false;
      } else {
        this.showItems();
        this.menuOpen = true;
      }
    },
    animControlBtn() {
      // コントロールボタンのインタラクション
      const tl = gsap.timeline();
      tl.set('.float-btn__control', {
        scale: .9,
      }).to('.float-btn__control', {
        scale: 1,
        ease: 'back.out(4)',
      });
    },
    showItems() {
      // アイテムボタンの表示
      const r = 72;
      gsap.to('.float-btn__item', {
        duration: this.showItemSpeed,
        ease: 'back.out',
        x: index => {
          return -Math.cos(Math.PI / 4 * index) * r;
        },
        y: index => {
          return -Math.sin(Math.PI / 4 * index) * r;
        },
        stagger: {
          each: .1,
        },
      });
    },
    hideItems() {
      // アイテムボタンの非表示
      gsap.to('.float-btn__item', {
        duration: this.showItemSpeed,
        ease: 'back.in',
        x: 0,
        y: 0,
        stagger: {
          each: .1,
          from: 'end',
        },
      });
    }
  }
}
</script>

<style lang="scss">
.float-btn {
  position: fixed;
  right: 12px;
  bottom: 12px;
  z-index: $z-float-btn;
}
.float-btn__control {
  position: relative;
  width: 60px;
  height: 60px;
  color: $color-text-light;
  background: $color-primary;
  border-radius: 50%;
  z-index: 2;
}
.float-btn__control-icon {
  transition: transform $transition-default;
}
.float-btn__items {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.float-btn__item {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 0;
  left: 0;
  color: $color-text-light;
  background: $color-primary;
  border-radius: 50%;
}

// 「.is-open」付与時のスタイル
.float-btn.is-open {
  .float-btn__control-icon {
    transform: rotate(45deg);
  }
}
</style>
