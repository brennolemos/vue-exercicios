<template>
  <div>
    <button @click="estoque++">Adicionar Estoque</button>
    <button @click="estoque = 0">Deletar Estoque</button>
    <transition mode="out-in">
      <p v-if="estoque > 0" key="estoque">{{estoque}} Itens em estoque</p>
      <p v-else key="esgotado">Produto fora de estoque</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estoque: 0
    };
  }
};
</script>

<style>

.v-enter-active,
.v-leave-active {
    transition: opacity .3s;
}

.v-enter,
.v-leave-to {
    opacity: 0;
}

</style>
