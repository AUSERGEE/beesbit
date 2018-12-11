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
                <img src="../../assets/icons/head.svg" width="40%">
              </div>
              <div class="msg">
                <p>{{username}}</p>
                <p>{{usertelphone}}</p>
              </div>
            </div>
          </Menu>
          <Menu active-name="1" :open-names="['1']" width="auto" @on-select="select">
            <MenuItem name="1" to="/center/account">
            <Icon type="md-heart" />账户信息</MenuItem>
            <MenuItem name="2" to="/center/earning">
            <Icon type="md-heart" />我的收益</MenuItem>
            <MenuItem name="3" to="/center/store">
            <Icon type="md-heart" />购买算力</MenuItem>
            <MenuItem name="4" to="/center/order">
            <Icon type="md-heart" />订单详情</MenuItem>
            <MenuItem name="5" to="/center/partner">
            <Icon type="md-heart" />合作计划</MenuItem>
          </Menu>
        </Sider>
        <!-- 内容显示区域 -->
        <Layout class="main">

          <transition :name="transitionName">
            <router-view class="child-view"></router-view>
          </transition>

        </Layout>
      </Layout>
    </Content>
  </Layout>
</div>
</template>
<script>
import Centerheader from '#/centerheader'
import Headbar from '#/headbar'
export default {
  data() {
    return {
      modal: false,
      name: 1,
      username: this.$store.state.username,
      usertelphone: this.$store.state.usertelphone,
      transitionName: 'slide-left'
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
  },
  watch: {
    '$route'(to, from) {
      if (to.path == '/') {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    }
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
