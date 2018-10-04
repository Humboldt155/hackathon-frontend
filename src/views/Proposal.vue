<template>
    <div>
        <div style="overflow: auto; max-height: 400px">
            <div class="tile is-ancestor">
                <div class="tile is-vertical">
                    <div v-for="model in current_complements">
                        <br>
                        <div class="subtitle">{{ model.model_name }}</div>
                        <div class="tile box">
                              <div class="columns">
                                <div v-for="product in model.products" class="column">
                                    <div class="card" style="max-width: 200px">
                                        <div class="card-image">
                                            <figure class="image is-128x128">
                                              <img :src="product.product_url" alt="Placeholder image">
                                            </figure>
                                        </div>
                                        <div class="card-content has-text-left" style="text-align: left"></div>
                                            <p>
                                                <span class="subtitle is-6">probability:</span> {{ Math.round(product.probability *100) / 100 }} %
                                            </p>
                                            <p>
                                                <span class="subtitle is-6">code:</span> {{ product.product }}
                                            </p>
                                            <p>
                                                <span class="subtitle is-6">name:</span> {{ product.product_name }}
                                            </p>
                                            <p>
                                                <span class="subtitle is-6">price:</span> {{ product.product_price }}
                                            </p>
                                            <p>
                                                <span class="subtitle is-6">quartile:</span> {{ product.product_quartile }}
                                            </p>
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--{{ current_complements }}-->
    </div>
</template>

<script>
    export default {
        name: "Proposal",
        computed: {
            current_complements () {
                return this.$store.state.current_product.current_complements
            }
        }
    }
</script>

<style scoped>

</style>
