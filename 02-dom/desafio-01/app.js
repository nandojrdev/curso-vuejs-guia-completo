new Vue({
  el: '#desafio',
  data: {
    nome: 'Fernando',
    idade: 34,
    imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
  },
  methods: {
    multiplicaIdade() {
      const idade = this.idade * 3
      return idade
    },
    randomNumber() {
      return Math.random()
    },
  }
})