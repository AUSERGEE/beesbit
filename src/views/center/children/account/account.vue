<template>
<div class="layout">
  <Layout class="main">
    <Headbar></Headbar>
    <Layout>
      <Tabs :animated="false">
        <TabPane label="我的算力套餐" style="padding:0 1rem;">
          <Row type="flex" :gutter="16">
            <Col span="8" v-for="item in 3">
            <Card class="order">
              <div class="time">
                <div class="left">
                  <p>2018.9.21 10:16</p>
                  <p>套餐开始时间</p>
                </div>
                <div class="">
                  <img src="" alt="">
                </div>
                <div class="left">
                  <p>2018.9.21 10:16</p>
                  <p>套餐结束时间</p>
                </div>
              </div>
              <div class="power">
                <div class="eth">
                  ETH
                </div>
                <div class="">
                  <div class="">
                    总算力（MH/s）
                  </div>
                  <div class="">
                    255
                  </div>
                </div>
              </div>
            </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="我的优惠券" style="padding:0 1rem;">
          <Row type="flex" :gutter="16">
            <Col span="8" v-for="item in 3">
            <Card class="order">
              <div class="time">
                <div class="left">
                  <p>2018.9.21 10:16</p>
                  <p>套餐开始时间</p>
                </div>
                <div class="">
                  <img src="" alt="">
                </div>
                <div class="left">
                  <p>2018.9.21 10:16</p>
                  <p>套餐结束时间</p>
                </div>
              </div>
              <div class="power">
                <div class="eth">
                  ETH
                </div>
                <div class="">
                  <div class="">
                    总算力（MH/s）
                  </div>
                  <div class="">
                    255
                  </div>
                </div>
              </div>
            </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Layout>
    <Layout>
      <Tabs :animated="false">
        <TabPane label="提现记录" style="padding:0 1rem;">
          <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
        </TabPane>
        <TabPane label="登录记录" style="padding:0 1rem;">
          <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
        </TabPane>
      </Tabs>
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
      },
      columns3: [{
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [{
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
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
