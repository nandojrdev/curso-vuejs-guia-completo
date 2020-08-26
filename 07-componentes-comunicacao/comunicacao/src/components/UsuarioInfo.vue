<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
				<p>Idade do Usuário: <strong>{{ idade }}</strong></p>

				<button @click="reiniciarNome">Reiniciar Nome</button>
				<button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
	props: {
		nome: {
			// Informando o tipo esperado
			type: String,
			
			// Informa se é obrigatório ou não
			// required: true,

			// Seta um valor default para o caso de não ser informado
			default: 'Anônimo'

			// Default também pode receber uma função
			// default: () => {
			// 	return Array(5).fill(0).join(',')
			// }
		},
		// Passando uma callback como prop para alterar dados do componente pai 
		reiniciarFn: Function,
		idade: Number,
	},
	methods: {
		inverterNome() {
			return this.nome.split('').reverse().join('')
		},
		reiniciarNome() {
			this.nome = 'Pedro'
			// Criando evento persolinalizado para ser usado no componente pai
			this.$emit('nomeMudou', this.nome)
		}
	},
	created() {
		barramento.quandoIdadeMudar(idade => {
			this.idade = idade
		})
	}
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
