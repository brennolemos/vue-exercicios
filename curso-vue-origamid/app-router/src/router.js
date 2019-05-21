import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cursos from './views/Cursos.vue';
import Acoes from './views/Acoes.vue';
import AcoesDados from './views/AcoesDados.vue';

Vue.use(Router);

export default new Router({
    base: 'app',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/acoes',
            component: Acoes,
            children: [
                {
                    path: ':simbolo',
                    component: AcoesDados,
                    props: true
                }
            ]
        },
        {
            path: '/cursos',
            component: Cursos,
            props: true,
            children: [
                {
                    path: ':curso',
                    component: Cursos,
                }
            ]
        },

    ]
})