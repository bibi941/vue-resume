<template>
  <div id='preview'>
    <!-- 个人信息 -->
    <section>
      <span class='name'>{{resume.profile.name}}</span>
      <span class='message'>{{resume.profile.city}} | {{resume.profile.birth}}</span>
      <hr>
    </section>

    <!-- 学习经历 -->
    <section v-if="filter(resume.studyHistory).length>0">
      <h1>学习经历</h1>
      <hr>
      <ul>
        <li v-for="studyHistory in filter(resume.studyHistory)">
          <span>学校名称：{{studyHistory.school}}</span>
          <span>毕业时间：{{studyHistory.time}}</span>
          <span>学历：{{studyHistory.degree}}</span>
        </li>
      </ul>
    </section>
    <!-- 获奖情况 -->
    <section v-if="filter(resume.awards).length>0">
      <h1>获奖情况</h1>
      <hr>
      <ul>
        <li v-for="awards in filter(resume.awards)">
          <span> 奖项名称：{{awards.name}}</span>
          <span>获奖时间：{{awards.time}}</span>
          <span>获奖内容:{{awards.content}}</span>
        </li>
      </ul>
    </section>
    <!-- 工作经历 -->
    <section v-if="filter(resume.workHistory).length>0">
      <h1>工作经历</h1>
      <hr>
      <ul>
        <li v-for="workHistory in filter(resume.workHistory)">
          <span>公司名称：{{workHistory.company}}</span>
          <span>工作内容：{{workHistory.content}}</span>

        </li>
      </ul>
    </section>
    <!-- 项目 -->
    <section v-if="filter(resume.projects).length>0">
      <!-- 非空对象才会显示 -->
      <h1>项目</h1>
      <hr>
      <ul>
        <li v-for="projects in filter(resume.projects)">
          <span>项目名称:{{projects.name}}</span>
          <span>项目内容:{{projects.content}}</span>
        </li>
      </ul>
    </section>
    <!-- 联系方式 -->
    <section>
      <h1>联系方式</h1>
      <hr>
      <span>qq:{{resume.contancts.qq}}</span>
      <span>微信：{{resume.contancts.wechat}}</span>
      <span>邮箱：{{resume.contancts.email}}</span>
      <span>手机：{{resume.contancts.phone}}</span>
    </section>

  </div>
</template>

<script>
  export default {
    computed: {
      resume() {
        return this.$store.state.resume
      }
    },
    methods: {
      filter(array) {
        return array.filter(item => !this.isEmpty(item)) //找出非空对象
      },
      isEmpty(obj) {
        let empty = true
        for (let key in obj) {
          if (obj[key]) {
            empty = false
            break
          }
        }
        return empty
      }
    }
  }

</script>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    padding: 15px 40px;
    .name {
      font-size: 80px;
    }
    .message {
      font-size: 30px
    }
    span {
      font-size: 20px;
      padding: 5px;
    }
    h1 {
      max-width: 150px;
      text-align: center;
      overflow: auto;
      background: rgb(160, 243, 206);
      color: rgb(116, 116, 116);
      margin: 10px 0;
    }
    ul>li {
      display: flex;
      flex-direction: column;
    }
  }
  #preview {
    overflow: auto;
  }
  span {
    white-space: pre-line;
  }

</style>
