import DolarHoje from './DolarHoje.js';

export default {
    name: 'AcaoHoje',
    data() {
        return {
            valorMercado: 0
        }
    },
    methods: {
        puxarAcao() {
            fetch('https://api.iextrading.com/1.0/stock/aapl/quote')
                .then(r => r.json())
                .then(r => {
                    this.valorMercado = r.marketCap;
                })
        }
    },
    components: {
        DolarHoje
    },
    template: `
        <div>
            <p>Valor da Apple: {{valorMercado}}</p>
            <dolar-hoje></dolar-hoje>
        </div>
    `,
    created() {
        this.puxarAcao();
    }
}