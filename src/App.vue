<template>
  <div id="app">
    <Topbar class="topbar"></Topbar>
    <main>
      <Editor class="editor"></Editor>
      <Preview class="preview"></Preview>
    </main>

  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
    components: {
        Topbar,
        Editor,
        Preview
    }
}
</script>

<style lang='scss'>
#app {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    display: flex;
    flex: 1;
    .editor,
    .preview {
        flex: 1;
    }
}
</style>
