export default {
  data() {
    return {
      fruta: '',
      frutas: ['Banana', 'Maça', 'Laranja']
    }
  },
  methods: {
    addEl() {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  }
}