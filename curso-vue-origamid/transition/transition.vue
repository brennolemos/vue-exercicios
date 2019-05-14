<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition name="fade">
      <h1 v-if="ativo">Seriços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
