<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/products">Products</router-link>
      </nav>
      <Cart />
    </header>
    
    <router-view/>
  </div>
</template>

<script>
import Cart from '@/components/Cart'

export default {
  name: 'App',
  components: {
    Cart
  },
  beforeMount() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style lang="scss">
@import './scss/main'
</style>
