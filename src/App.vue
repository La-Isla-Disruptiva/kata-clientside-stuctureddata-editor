<script setup>
import Editor from './components/Editor.vue';
const saveValue = value => {
  alert(value);
}
</script>

<template>
  <div class="container">
    <div class="center-template">
      <h1>Structure data architecture</h1>
      <Editor/>
      
    </div>
  </div>    
</template>

<style scoped>
  .center-template {
    padding: 40px 15px;
    text-align: center;
  }
</style>


