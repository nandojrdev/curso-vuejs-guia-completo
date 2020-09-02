export default {
  computed: {
		// Realizando o mesmo efeito do filtro espacoPorVirgula, mas como uma propriedade computada
		fraseComVirgulas() {
			return this.frase.replace(/ /g, ',')
		},
		// Realizando o mesmo efeito do filtro contarCaracter, mas como uma propriedade computada
		fraseComTamanhos() {
			return this.frase.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ')
		}
	}
}