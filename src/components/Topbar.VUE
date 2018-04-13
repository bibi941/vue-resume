<template>
  <div id='topBar'>
    <div class='logo'>
      VueResumer
    </div>
    <div class="actions">
      <el-button type="primary" style='background:rgb(59, 167, 118);'>注册</el-button>
      <el-button>登录</el-button>
    </div>
  </div>
</template>

<style lang='scss'>
  #topBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .logo {
    font-size: 20px;
  }

</style>
