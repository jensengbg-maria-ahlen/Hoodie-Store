<template>
  <article id="confirmation">
      <h1>{{confirmed.msg}}</h1>
      <p>Order Number: {{confirmed.orderNr}} </p>
  </article>
</template>

<script>
export default {
    name: 'Confirmaton',
    computed: {
        confirmed() {
            return this.$store.state.confirmed
        }
    }
}
</script>

<style>

</style>