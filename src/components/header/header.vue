<template>
<section id="header">
  <Content class="noPadding">
    <Header>
      <Menu mode="horizontal" :active-name="name" @on-select="select">
        <div class="layout-logo">币势得</div>
        <div class="layout-nav">
          <MenuItem :to="{name:'home',query:{id:1}}" :name="1"> 首页
          </MenuItem>
          <MenuItem :to="{name:'guide',query:{id:2}}" :name="2"> 指南
          </MenuItem>
          <MenuItem :to="{name:'help',query:{id:3}}" :name="3"> 帮助
          </MenuItem>
          <MenuItem :to="{name:'notice',query:{id:4}}" :name="4"> 公告
          </MenuItem>
          <MenuItem :to="{name:'about',query:{id:5}}" :name="5"> 关于
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </Content>
</section>
</template>

<script>
export default {
  data() {
    return {
      name: 1,
    }
  },
  methods: {
    select(val) {
      console.log(val);
      this.name = val
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
