<template>
  <article class="product">
    <figure>
      <img :src="imgUrl" alt="product.name" />
    </figure>
    <h2>{{ product.name }}</h2>
    <h3>{{ product.price }}:-</h3>
    <a href="#" class="btn" @click.prevent="addToCart">Add to card</a>
  </article>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
  computed: {
    imgUrl() {
      return `${this.$store.state.apiUrl}/assets/${this.product.img}`
    }
  },
  methods: {
      addToCart() {
          this.$store.commit('addToCart', this.product)
      }
  }
};
</script>

<style lang="scss">

</style>