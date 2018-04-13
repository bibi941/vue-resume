<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class='workContainer' v-for="(work,index) in workHistory">
        <el-form-item label="公司">
          <el-input v-model=" work.company"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model=" work.content"></el-input>
        </el-form-item>

        <svg v-on:click="removeHistory(index)" class="icon" aria-hidden="true" style='width:25px;height:25px;fill:#D74C78;'>
          <use xlink:href="#icon-delete"></use>
        </svg>
      </div>
      <el-button v-on:click="addWorkHistory" type="success" style='background:rgb(59, 167, 118);'>增加</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['workHistory'],
    methods: {
      addWorkHistory() {
        this.workHistory.push({
          company: '',
          content: ''
        })
      },
      removeHistory(index) {
        this.workHistory.splice(index, 1)
      }
    }
  }

</script>
