<template>
    <div :class="className">
        <div class="single-product-item">
            <div class="product-image">
                <nuxt-link :to="`/products-details/${product.id}`">
                    <img :src="product.image" :alt="product.name" />
                </nuxt-link>
                
                <div v-if="product.sale" class="sale-tag">Sale!</div>
            </div>

            <div class="product-content">
                <h3>
                    <nuxt-link :to="`/products-details/${product.id}`">
                        {{product.name}}
                    </nuxt-link>
                </h3>

               <div class="product-price">
                    <span class="old-price" v-if="product.offer">
                        ${{ product.price - product.offerPrice }}
                    </span>
                    <span class="new-price">${{ product.price }}</span>
                </div>

                <div class="row align-items-end">
                    <div class="col-lg-7 col-md-6 col-7">
                        <a
                            v-if="getExistPId === product.id"
                            href="javascript:void(0)"
                            class="btn btn-light added-btn"
                            @click="addToCart(product)"
                        >
                            Added Already!
                        </a>

                        <a
                            v-else
                            href="javascript:void(0)"
                            class="btn btn-light"
                            @click="addToCart(product)"
                        >
                            Add to Cart
                        </a>
                    </div>

                    <div class="col-lg-5 col-md-6 col-5">
                        <ul>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    title="Quick View"
                                    v-b-tooltip.hover
                                    @click.prevent="quickView"
                                >
                                    <i class="far fa-eye"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Add to Wishlist" v-b-tooltip.hover>
                                    <i class="far fa-heart"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpecialOfferItem',
    data() {
        return {
            getExistPId: null,
        }
    },
    props: ['product', 'className'],
    computed: {
        cart() {
            return this.$store.getters.cart
        },
    },
    methods: {
        quickView(e) {
            this.$emit('clicked')
        },
        addToCart(item) {
            const product = [
                {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                },
            ]

            if (this.cart.length > 0) {
                let id = item.id
                this.getExistPId = id
                let cartIndex = this.cart.findIndex((cart) => {
                    return cart.id == id
                })

                if (cartIndex == -1) {
                    this.$store.dispatch('addToCart', product)
                    this.$toast('Added to cart', {
                        icon: 'fas fa-cart-plus',
                    })
                } else {
                    this.$store.dispatch('updateCart', {
                        id,
                        unit: 1,
                        cart: this.cart,
                    })
                    this.$toast.info('Already added to the cart and update with one')
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast('Added to cart', {
                    icon: 'fas fa-cart-plus',
                })
            }
        },
    },
}
</script>