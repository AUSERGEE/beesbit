<!-- 购买算力页面的算力套餐介绍 -->
<template>
<section id="content">
  <Modal v-model="visible" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel" @on-visible-change="change">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <p>Content of dialog</p>
  </Modal>
</section>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  props: {
    show: {
      type: Boolean,
    }
  },
  methods: {
    ok() {},
    cancel() {},
    change(state) {
      if (!state) {}
    }
  },
  watch: {
    show: function(val, oldval) {
      if (val) {
        this.visible = val
      } else {

      }
    },
    visible: function(val, oldval) {
      console.log(val,'visible');
      if (!val) {
        this.$emit('state', false)
      }
    }

  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
