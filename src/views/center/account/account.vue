<template>
<div class="layout">
  <Centerheader></Centerheader>
  <Layout>
    123
  </Layout>
</div>
</template>
<script>
import Centerheader from '#/centerheader'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      modal: false,
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {},
  components: {
    Centerheader,
    swiper,
    swiperSlide
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
