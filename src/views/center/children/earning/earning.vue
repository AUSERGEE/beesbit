<template>
<div class="layout">
  <Layout class="main">
    <Layout>
      <Tabs value="name1">
        <TabPane label="收益概况" name="name1">
          <div class="earningbox">
            <div class="earnings" v-for="(item,index) in earning">
              <div class="img">
                <img :src="item.img" width="100%">
              </div>
              <p>{{item.value}}</p>
              <p>{{item.text}}</p>
            </div>
          </div>
        </TabPane>
        <TabPane label="余额提现" name="name2">
          <div class="earningbox">
            <div class="earnings" v-for="(item,index) in earning">
              <div class="img">
                <img src="" width="100%">
              </div>
              <p>{{item.value}}</p>
              <p>{{item.text}}</p>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </Layout>
    <Layout>1
    </Layout>
  </Layout>
</div>
</template>
<script>
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
      },
      earning: [{
        text: '账户余额',
        value: 2.13241,
        img: require('../../../../assets/icons/earning/earning-1.svg'),
      }, {
        text: '24H每M理论收益',
        value: 0.007935 + 'MH/s',
        img: require('../../../../assets/icons/earning/earning-2.svg'),
      }, {
        text: '累计收益',
        value: 0.26 + 'ETH',
        img: require('../../../../assets/icons/earning/earning-3.svg'),
      }, {
        text: '冻结资产 ',
        value: 0 + 'ETH',
        img: require('../../../../assets/icons/earning/earning-4.svg'),
      }, {
        text: '实时汇率',
        value: '1ETH≈$212.74',
        img: require('../../../../assets/icons/earning/earning-5.svg'),
      }, ]
    }
  },
  methods: {},
  components: {},
  mounted() {},
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
