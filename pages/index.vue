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

    <div style="display: flex; justify-content: flex-end; padding: 8px">
      <search-btn placeholder="検索キーワード" />
    </div>
  </div>
</template>

<script>
// import FloatBtn from '@/components/FloatBtn'
// import RippleImg from '@/components/RippleImg'
// import RippleBtn from '@/components/RippleBtn'
import SearchBtn from '@/components/SearchBtn'

export default {
  components: {
    // FloatBtn,
    // RippleImg,
    // RippleBtn,
    SearchBtn,
  },
}
</script>
