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
          <Row type="flex" justify="space-between" style="padding:0 1rem;">
            <Col span="8">
            <Alert type="warning">
              <template slot="desc">
                  注意：<br>
                  1. 提现申请成功后的24小时内到账，且24小时内只可提现一次 。 <br>
                  2. 提现：余额不足为1的部分只能提取到小数点后三位。 <br>
                  3. 手续费：提现将收取手续费(手续费: 为0.001ETH)
              </template>
            </Alert>
            </Col>
            <Col span="8">
            <Input placeholder="Enter something..." clearable style="width: 200px" />
            <Input placeholder="Enter something..." clearable style="width: 200px" />
            <Input placeholder="Enter something..." clearable style="width: 200px" />
            </Col>
            <Col span="8">
            <div class="">
              <h1>asdasd</h1>
            </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Layout>
    <Layout>

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
