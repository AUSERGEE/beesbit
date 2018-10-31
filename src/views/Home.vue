<style scoped>
</style>
<template>
<div class="layout">
  <Layout>
    <Header></Header>
    <Content :style="{padding: '0 50px'}">
      <Card>
        <div style="min-height: 200px;">
          Content
        </div>
      </Card>
    </Content>
    <Footer></Footer>
  </Layout>
</div>
</template>
<script>
import Header from '#/header'
import Footer from '#/footer'
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
