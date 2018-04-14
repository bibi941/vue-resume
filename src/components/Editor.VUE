<template>
  <div id='editor'>
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5,]" v-bind:class='{active:currentTab === i}' v-on:click='currentTab = i'>
          <svg class="icon" aria-hidden="true" style='width:35px;height:35px;'>
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class='{active:currentTab === 0}'>
        <ProfileEditor v-bind:profile='resume.profile' />
      </li>
      <li v-bind:class='{active:currentTab === 1}'>
        <ArrayEditor v-bind:items='resume.workHistory' v-bind:labels="{company:'公司',content:'内容'}" title='工作经历 '/>
      </li>
      <li v-bind:class='{active:currentTab === 2}'>
        <ArrayEditor v-bind:items='resume.studyHistory' v-bind:labels="{school:'学校',time:'时间',degree:'学历'}" title='学习经历' />
      </li>
      <li v-bind:class='{active:currentTab === 3}'>
        <ArrayEditor v-bind:items='resume.projects' v-bind:labels="{name:'项目名称',content:'具体内容'}" title='项目经验' />
      </li>
      <li v-bind:class='{active:currentTab === 4}'>
        <ArrayEditor v-bind:items='resume.awards' v-bind:labels="{name:'获奖详情'}" title='获奖情况' />
      </li>
      <li v-bind:class='{active:currentTab === 5}'>
        <h2>联系方式</h2>
        <el-form>
          <el-form-item label="qq">
            <el-input v-model="resume.contancts.name"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="resume.contancts.wechat"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="resume.contancts.email"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="resume.contancts.phone"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ol>
  </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor'
  import ArrayEditor from './ArrayEditor'
  
  export default {
    components: {
      ProfileEditor,
      ArrayEditor,
    },
    props:['resume'],
    data() {
      return {
        //   tab切换
        currentTab: 0,
        icons: ['credentials_icon', 'gongwenbao', 'book', 'xiangmu1', 'icon--', 'phone'],
      }
    },
    methods: {}
  }

</script>

<style lang='scss'>
  #editor {
    display: flex;
    min-height: 100px;
    >nav {
      background: rgb(59, 167, 118);
      width: 80px;
    }
    nav>ol>li {
      padding: 20px 0;
      text-align: center;
      >svg {
        fill: white;
        width: 30px;
        height: 30px;
      }
      &.active {
        background: white;
        >svg {
          fill: black;
        }
      }
    }
    .panes {
      flex: 1;
      >li {
        display: none;
        padding: 30px;
        height: 100%;
        overflow: auto;
        &.active {
          display: block;
        }
      }
    }
    .ArrayEditorContainer {
      position: relative;
      svg {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

</style>
