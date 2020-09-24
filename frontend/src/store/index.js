import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'
import router from './../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:8000',
    products: Array,
    cart: [],
    confirmed: Object,
    ui: {
      showCart: false
    }
  },
  mutations: {
    toggleCart(state) {
      state.ui.showCart = !state.ui.showCart
    },
    updateProducts(state, data) {
      state.products = data.products
    },
    addToCart(state, product) {
      let cartItem = state.cart.find(item => item.id == product.id);

      if(cartItem) {
        cartItem.quantity++
        this.totalPrice = (cartItem.quantity * cartItem.price)
        
      } else {
        state.cart.push(product);
        Vue.set(product, 'quantity', 1)
      }
    },
    orderConfirmed(state, confirm) {
      state.confirmed = confirm.data
    },
    emptyCart(state) {
      state.cart = []
      router.push('/confirmation')
    },
  },
  actions: {
    async fetchProducts(ctx) {
      try {
        let resp = await fetch(`${ctx.state.apiUrl}/products`)
        let data = await resp.json()
        ctx.commit('updateProducts', data)
      } catch (err) {
        console.log(err)
      }
    },
    async sendOrder(ctx) {
      let data = await ax.post(`${ctx.state.apiUrl}/orders`, {
        items: ctx.state.cart
      })
      
      ctx.commit('orderConfirmed', data)
      ctx.commit('emptyCart')
      ctx.commit('toggleCart')
    }
  },
  getters: {
    products: state => {
      return state.products
    },
    totalPrice(state) {
      let items = state.cart.map(item => {
        return item.quantity * item.price
      })
      return items.reduce(function(price, product) {
        return price + product;
      }, 0)
    }
  }
})
