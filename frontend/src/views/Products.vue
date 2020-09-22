<template>
  <main id="products">
    <h1>Products</h1>
    <Product v-for="item in products" :key="item.id" :product="item" />
  </main>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'Products',
  components: {
    Product
  },
  computed: {
    products() {
      return this.$store.getters.products
    }
  }
}
</script>

<style lang="scss">

</style>