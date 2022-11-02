<script setup>
import List from './List.vue';
import apiModule from "../actions"
const api = new apiModule(); 

const validateYaml = event => {
  let title = document.querySelector('[name="editor-title"]').value;
  let contents = document.querySelector('[name="contents"]').value;
  let annotation=event.target.value;
  try{
    if(api.validateYaml(annotation)){
      event.target.style.borderColor = "green"
      console.log(contents);
      if(api.validateMarkdown(contents)){
        api.addItemToDB(title,annotation,contents)
      }
    }else{
      event.target.style.borderColor = "red"
    }
  }catch(err){
    console.log(err);
  }
}

 const cleanInputs = () => {
  let title = document.querySelector('[name="editor-title"]');
  let annotation = document.querySelector('[name="annotation"]');
  let contents = document.querySelector('[name="contents"]');
  title.value = '';
  annotation.value = ''
  contents.value = '';
}

const validateMarkdown = event => {
  let title = document.querySelector('[name="editor-title"]').value;
  let contents = event.target.value;
  let annotation= document.querySelector('[name="annotation"]').value;
  try{
    if(api.validateMarkdown(contents)){
      event.target.style.borderColor = "green"
      if(api.validateYaml(annotation)){
        api.addItemToDB(title,annotation,contents)
        cleanInputs();      
      }
    }else{
      event.target.style.borderColor = "red"
    }
  }catch(err){
    console.log(err);
  }
}    
</script>

<script>

export default {
  name: 'Form',
  data(){
    return{
      textareaYaml: '',
      textareaMarkdown: '',
    }
  }
}
</script>

<template>
  <h5>Registro</h5>
  <!--Anotation validate yaml-->
  <div class="form-group">
    <label for="editor-title">Título</label>
    <input name="editor-title" class="form-control" />
  </div>  
  <div class="form-group">
    <label for="annotation">Anotación</label>
    <textarea name="annotation" 
            class="form-control pt-4 textarea-document" 
            v-model="textareaYaml"
            placeholder="Ingresa un contenido en formato de yaml:
            name: myname,
            email: myemail@email.com,
            password: qwwerty123"
            @keyup="validateYaml"></textarea>
  </div>  
  <!--Anotation validate with markdown-->
  <div class="form-group">
    <label for="contents">Contenido</label>
    <textarea name="contents" 
            class="form-control pt-4 textarea-document" 
            v-model="textareaMarkdown"
            placeholder="Ingresa un contenido markdown"
            @keyup="validateMarkdown"></textarea>
  </div>      
  <List />
</template>

<style scoped>
.textarea-document{
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