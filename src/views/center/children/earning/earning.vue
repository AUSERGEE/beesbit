<template>
<div class="layout">
  <Layout>
    <Tabs value="name1" :animated="false">
      <TabPane label="收益概况" name="name1">
        <div class="earningbox">
          <div class="earnings" v-for="(item,index) in earning">
            <div class="img">
              <img :src="item.img" width="100%">
            </div>
            <p>{{item.value}}</p>
            <p>{{item.text}}</p>
          </div>
        </div>
      </TabPane>
      <TabPane label="余额提现" name="name2">
        <Row class="withdraw" type="flex" justify="space-between" style="padding:0 1rem;">
          <Col span="8">
          <Alert class="warning" type="warning">
            <template slot="desc">
              注意：<br>
              1. 提现申请成功后的24小时内到账，且24小时内只可提现一次 。 <br>
              2. 提现：余额不足为1的部分只能提取到小数点后三位。 <br>
              3. 手续费：提现将收取手续费(手续费: 为0.001ETH)
            </template>
          </Alert>
          </Col>
          <Col class="input" span="8">
          <Input placeholder="请输入钱包地址" size="large" clearable style="marginBottom:1rem;" />
          <Input placeholder="请输入提现额度" size="large" clearable style="marginBottom:1rem;" />
          <Input placeholder="请输入提现密码" size="large" clearable />
          </Col>
          <Col span="8">
          <div class="balance">
            <div class="explain">
              <span>可提现余额</span>
              <Poptip trigger="hover" title="提现注意事项" content="内容" placement="top">
                <img src="../../../../assets/icons/earning/explain.svg">
              </Poptip>
            </div>
            <h1>1,23165516</h1>
            <Button type="error" long>我要提现</Button>
          </div>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  </Layout>
  <Layout style="padding:1rem;">
    <div id="myChart" :style="{width: '65rem', height: '32rem'}"></div>
  </Layout>
</div>
</template>
<script>
import Headbar from '#/headbar'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      modal: false,
      username: this.$store.state.username,
      usertelphone: this.$store.state.usertelphone,
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
      },
      earning: [{
        text: '账户余额',
        value: 2.13241,
        img: require('../../../../assets/icons/earning/earning-1.svg'),
      }, {
        text: '24H每M理论收益',
        value: 0.007935 + 'MH/s',
        img: require('../../../../assets/icons/earning/earning-2.svg'),
      }, {
        text: '累计收益',
        value: 0.26 + 'ETH',
        img: require('../../../../assets/icons/earning/earning-3.svg'),
      }, {
        text: '冻结资产 ',
        value: 0 + 'ETH',
        img: require('../../../../assets/icons/earning/earning-4.svg'),
      }, {
        text: '实时汇率',
        value: '1ETH≈$212.74',
        img: require('../../../../assets/icons/earning/earning-5.svg'),
      }, ]
    }
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          smooth: true,
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
          markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
              },
              {
                type: 'min',
                name: '最小值'
              }
            ]
          },
        }],
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {
              readOnly: false
            },
            magicType: {
              type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [{
          show: true,
          realtime: true,
          start: 30,
          end: 70,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
        }, ],
      });
    }
  },
  components: {
    Headbar,
  },
  mounted() {
    this.drawLine();
  },
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
