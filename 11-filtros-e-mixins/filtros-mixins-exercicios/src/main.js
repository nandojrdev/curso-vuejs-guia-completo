import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Registrando o Filtro globalmente
Vue.filter('invert', (valor) => {
	// Transformando a string em Array, invertendo a ordem dos elementos do array e convertendo novamente para string
	return valor.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
