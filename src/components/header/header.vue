<template>
<section id="header">
  <Content class="noPadding">
    <Header>
      <Menu mode="horizontal" :active-name="name" @on-select="select">
        <!-- <div class="layout-logo">{{PageList.PageList.main}}</div> -->
        <div class="layout-nav">
          <MenuItem v-for="(item,index) in PageList" :to="{name:PageList.path,query:{id:index}}" :name="1">{{PageList.name}}
          </MenuItem>
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
export default {
  data() {
    return {
      name: 1,
      // PageList:[]
    }
  },
  methods: {
    select(val) {
      console.log(val);
      this.name = val
    }
  },
  mounted() {
    console.log(PageList);
    this.PageList = PageList

  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
