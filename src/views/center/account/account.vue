<template>
<div class="layout">
  <Centerheader></Centerheader>
  <Layout :style="{padding: '0 50px',marginTop: '1rem',}">
    <Content :style="{padding: '24px 0',minHeight: '80vh'}">
      <Layout>
        <Sider hide-trigger :style="{background: 'transparent',minWidth:'250px'}">
          <Menu width="auto">
            <div class="title">
              <div class="head">
                <img src="../../../assets/icons/head.svg" width="40%">
              </div>
              <div class="msg">
                <p>{{username}}</p>
                <p>{{usertelphone}}</p>
              </div>
            </div>
          </Menu>
          <Menu active-name="1" :open-names="['1']" width="auto" @on-select="select">
            <MenuItem name="1">
            <Icon type="md-heart" />账户信息</MenuItem>
            <MenuItem name="2">
            <Icon type="md-heart" />我的收益</MenuItem>
            <MenuItem name="3">
            <Icon type="md-heart" />购买算力</MenuItem>
            <MenuItem name="4">
            <Icon type="md-heart" />订单详情</MenuItem>
            <MenuItem name="5">
            <Icon type="md-heart" />合作计划</MenuItem>
          </Menu>
        </Sider>
        <Layout class="main">
          <!-- 公共的状态栏 -->
          <Headbar></Headbar>
          <Layout>1
          </Layout>
          <Layout>1
          </Layout>
        </Layout>
      </Layout>
    </Content>
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
      name: 1,
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
  methods: {
    select(name) {
      this.name = name
      this.$Message.success({
        content: name,
        duration: 1,
        closable: true
      });
    }
  },
  components: {
    Centerheader, //个人中心导航栏
    Headbar, //个人中心用户状态栏
    swiper,
    swiperSlide
  },
  mounted() {},
  beforeUpdate() {
    // this.$store.commit('changeusername', 'zhangguo');
  },
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
