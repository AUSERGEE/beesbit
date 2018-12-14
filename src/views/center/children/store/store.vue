<template>
<div class="layout">
  <Layout>
    <Tabs value="name1" :animated="false">
      <TabPane label="B1812A期30天算力套餐" name="name1">
        <div class="forcecombo">
          <Row type="flex" :gutter="16">
            <Col span="12">
            <Attention></Attention>
            </Col>
            <Col span="12">
            <div class="form">
              <div class="select">
                <Row type="flex" :gutter="15">
                  <Col span="12">
                  <label>币种</label>
                  <Select v-model="model">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  </Col>
                  <Col span="12">
                  <label>付款币种</label>
                  <Select v-model="model">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  </Col>
                </Row>
                <Row type="flex" :gutter="15">
                  <Col span="16">
                  <label>币势得算力</label>
                  <Input></Input>
                  </Col>
                  <Col span="8">
                  <label>币势得算力</label>
                  <div class="">
                    <InputNumber :max="10" :min="1" v-model="number"></InputNumber>
                  </div>
                  </Col>
                </Row>
                <Row type="flex" :gutter="15">
                  <Col span="12">
                  <label>付款方式</label>
                  <Select v-model="model">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  </Col>
                  <Col span="12">
                  <label>租凭算力天数</label>
                  <Select v-model="model">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  </Col>
                </Row>
              </div>
              <div class="discounts">
                <Tabs value="1">
                  <TabPane label="优惠卷" name="1">
                    <Row type="flex" :gutter="10">
                      <Col v-for="(item,index) in 4" @click.native="chooseCoupon(index)" :key="index">
                      <Card style="width:7rem" :class="activeCoupon==index?(choose?'active':''):''">
                        <p>9折券</p>
                        <p>30天算力套餐</p>
                      </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane label="ETH余额抵扣" name="2">
                    <div class="balance">
                      <div class="choose">
                        <div class="top">
                          <div class="left">
                            <img src="../../../../assets/icons/store/balance.svg" alt="">
                            <div class="text">
                              <p>ETH余额</p>
                              <p>0.975554 ETH</p>
                            </div>
                          </div>
                          <div class="right">
                            <img src="../../../../assets/icons/store/exchange.svg" alt="">
                            <div class="text">
                              <p>实时RMB/ETH汇率</p>
                              <p>636.669:1</p>
                            </div>
                          </div>
                        </div>
                        <div class="center">
                          <Button type="text" size="small">全部抵扣</Button>
                        </div>
                        <div class="bottom">
                          <Row type="flex" justify="space-around" :gutter="10">
                            <Col span="10" class="left">
                            <span>可抵扣</span>
                            <span>32132231</span>
                            </Col>
                            <Col span="10" class="right">
                            <InputNumber size="large" style="width:100%;"></InputNumber>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div class="btn">
                        <Button type="error">确认</Button>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
              <div class="protocol" :class="agreeProtocol?'protocolActive':''">
                <div class="img">
                  <img :src="agreeProtocol?protocolImg[1]:protocolImg[0]" width="100%">
                </div>
                <div class="btn">
                  <p v-if="!agreeProtocol">算力协议</p>
                  <p v-else>已阅读算力协议</p>
                  <div class="">
                    <Button v-show="!agreeProtocol" type="default" size="default" @click.native="modalShow = true">请阅读算力协议</Button>
                  </div>
                </div>
              </div>
              <div class="submit">
                <div style="width:100%;">
                  <Row type="flex" justify="space-between">
                    <Col span="12">
                    <h1>1234元</h1>
                    </Col>
                    <Col span="12">
                    <Button type="error" long :disabled="!agreeProtocol">同意算力协议后进行订单确认</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            </Col>
          </Row>
        </div>
      </TabPane>
      <TabPane label="B1812A期两年算力套餐" name="name2">2</TabPane>
      <TabPane label="B1812A期两年算力套餐" name="name3">3</TabPane>
    </Tabs>
  </Layout>
  <ProtocolModal :show.native="modalShow" @state="state" @agree="agree"></ProtocolModal>
</div>
</template>
<script>
import Headbar from '#/headbar'
import Attention from '#/attention'
import ProtocolModal from '#/protocolModal'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  data() {
    return {
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
      protocolImg: [
        require('../../../../assets/icons/store/protocol.svg'),
        require('../../../../assets/icons/store/protocol-active.svg')
      ],
      cityList: [{
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
      ],
      model: '1',
      number: 0,
      choose: false, //是否选中优惠券
      activeCoupon: 0, //被选中的优惠券序号
      modalShow: false, //算力协议modal
      agreeProtocol: false, //用户是否同意算力协议
    }
  },
  methods: {
    chooseCoupon(index) {
      this.activeCoupon = index
      this.choose = !this.choose
    },
    state(val) {
      console.log(val, 'changeModalState');
      this.modalShow = val
    },
    agree(val) {
      this.agreeProtocol = val
      console.log(this.agreeProtocol);
      this.$Message.success('已同意算力协议');
    }
  },
  watch: {
    modalShow: function(val, oldval) {
      console.log(val, 'modalShow');
    }
  },
  components: {
    Headbar,
    Attention,
    ProtocolModal, //算力协议
  },
  mounted() {

  },
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
