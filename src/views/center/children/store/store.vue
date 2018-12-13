<template>
<div class="layout">
  <Layout>
    <Tabs value="name1" :animated="false">
      <TabPane label="B1812A期30天算力套餐" name="name1">
        <div class="forcecombo">
          <Row type="flex" :gutter="16">
            <Col span="12">
            <div class="attention">
              <div class="card">
                <div class="left">
                  <Card :bordered="false">
                    <p>累积可购买最大值</p>
                    <p>100份</p>
                  </Card>
                </div>
                <div class="right">
                  <Card :bordered="false">
                    <p>单次可购买最小值</p>
                    <p>1份</p>
                  </Card>
                </div>
              </div>
              <div class="banner">
                <img src="../../../../assets/icons/store/store.svg" width="100%">
              </div>
              <div class="hint">
                <Alert class="warning" type="warning">
                  <template slot="desc">
                    注意：<br>
                    1. 提现申请成功后的24小时内到账，且24小时内只可提现一次 。 <br>
                    2. 提现：余额不足为1的部分只能提取到小数点后三位。 <br>
                    3. 手续费：提现将收取手续费(手续费: 为0.001ETH)
                  </template>
                </Alert>
              </div>
              <div class="explain">
                <Alert class="warning" type="warning">
                  <template slot="desc">
                    注意：<br>
                    1. 提现申请成功后的24小时内到账，且24小时内只可提现一次 。 <br>
                    2. 提现：余额不足为1的部分只能提取到小数点后三位。 <br>
                    3. 手续费：提现将收取手续费(手续费: 为0.001ETH)
                  </template>
                </Alert>
              </div>
            </div>
            </Col>
            <Col span="12">1</Col>
          </Row>
        </div>
      </TabPane>
      <TabPane label="B1812A期两年算力套餐" name="name2">2</TabPane>
      <TabPane label="B1812A期两年算力套餐" name="name3">3</TabPane>
    </Tabs>
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
    }
  },
  methods: {},
  components: {
    Headbar,
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
