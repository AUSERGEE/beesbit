
<template>
<div class="layout">
  <Header></Header>
  <Layout>
    <section id="introduce">
      <Content class="contentPadding">
        <h3>币势得</h3>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
      </Content>
    </section>
  </Layout>
  <Footer></Footer>

</div>
</template>
<script>
import Header from '#/header'
import Footer from '#/footer'
import {
  getToken,
  setToken
} from '@/libs/util'
export default {
  data() {
    return {
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
  }
}
</script>

<style scoped>
@import './index.less';
</style>
