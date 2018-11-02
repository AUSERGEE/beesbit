<template>
<section id="header">
  <Content class="noPadding">
    <Header>
      <Menu mode="horizontal" :active-name="name" @on-select="select">
        <div class="layout-logo">{{List[0].name}}</div>
        <div class="layout-nav">
          <MenuItem v-for="(item,index) in List" :to="{name:item.path,query:{id:index}}" :name="1">{{item.name}}
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
      List:[]
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
    this.List = PageList

  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
