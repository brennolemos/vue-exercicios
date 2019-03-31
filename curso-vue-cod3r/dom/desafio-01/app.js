new Vue({
    el: '#desafio',
    data: {
        nome: 'Breno Lemos',
        idade: '23',
        imagemSrc: 'https://images.unsplash.com/photo-1549033990-879289266301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80' 
    },
    methods: {
        random() {
            return Math.random().toFixed(2);
        }
    }
})