<!-- 购买算力页面的算力套餐介绍 -->
<template>
<section id="content">
  <Modal v-model="visible" title="123" @on-visible-change="change" width="60vw">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <div slot="footer">
      <div v-if="showBtn">
        <Button type="error" size="large" @click="ok">同意</Button>
      </div>
      <div v-else>
        请仔细阅读算力协议,剩余时间 {{times}} 秒
      </div>
    </div>
  </Modal>
</section>
</template>

<script>
export default {
  data() {
    return {
      visible: false, //显示布尔值
      showBtn: false, //是否展示按钮
      times: 5, //倒计时时间
      timer: null, //定时器对象
    }
  },
  props: {
    show: {
      type: Boolean,
    }
  },
  methods: {
    ok() { //用户同意算力协议
      this.visible = false
      this.$emit('agree', true)
    },
    change(state) {},
    setTimer: function() { //阅读算力协议定时器
      this.timer = setInterval(() => {
        this.times--
        if (this.times == 0) {
          clearInterval(this.timer)
          this.showBtn = true
        }
      }, 1000)
    },

  },
  watch: {
    show: function(val, oldval) {
      if (val) {
        this.visible = val
        this.setTimer()
      }
    },
    visible: function(val, oldval) {
      if (!val) {
        if (!this.showBtn) {
          this.times = 5
          clearInterval(this.timer)
        }
        this.$emit('state', false)
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
