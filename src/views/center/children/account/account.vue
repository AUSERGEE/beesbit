<template>
<div class="layout">
  <Layout class="main">
    <Headbar></Headbar>
    <Layout>
      <Tabs value="name1">
        <TabPane label="我的算力套餐" style="padding:0 1rem;" name="name1">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in 4">
              <Col span="24">
              <Card class="order" dis-hover>
                <div class="time">
                  <div class="left">
                    <p>2018.9.21 10:16</p>
                    <p>套餐开始时间</p>
                  </div>
                  <div class="img">
                    <img src="../../../../assets/icons/account/eth.svg" width="100%">
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
                  <div class="price">
                    <div class="text">
                      总算力（MH/s）
                    </div>
                    <div class="num">
                      255
                    </div>
                  </div>
                </div>
              </Card>
              </Col>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </TabPane>
        <TabPane label="我的优惠券" style="padding:0 1rem;" name="name2">
          <Row type="flex">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(item,index) in coupon">
                <Col span="24">
                <Card class="coupon" :class="item.type=='day'?'day':'discount'" dis-hover>
                  <h6>{{item.type=='day'?item.argument+'天算力套餐优惠':item.argument*10+'折套餐优惠'}}</h6>
                  <div class="btn">
                    <Button type="default" ghost>立即使用</Button>
                  </div>
                  <div class="footer">
                    <div class="left">
                      <p>开始时间 : 2018.9.21 10:16</p>
                      <p>到期时间 : 2018.9.21 10:16</p>
                    </div>
                    <div class="right">
                      {{item.type=='day'?item.argument+'天券':item.argument*10+'折券'}}
                    </div>
                  </div>
                </Card>
                </Col>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </Row>
        </TabPane>
      </Tabs>
    </Layout>
    <Layout>
      <Tabs>
        <TabPane label="提现记录" style="padding:0 1rem;">
          <Table highlight-row ref="currentRowTable" :columns="columns" :data="tableData"></Table>
          <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
              <Page :total="100" :current="1" size="small" show-sizer></Page>
            </div>
          </div>
        </TabPane>
        <TabPane label="登录记录" style="padding:0 1rem;">
          <Table highlight-row ref="currentRowTable" :columns="columns" :data="tableData"></Table>
          <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
              <Page :total="100" :current="1" size="small" show-sizer></Page>
            </div>
          </div>
        </TabPane>
        <div slot="extra">
          <Input placeholder="Enter something..." clearable style="width: 200px" />
          <Button>增加</Button>
        </div>
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
        slidesPerView: 3,
        spaceBetween: 5,
        freeMode: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      columns: [{
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
      tableData: [{
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
      ],
      coupon: [ //优惠券信息
        {
          type: 'day',
          argument: 30,
        },
        {
          type: 'discount',
          argument: 0.8,
        },
        {
          type: 'discount',
          argument: 0.6,
        },
        {
          type: 'discount',
          argument: 0.6,
        },
      ]
    }
  },
  methods: {},
  components: {
    Centerheader, //个人中心导航栏
    Headbar,
    swiper,
    swiperSlide
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
