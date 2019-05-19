<template>
  <div>
    <h2>Curso ativo: {{curso}}</h2>
    <router-link to="/cursos/javascript">JavaScript</router-link>
    <router-link to="/cursos/html">HTML</router-link>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style>
</style>
