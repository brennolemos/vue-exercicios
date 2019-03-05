<template>
	<v-app>
		<app-menu />
		<toolbar />
		<carousel />
		<app-footer />
		
	</v-app>
</template>

<script>
import Menu from './Menu.vue'
import Toolbar from './Toolbar.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'

export default {
	components: {
		'app-menu': Menu,
		toolbar: Toolbar,
		carousel: Carousel,
		'app-footer': Footer
	}
}
</script>
