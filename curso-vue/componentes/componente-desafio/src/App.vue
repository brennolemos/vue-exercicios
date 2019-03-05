<template>
	<v-app>
		<app-menu />
		<toolbar />
		<carousel />
		<app-footer />
		
	</v-app>
</template>

<script>
import Menu from './components/template/Menu.vue'
import Toolbar from './components/template/Toolbar.vue'
import Carousel from './components/widgets/Carousel.vue'
import Footer from './components/template/Footer.vue'

export default {
	components: {
		'app-menu': Menu,
		toolbar: Toolbar,
		carousel: Carousel,
		'app-footer': Footer
	}
}
</script>
