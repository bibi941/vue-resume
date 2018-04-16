import Vuex from 'vuex'
import Vue from 'vue' 
  

 Vue.use(Vuex) 
 
 export default new Vuex.Store({
    state: {
         resume: {
          // 表单数据
          profile: {  name: 'bibi',  city: 'ChengDu',  birth: '1994.08.24'},
          workHistory: [{company: 'biubiubiu',  content: '我的第一份工作是biubiu科技,在公司啥都做'}],
          studyHistory: [{  school: '四川大学',  time: '2017.6',  degree: '本科', }],
          projects: [{ name: '修建鸟巢', content: '耗时一天' }],
          contancts: {qq:'506206862', wechat:'sssrrr', email:'sssrrr@vip.qq.com', phone:'17608003060', },
          awards:[{name:'康师傅冰红茶',time:'去年',content:'再来一瓶'},{name:'华阳凌晨3点半跑步比赛',time:'2020',content:'第2名'}]
        }
   },
})