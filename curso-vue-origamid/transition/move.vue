<template>
  <div>
    <button @click="filtroAZ">A - Z</button>
    <button @click="filtroZA">Z - A</button>
    <transition-group tag="ul">
      <li v-for="(filme) in filmes" :key="filme">{{filme}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [
        "O Senhor dos Anéis",
        "As Crônicas de Nárnia",
        "Star Wars",
        "Coração Valente"
      ]
    };
  },
  methods: {
    filtroAZ() {
      this.filmes.sort();
    },
    filtroZA() {
      this.filmes.sort().reverse();
    }
  }
};
</script>

<style>
.v-move {
  transition: all 0.3s;
}

ul {
    list-style: none;
}

li {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>
