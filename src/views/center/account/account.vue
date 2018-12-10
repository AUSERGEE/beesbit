<template>
<div class="layout">
  <Centerheader></Centerheader>
  <Layout :style="{padding: '0 50px',marginTop: '1rem',}">
    <Content :style="{padding: '24px 0',minHeight: '280px'}">
      <Layout>
        <Sider hide-trigger :style="{background: 'transparent'}">
          <div class="">
            123
          </div>
          <Menu active-name="1" :open-names="['1']" width="auto" style="marginRight:1rem;" @on-select="select">
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
        <Layout>
          <Content width="auto" :style="{padding: '24px', minHeight: '80px', background: '#fff'}">
            {{name}}
          </Content>
          <Content width="auto" :style="{padding: '24px', minHeight: '200px', background: '#fff'}">
            {{name}}
          </Content>
        </Layout>
      </Layout>
    </Content>
  </Layout>
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
      name: 1,
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
