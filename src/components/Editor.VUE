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
        <ProfileEditor v-bind:profile='profile' />
      </li>
      <li v-bind:class='{active:currentTab === 1}'>
        <WorkHistory v-bind:workHistory='workHistory' />
      </li>
      <li v-bind:class='{active:currentTab === 2}'>
        <h2>学习经历</h2>
      </li>
      <li v-bind:class='{active:currentTab === 3}'>
        <h2>项目经验</h2>
      </li>
      <li v-bind:class='{active:currentTab === 4}'>
        <h2>获奖情况</h2>
      </li>
      <li v-bind:class='{active:currentTab === 5}'>
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor'
  import WorkHistory from './WorkHistory'
  export default {
    components: {
      ProfileEditor,
      WorkHistory
    },
    data() {
      return {
        //   tab切换
        currentTab: 0,
        icons: ['credentials_icon', 'gongwenbao', 'book', 'xiangmu1', 'icon--', 'phone'],
        // 表单数据
        profile: {
          name: '',
          city: '',
          bitrh: ''
        },
        workHistory: [{
          company: '',
          content: ''
        }]
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
    .workContainer {
      position: relative;
      svg {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

</style>
