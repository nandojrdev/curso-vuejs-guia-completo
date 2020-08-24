<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    incrementar() {
      this.contador++
    },
    decrementar() {
      this.contador--
    }
  }
}
</script>


<style scoped>
/* Definindo scoped, informa que essas regras css somente funcionarão no componente, não vazendo o escopo */
  span {
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 20px;
  }

  button {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
  }
</style>