<script setup>
import Editor from './components/Editor.vue';
const saveValue = value => {
  alert(value);
}
</script>

<template>
  <div class="container">
    <div class="starter-template">
      <h1>App One con Vue</h1>
      <Editor/>
      
    </div>
  </div>    
</template>

<style scoped>
  .starter-template {
    padding: 40px 15px;
    text-align: center;
  }
</style>


