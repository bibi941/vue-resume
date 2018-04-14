<template>
  <div id='preview'>
    <h1>{{resume.profile.name||'姓名'}}</h1>
    <p>{{resume.profile.city||'城市'}} | {{resume.profile.birth||'出生年月'}}</p>
    <hr>
    <section v-if="filter(resume.projects).length>0"><!-- 非空对象才会显示 -->
      <h1>项目</h1>
      <ul>
        <li v-for="projects in filter(resume.projects)">
          <h2>{{projects.name}}</h2><br/>
          {{projects.content}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
 props:['resume'],
 methods:{
   filter(array){
     return array.filter(item=>!this.isEmpty(item))//找出非空对象
   },
   isEmpty(obj){
     let empty=true
     for (let key in obj) {
       if (obj[key]) {
         empty=false
         break
       }
     }
     return empty
   }
 }
}
</script>

