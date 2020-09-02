import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Criando filtro de forma Global
Vue.filter('contarCaracter', (valor) => {
	return valor.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
