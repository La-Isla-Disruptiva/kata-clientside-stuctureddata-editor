<script setup>
  import apiModule from "../actions";
  const api = new apiModule();
  let documents = api.getItemsFromDB();
</script>

<template>
  <div>
    <br />
    <h6>Mis yaml schemas</h6>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contenido</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in documents" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.title }}</td>
          <td>
            <div className="btn-group" role="group" aria-label="Acciones">
              <!--<button className="btn btn-primary" title="Editar documento">Editar</button>-->
              <button className="btn btn-dark" @click="api.deleteItemFromDB(item.id)" title="Eliminar documento">Eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>