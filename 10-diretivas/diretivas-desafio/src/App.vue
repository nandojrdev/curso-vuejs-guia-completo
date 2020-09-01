<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<!-- Diretiva sem o uso de argumentos -->
		<!-- <button v-action="acao">Executar (No Args)</button> -->
		<button v-action:click="acao">Executar (Args)</button>
	</div>
</template>

<script>
export default {
	directives: {
		action: {
			bind(el, binding) {
				// Sem argumento
				// el.onclick = () => {
					// binding.value()
				// }

      const tipoEvento = binding.arg
      const fn = binding.value
      el.addEventListener(tipoEvento, fn)

			}
		}
	},
	methods: {
		acao() {
			alert('Ação Executada!')
		}
	}
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
