<template>
  <div>
    <!-- <float-btn /> -->
    <!-- <div style="width:300px">
      <ripple-img />
    </div>
    <div style="width:300px">
      <ripple-img />
    </div> -->

    <div style="width:300px">
      <ripple-btn link="/path">テスト</ripple-btn>
    </div>
  </div>
</template>

<script>
// import FloatBtn from '@/components/FloatBtn'
// import RippleImg from '@/components/RippleImg'
import RippleBtn from '@/components/RippleBtn'

export default {
  components: {
    // FloatBtn,
    // RippleImg,
    RippleBtn,
  },
}
</script>
