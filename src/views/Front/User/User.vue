
<template>
<div class="layout">
  <!-- <Header></Header> -->
  <Layout>
    <section id="introduce">
      <Content class="contentPadding">
        <Row type="flex" justify="center">
          <Col>
          <img style="margin-bottom:2rem" src="../../../assets/icon/UserLogo.png" alt="asd" title="币势得">
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col :xs="22" :sm="14" :md="14" :lg="10">
          <Card style="width:100%">
            <Tabs value="name1" :animated="false">
              <TabPane label="登录" name="name1">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="填写手机号">
                    </Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="填写密码">
                    </Input>
                  </FormItem>
                  <FormItem>
                    <drag-verify :width="width" :height="height" :text="text" :success-text="successText" :background="background" :progress-bar-bg="progressBarBg" :completed-bg="completedBg" :handler-bg="handlerBg" :handler-icon="handlerIcon" :text-size="textSize" :success-icon="successIcon"
                      :circle="isCircle" @passcallback="haha"></drag-verify>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" long>登录</Button>
                  </FormItem>
                  <FormItem>
                    <span>下一次自动登录</span>
                    <span>忘记密码</span>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="注册" name="name2">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" long>登录</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="登录" name="name3">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" long>登录</Button>
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
          </Card>
          </Col>
        </Row>
      </Content>
    </section>
  </Layout>

</div>
</template>

<script>
import Header from '#/header'
import Footer from '#/footer'
import dragVerify from 'vue-drag-verify'
import {
  getToken,
  setToken
} from '@/libs/util'
export default {
  data() {
    return {
      handlerIcon: "fa fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#c9c9c9",
      progressBarBg: "#e74c3c",
      completedBg: "#66cc66",
      handlerBg: "#fff",
      text: "请将滑块拖动到右侧",
      successText: "验证成功",
      width: 350,
      height: 40,
      textSize: "16px",
      isCircle: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [{
          required: true,
          message: '币势得: 用户名不能为空!',
          trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '币势得: 密码不能为空!',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '币势得: 密码长度不能低于6位!',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    haha() {
      alert("验证通过!")
    }
  },
  components: {
    Header,
    Footer,
    dragVerify,
  },
  mounted() {

  }
}
</script>

<style scoped lang="less">
@import './index.less';
</style>
