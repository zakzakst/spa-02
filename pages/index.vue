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

    <div style="width:200px; padding: 8px">
      <check-mark ref="checkMark" />
      <button @click="animCheckMark">test</button>
    </div>
  </div>
</template>

<script>
// import FloatBtn from '@/components/FloatBtn'
// import RippleImg from '@/components/RippleImg'
// import RippleBtn from '@/components/RippleBtn'
// import SearchBtn from '@/components/SearchBtn'
// import SkeletonLoader from '@/components/SkeletonLoader'
import CheckMark from '@/components/CheckMark'

export default {
  components: {
    // FloatBtn,
    // RippleImg,
    // RippleBtn,
    // SearchBtn,
    // SkeletonLoader,
    CheckMark,
  },
  methods: {
    animCheckMark() {
      this.$refs.checkMark.animCheckMark();
    }
  }
}
</script>
