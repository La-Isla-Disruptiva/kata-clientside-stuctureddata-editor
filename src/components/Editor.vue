<script setup>
import List from './List.vue';
import apiModule from "../actions"
const api = new apiModule(); 

const validateYaml = event => {
        const text=event.target.value;
        try{
          if(api.validateYaml(text)){
            event.target.style.borderColor = "green"
          }else{
            event.target.style.borderColor = "red"
          }
        }catch(err){
          console.log("El schema no es un yaml válido")
        }
    }
</script>

<script>

export default {
  name: 'Form',
  data(){
    return{
      textareaYaml: '',
    }
  }
}
</script>

<template>
  <h5>Registro</h5>
  <textarea class="form-control pt-4 textarea-yaml" 
            v-model="textareaYaml"
            placeholder="Ingresa un contenido en formato de yaml schema"
            @keyup="validateYaml"></textarea>
  
          
  <List />
</template>

<style scoped>
.textarea-yaml{
  width: 100%;
  height: 25vh;
  padding: 20px;
  outline: none;
}

.btn-success{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>