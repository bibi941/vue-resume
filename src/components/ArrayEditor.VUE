<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
      <div class='ArrayEditorContainer' v-for="(item,index) in items" v-bind:key="index">
        <el-form-item v-for="key in keys" v-bind:label="labels[key]||key" v-bind:key="key">
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <svg v-on:click="removeItems(index)" class="icon" aria-hidden="true" style='width:25px;height:25px;fill:#D74C78;'>
          <use xlink:href="#icon-delete"></use>
        </svg>
      </div>
      <el-button v-on:click="addItems" type="success" style='background:rgb(59, 167, 118);'>增加</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['items', 'labels', 'title'],
    computed: {
      keys() {
        return Object.keys(this.items[0]) //["company", "content"]
      }
    },
    methods: {
      addItems() {
        const empty = {}
        this.keys.map((key) => {
          empty[key] = ''
        })
        this.items.push(empty)
      },
      removeItems(index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>
