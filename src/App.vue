<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
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
</style>
