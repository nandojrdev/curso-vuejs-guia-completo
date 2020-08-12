new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
          alert('Fui Clicado!')
        },
        eventoKey(event) {
					this.valor = event.target.value
        }
    }
})