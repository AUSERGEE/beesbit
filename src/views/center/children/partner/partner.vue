<template>
<div class="layout">
  <Layout class="main">
    <Layout>合伙计划
    </Layout>
    <Layout>2
    </Layout>
  </Layout>
</div>
</template>
<script>
import Centerheader from '#/centerheader'
import Headbar from '#/headbar'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      modal: false,
      username: this.$store.state.username,
      usertelphone: this.$store.state.usertelphone,
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
    Centerheader, //个人中心导航栏
    Headbar
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
