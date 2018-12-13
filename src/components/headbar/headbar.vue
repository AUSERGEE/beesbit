<template>
<Header>
  <div class="limit">
    <Row type="flex">
      <Col v-for="(item,index) in list" :key="index">
        <Tooltip :content="index" theme="light" placement="top">
          <div class="img">
            <img :src="item.img" width="60%">
          </div>
        </Tooltip>
      </Col>
    </Row>
  </div>
  <div class="title">
    <div class="head">
      <img src="../../assets/icons/headbar/usersafe.svg" width="40%">
    </div>
    <div class="msg">
      <p>账户安全等级<Rate v-model="rete" disabled /></p>
      <p>建议尽快完善相关信息，提高账户安全</p>
    </div>
  </div>
</Header>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        "img": require('../../assets/icons/headbar/headbar-1.svg'),
      }, {
        "img": require('../../assets/icons/headbar/headbar-2.svg'),
        "img-active": require('../../assets/icons/headbar/headbar-2-active.svg'),
      }, {
        "img": require('../../assets/icons/headbar/headbar-3.svg'),
        "img-active": require('../../assets/icons/headbar/headbar-3-active.svg'),
      }, {
        "img": require('../../assets/icons/headbar/headbar-4.svg'),
        "img-active": require('../../assets/icons/headbar/headbar-4-active.svg'),
      }, ],
      rete:3,
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
