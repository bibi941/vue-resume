<template>
  <div id='topbar'>
    <div class='logo'>
      VueResumer
    </div>
    <div class="actions">
      <el-button type="primary" style='background:rgb(59, 167, 118);'>注册</el-button>
      <el-button>登录</el-button>
      <el-button v-on:click="preview">预览</el-button>
    </div>
  </div>
</template>

<style lang='scss'>
  #topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: rgb(241, 255, 252);
  }

  .logo {
    font-size: 20px;
    color: rgb(0, 0, 0);
  }

</style>

<script>
export default {
  methods:{
    preview(){
      this.$emit('preview')
    }
  }
}
</script>

