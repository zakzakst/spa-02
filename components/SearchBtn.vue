<template>
  <div class="search-btn" :class="{'is-open': isOpen}">
    <div class="search-btn__form">
      <form @submit.prevent="searchSubmit">
        <input ref="searchBtnInput" type="text" v-model="searchInput" class="search-btn__input" :placeholder="placeholder">
      </form>
      <button class="search-btn__open" @click="openInput">
        <fa :icon="['fas', 'search']" />
      </button>
      <button class="search-btn__close" @click="closeInput">
        <fa :icon="['fas', 'times']" />
      </button>
    </div>
    <button class="search-btn__search" @click="searchSubmit">検索</button>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  props: ['placeholder'],
  data() {
    return {
      isOpen: false,
      searchInput: '',
    }
  },
  methods: {
    openInput() {
      this.isOpen = true;
      this.$refs.searchBtnInput.focus();
    },
    closeInput() {
      this.isOpen = false;
    },
    searchSubmit() {
      // 検索用スクリプトを記載
      console.log(this.searchInput);
    }
  },
}
</script>

<style lang="scss">
.search-btn {
  position: relative;
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
}
.search-btn__form {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 0;
  right: 0;
  border-radius: 24px;
  background: #ddd;
  overflow: hidden;
  transition: width $transition-default, right $transition-default;
}
.search-btn__input {
  position: absolute;
  width: 172px;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 48px;
  background: none;
  opacity: 0;
  border: none;
  outline: none;
  transition: opacity $transition-default;
}
.search-btn__open,
.search-btn__close {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 0;
  right: 0;
  left: auto;
  background: none;
  border-radius: 24px;
  transition: opacity $transition-default;
}
.search-btn__open {
  z-index: 2;
}
.search-btn__close {
  opacity: 0;
  z-index: 1;
}
.search-btn__search {
  width: 100%;
  height: 100%;
  // font-weight: bold;
  background: none;
}

// 検索インプット表示時のスタイル
.search-btn.is-open {
  .search-btn__form {
    right: 48px;
  }
  .search-btn__form {
    width: 240px;
  }
  .search-btn__input {
    opacity: 1;
  }
  .search-btn__open {
    opacity: 0;
    z-index: 1;
  }
  .search-btn__close {
    opacity: 1;
    z-index: 2;
  }
}
</style>
