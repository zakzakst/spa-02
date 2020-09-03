<template>
  <div>
    <!-- <float-btn /> -->

    <!-- <div style="width:300px">
      <ripple-img />
    </div>
    <div style="width:300px">
      <ripple-img />
    </div> -->

    <!-- <div style="width:300px">
      <ripple-btn link="/path">テスト</ripple-btn>
    </div> -->

    <!-- <div style="display: flex; justify-content: flex-end; padding: 8px">
      <search-btn placeholder="検索キーワード" />
    </div> -->

    <!-- <div style="padding: 8px">
      <skeleton-loader skeleton-type="img" />
      <skeleton-loader skeleton-type="heading" />
      <skeleton-loader skeleton-type="text" />
      <skeleton-loader skeleton-type="text" />
      <skeleton-loader skeleton-type="text" />
    </div> -->

    <!-- <div style="width:160px; padding: 8px">
      <check-mark ref="checkMark" />
      <button @click="animLoadDone">load done</button>
      <button @click="animCheckMarkLoading">Loading</button>
    </div> -->

    <!-- <div style="width:200px; padding: 8px">
      <favorite-icon-star />
      <favorite-icon-star />
    </div> -->

    <!-- <div style="width:200px; padding: 8px">
      <favorite-icon-heart />
    </div> -->

    <div class="container">
      <tab-contents />
    </div>
    <div style="height: 300px;background: #eee"></div>
  </div>
</template>

<script>
// import FloatBtn from '@/components/FloatBtn'
// import RippleImg from '@/components/RippleImg'
// import RippleBtn from '@/components/RippleBtn'
// import SearchBtn from '@/components/SearchBtn'
// import SkeletonLoader from '@/components/SkeletonLoader'
// import CheckMark from '@/components/CheckMark'
// import FavoriteIconStar from '@/components/FavoriteIconStar'
// import FavoriteIconHeart from '@/components/FavoriteIconHeart'
import TabContents from '@/components/TabContents'

export default {
  data() {
    return {
    }
  },
  components: {
    // FloatBtn,
    // RippleImg,
    // RippleBtn,
    // SearchBtn,
    // SkeletonLoader,
    // CheckMark,
    // FavoriteIconStar,
    // FavoriteIconHeart,
    TabContents,
  },
  methods: {
    animLoadDone() {
      this.$refs.checkMark.loadDone();
    },
    animCheckMarkLoading() {
      this.$refs.checkMark.animLoading();
    },
  }
}
</script>

<style>
.container {
  padding: 8px;
}
</style>
