
<template>
<div class="layout">
  <Header></Header>
  <Layout>
    <div>
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
    </div>
    <section id="introduce">
      <Content class="contentPadding">
        <h3>币势得</h3>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
      </Content>
    </section>
    <section id="service">
      <Content class="contentPadding">
        <h3>我们的服务</h3>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
        <Row type="flex" getter="12" justify="space-between">
          <Col v-for="(item,index) in 3" span="6">
          <Card>
            <div style="text-align:center">
              <img src="">
              <h6>币势得币势得币势得币势得币势得币势得币势得币势得币势得</h6>
            </div>
          </Card>
          </Col>
        </Row>
      </Content>
    </section>
    <section id="combo">
      <Content class="contentPadding">
        <h3>运算力套餐</h3>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
        <Row type="flex" getter="12" justify="space-between">
          <Col v-for="(item,index) in 3" span="6">
          <Card>
            <div style="text-align:center">
              <img src="">
              <h6>币势得币势得币势得币势得币势得币势得币势得币势得币势得</h6>
            </div>
          </Card>
          </Col>
        </Row>
      </Content>
    </section>
    <section id="advantage">
      <Content class="contentPadding">
        <h3>我们的优势</h3>
        <p>币势得云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入币势得会员,您 可以在币势得享受更多优质服务。
        </p>
        <Row type="flex" :getter="12" justify="space-between">
          <Col v-for="(item,index) in 4" span="6">
          <Card >
            <div style="text-align:center">
              <img src="">
              <h6>币势得币势得币势得币势得币势得币势得币势得币势得币势得</h6>
            </div>
          </Card>
          </Col>
        </Row>
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
      console.log(this.$route.query);
  }
}
</script>

<style scoped>
@import './index.less';
</style>
