<!-- 购买算力页面的算力套餐介绍 -->
<template>
<section id="content">
  <div class="attention">
    <div class="card">
      <div class="left">
        <Card :bordered="false">
          <p>累积可购买最大值</p>
          <p>100份</p>
        </Card>
      </div>
      <div class="right">
        <Card :bordered="false">
          <p>单次可购买最小值</p>
          <p>1份</p>
        </Card>
      </div>
    </div>
    <div class="banner">
      <img src="../../assets/icons/store/store.svg" width="100%">
    </div>
    <div class="hint">
      <Alert class="warning" type="warning">
        <template slot="desc">
          注意：<br>
          1. 提现申请成功后的24小时内到账，且24小时内只可提现一次 。 <br>
          2. 提现：余额不足为1的部分只能提取到小数点后三位。 <br>
          3. 手续费：提现将收取手续费(手续费: 为0.001ETH)
        </template>
      </Alert>
    </div>
    <div class="explain">
      <Alert class="warning" type="warning">
        <template slot="desc">
          注意：<br>
          1. 提现申请成功后的24小时内到账，且24小时内只可提现一次 。 <br>
          2. 提现：余额不足为1的部分只能提取到小数点后三位。 <br>
          3. 手续费：提现将收取手续费(手续费: 为0.001ETH)
        </template>
      </Alert>
    </div>
  </div>
</section>
</template>

<script>
import {
  F_BackHome
} from '@/libs/tools'
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
