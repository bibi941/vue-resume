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
      <li v-bind:class='{active:currentTab === 0}'>tab1</li>
      <li v-bind:class='{active:currentTab === 1}'>tab2</li>
      <li v-bind:class='{active:currentTab === 2}'>tab3</li>
      <li v-bind:class='{active:currentTab === 3}'>tab4</li>
      <li v-bind:class='{active:currentTab === 4}'>tab5</li>
      <li v-bind:class='{active:currentTab === 5}'>tab6</li>
    </ol>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentTab: 0,
        icons:['credentials_icon','gongwenbao','book','xiangmu1','icon--','phone']
      }
    }
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
      >li {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }

</style>
