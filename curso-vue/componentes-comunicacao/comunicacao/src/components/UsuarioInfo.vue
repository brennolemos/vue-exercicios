<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        usuarioNome: {
            type: String,
            // required: true,
            default: 'Anônimo'
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
        }
    },
    methods: {
        inverterNome() {
            return this.usuarioNome.split('').reverse().join('');
        },
        reiniciarNome() {
            this.usuarioNome = 'Pedro'
            this.$emit('nomeMudou', this.usuarioNome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
