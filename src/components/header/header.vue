<template>
<section id="header">
  <Content class="noPadding">
    <Header>
      <Menu mode="horizontal" active-name="1">
        <div class="layout-logo">币势得</div>
        <div class="layout-nav">
          <MenuItem :to="{name:'home',query:{id:1}}" name="1"> 首页
          </MenuItem>
          <MenuItem :to="{name:'guide',query:{id:1}}" name="2"> 指南
          </MenuItem>
          <MenuItem name="3"> 帮助
          </MenuItem>
          <MenuItem name="4"> 公告
          </MenuItem>
          <MenuItem name="5"> 关于
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </Content>
</section>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
