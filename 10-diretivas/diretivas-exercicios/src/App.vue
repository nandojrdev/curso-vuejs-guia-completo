<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<!-- Usando a cor informada na criação da diretiva -->
		<!-- <p v-destaque>Usando diretiva personalizada (el)</p> -->

		<!-- Usando o parametro binding para setar a cor que eu informar (como string) -->
		<!-- <p v-destaque="'blue'">Usando diretiva personalizada (el, binding)</p> -->

		<!-- Usando a diretiva para interpretar um valor dentro de data() -->
		<!-- <p v-destaque="color">Usando diretiva personalizada interpretando valor em data()</p> -->

		<!-- Criando elemento com argumento na diretiva -->
		<!-- <p v-destaque:fundo="'yellow'">Usando Args no BGC</p> -->
		<!-- <p v-destaque="'yellow'">Usando Args no Color</p> -->

		<!-- Aplicando modificadores na diretiva personalizada -->
		<p v-destaque:fundo.atrasar="color">Usando Args no BGC</p>

		
	</div>
</template>

<script>
export default {
	data() {
		return {
			color: 'orange'
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

</style>
