import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	// Pode receber 3 parametros: (el, binding, vnode)
	bind(el, binding) {
		// Informando a cor do BGC que será usada
		// el.style.backgroundColor = 'lightgreen'
		
		// Utilizando o parametro binding para que a cor seja informada como string direto no el que receberá a diretiva
		// el.style.backgroundColor = binding.value

		// Criando argumento para passar no elemento que receberá a diretiva
		if (binding.arg === 'fundo') {
			el.style.backgroundColor = binding.value
		} else {
			el.style.color = binding.value
		}

		// Setando um modificador para ser usado na diretiva personalizada
		let atraso = 0
		
		if (binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			el.style.backgroundColor = 'purple'
		}, atraso)
	}	
})

new Vue({
	render: h => h(App),
}).$mount('#app')
