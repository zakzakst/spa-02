<template>
  <div class="tab-contents">
    <div ref="tabContentsTab" class="tab-contents__tab" @click="changeTab($event)">
      <div v-for="tab in tabList" :key="tab.id" class="tab-contents__tab-item" :class="[tab.id === currentTab ? 'is-current' : '']" :data-tab-id="tab.id">{{ tab.label }}</div>
    </div>
    <div class="tab-contents__contents">
      <div ref="tabContentsContent" class="tab-contents__content" v-html="currentContent"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      tabEl: null,
      tabItemsEl: null,
      tabBarEl: null,
      currentTab: null,
      currentContent: null,
      tabList: [
        {
          id: 'tab1',
          label: 'tab1',
          content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
        },
        {
          id: 'tab2',
          label: 'tabtest222',
          content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
        },
        {
          id: 'tab3',
          label: 'tab333',
          content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
        },
      ]
    }
  },
  methods: {
    changeTab(e) {
      const el = e.target;
      // 現在のタブの場合は何もしない
      if(el.classList.contains('is-current')) return;
      // 表示するタブを取得
      const newTab = this.tabList.find(tab => tab.id === el.dataset.tabId);
      this.currentTab = newTab.id;
      this.changeContent(newTab.content);
      this.slideBar();
    },
    changeContent(newContent) {
      // 要素を取得
      const el = this.$refs.tabContentsContent;
      const parentEl = el.parentNode;
      // 現在のコンテンツの高さを固定
      parentEl.style.height = `${el.clientHeight}px`;
      // コンテンツを切り替え
      const tl = gsap.timeline();
      tl.to(el, {
        duration: .2,
        opacity: 0,
        onComplete: () => {
          this.currentContent = newContent;
        }
      })
      .addLabel('newxtContent')
      .to(el, {
        duration: .2,
        delay: .2,
        opacity: 1,
      }, 'newxtContent+=.1')
      .to(parentEl, {
        duration: .5,
        height: 'auto',
      }, 'newxtContent+=.1');
    },
    slideBar() {
      // 現在のタブの幅を取得
      const currentTab = [...this.tabItemsEl].find(el => el.dataset.tabId === this.currentTab);
      const width = currentTab.clientWidth;
      // 現在のタブの横位置を取得
      const left = currentTab.getBoundingClientRect().left - this.tabEl.getBoundingClientRect().left;
      // タブバーをスライド
      gsap.to(this.tabBarEl, {
        duration: .4,
        ease: 'power2.inOut',
        width: width,
        left: left,
      });
    }
  },
  created() {
    // tabListの最初のタブを表示
    const initTab = this.tabList[0];
    this.currentTab = initTab.id;
    this.currentContent = initTab.content;
  },
  mounted() {
    // 要素を設定
    this.tabEl = this.$refs.tabContentsTab;
    this.tabItemsEl = this.tabEl.querySelectorAll('.tab-contents__tab-item');
    // タブバーの要素を作成
    this.tabBarEl = document.createElement('div');
    this.tabBarEl.classList.add('tab-contents__tab-bar');
    // 現在のタブの幅を取得してタブバーに設定
    const currentTab = [...this.tabItemsEl].find(el => el.classList.contains('is-current'));
    const width = currentTab.clientWidth;
    this.tabBarEl.style.width = `${width}px`;
    // 現在のタブの横位置を取得してタブバーに設定
    const left = currentTab.getBoundingClientRect().left - this.tabEl.getBoundingClientRect().left;
    this.tabBarEl.style.left = `${left}px`;
    // タブバーを挿入
    this.tabEl.appendChild(this.tabBarEl);
  }
}
</script>

<style lang="scss">
.tab-contents__tab {
  position: relative;
  display: flex;
  padding: 0 0 6px;
}
.tab-contents__tab-item {
  padding: 8px 16px;
  flex-shrink: 0;
    color: $color-secondary;
  cursor: pointer;
  &.is-current {
    color: $color-primary;
  }
}
.tab-contents__tab-bar {
  position: absolute;
  height: 2px;
  bottom: 2px;
  background: $color-primary;
}
.tab-contents__contents {
  overflow: hidden;
}
.tab-contents__content {
  padding: 12px 0;
}
</style>
