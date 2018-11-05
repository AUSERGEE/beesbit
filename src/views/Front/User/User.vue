
<template>
<div class="layout">
  <Header></Header>
  <Layout>
    <section id="introduce">
      <Content class="contentPadding">
        <Row type="flex" justify="center">
          <Col>
          <Card style="width:350px">
            <p slot="title">
              登录注册
            </p>
            <Tabs value="name1">
              <TabPane label="标签一" name="name1">
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
                    <Button type="primary">登录</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="标签二" name="name2">
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
                    <Button type="primary">登录</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="标签三" name="name3">
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
                    <Button type="primary">登录</Button>
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
  components: {
    Header,
    Footer,
  },
  mounted() {}
}
</script>

<style scoped>
@import './index.less';
</style>
