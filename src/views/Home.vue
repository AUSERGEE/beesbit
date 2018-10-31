<style scoped>
</style>
<template>
<div class="layout">
  <Header></Header>
  <Layout>
    <Content id="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="https://cdn.bdstatic.com/portal/img/campaign/11activity/banner@2x_168ce583.jpg" width="100%"></swiper-slide>
        <swiper-slide><img src="https://cdn.bdstatic.com/portal/img/campaign/11activity/banner@2x_168ce583.jpg" width="100%"></swiper-slide>
        <swiper-slide><img src="https://cdn.bdstatic.com/portal/img/campaign/11activity/banner@2x_168ce583.jpg" width="100%"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </Content>
    <section id="introduce">
      <Content>
        <h1>币势得</h1>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
      </Content>
    </section>
    <section id="service">
      <Content>
        <h1>我们的服务</h1>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
      </Content>
    </section>
    <section id="combo">
      <Content>
        <h1>运算力套餐</h1>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
      </Content>
    </section>
    <section id="advantage">
      <Content>
        <h1>我们的优势</h1>
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
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide
  },
  mounted() {

  }
}
</script>
