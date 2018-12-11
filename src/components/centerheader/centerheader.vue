<template>
<section id="header">
  <Content class="noPadding">
    <Header>
      <Menu mode="horizontal" active-name="1" @on-select="select">
        <div class="layout-logo" @click="BackHome">
          <img src="../../assets/icons/logo.svg" width="100%">

        </div>
        <div class="layout-nav">
          <MenuItem name="1">
          <Icon type="ios-paper" />
          </MenuItem>
          <MenuItem name="2">
          <Icon type="ios-people" />
          </MenuItem>
          <MenuItem name="4">
          <Icon type="md-person" />
          </MenuItem>
          <Submenu name="3">
            <template slot="title">
              <Icon type="md-chatbubbles" />
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">修改密码</MenuItem>
              <MenuItem name="3-2">绑定邮箱</MenuItem>
              <MenuItem name="3-3">退出</MenuItem>
            </MenuGroup>
          </Submenu>
        </div>
      </Menu>
    </Header>
  </Content>
</section>
</template>

<script>
import {
  PageList
} from '@/libs/nameList' //命名配置
import {
  F_BackHome
} from '@/libs/tools'
export default {
  data() {
    return {
      name: 1,
      List: []
    }
  },
  methods: {
    select(val) {
      this.name = val
      console.log(this.name);
    },
    BackHome() {
      F_BackHome()
    }
  },
  mounted() {
    console.log(PageList);
    this.List = PageList
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
