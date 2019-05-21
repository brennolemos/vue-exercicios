<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>{{simbolo}}</p>
      <div>{{acao}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      loading: true,
      acao: null
    };
  },
  methods: {
    puxarAcao(simbolo) {
      this.loading = true;
      this.acao = null;
      fetch(`https://api.iextrading.com/1.0/stock/${simbolo}/quote`)
        .then(r => r.json())
        .then(r => {
          this.acao = r;
          this.loading = false;
        });
    }
  },
  created() {
    this.puxarAcao(this.simbolo);
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarAcao(to.params.simbolo);
    next();
  }
};
</script>

<style>
</style>
