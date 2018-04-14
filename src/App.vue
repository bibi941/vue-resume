<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar  class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume='resume' class="editor" />
      <Preview  v-bind:resume='resume' class="preview" />
    </main>
     <el-button type="primary" v-on:click='exitPreview' class="exitPreview" style='background:rgb(59, 167, 118);'>退出预览</el-button>
  </div>
  
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    data() {
      return {
        previewMode:false,
        resume: {
          // 表单数据
          profile: {  name: '',  city: '',  birth: ''},
          workHistory: [{  company: '',  content: '',}],
          studyHistory: [{  school: '',  time: '',  degree: '', }],
          projects: [{  name: '',  content: ''}],awards: [{  name: ''}],
          contancts: {  qq: '',  wechat: '',  email: '',  phone: '',}
        }
      }
    },
    methods:{
        preview(){
            this.previewMode = true
        },
        exitPreview(){
          this.previewMode = false
        }
    },
    components: {
      Topbar,
      Editor,
      Preview
    }
  }
</script>

<style lang='scss'>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .topbar {
    box-shadow: (0 0 5px)hsla(0, 0, 0, 0.5);
    z-index: 1;
  }

  main {
    display: flex;
    flex: 1;
    background: rgb(247, 247, 247);
    .editor {
      width: 40rem;
      margin: 20px 10px 20px 20px;
      background: white;
      box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.5);
      border-radius: 5px;
      overflow: auto;
    }
    .preview {
      flex: 1;
      margin: 20px 20px 20px 10px;
      background: white;
      box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.5);
      border-radius: 5px;
      overflow: hidden;
    }
  }
  .previewMode>#topbar{
        display: none; 
  }
  .previewMode #editor{
       display: none; 
  }
  .previewMode #preview{
      max-width: 960px;
      margin: 40px auto;
  }
  .exitPreview{
    display: none;
  }
  .previewMode .exitPreview{
  display: inline-block;
  position: fixed;
  right: 20px;
  bottom: 20px;
  }
</style>
