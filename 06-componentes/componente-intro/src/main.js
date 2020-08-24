import Vue from 'vue'
import App from './App.vue'

// Importanto o componente Contadores para registrar de forma GLOBAL!
import Contadores from './Contadores.vue'

Vue.config.productionTip = false
// Registrando o componente Contadores de forma GLOBAL
Vue.component('Contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
