<template>
    <section>
        <div class="columns">
            <div class="column is is-one-fifth">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical">
<!------------------------------------------ Поиск  ---------------------------------->
                      <div class="tile is-child box" style="height: 100px">
                          <b-field>
                            <b-input placeholder="product id..."
                                    type="search"
                                    icon="magnify"
                                    v-model="current_product_id"
                            >
                            </b-input>
                            <p class="control">
                                <button class="button is-primary" @click="getCurrentProduct(current_product_id)">Search</button>
                            </p>
                        </b-field>
                      </div>
<!------------------------------------------ Артикул  ---------------------------------->
                      <div class="tile is-child box">
                          <div class="subtitle">{{ current_product.product }}</div>
                          <img :src="current_product.product_url" alt="Placeholder image">
                      </div>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;
            <div class="column">
                <div class="tile is-ancestor">
                    <div class="tile is-child box">
<!------------------------------------------ Tabs  ---------------------------------->
                        <b-tabs v-model="activeTab">
<!------------------------------------------ Analogs  ---------------------------------->
                            <b-tab-item label="Analogs" class="has-text-left">
                                <span class="button is-rounded is-primary" @click="getAnalogs">
                                    update
                                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="block">
                                    <b-checkbox v-model="checkboxGroup" native-value="quartile">Same quartile</b-checkbox>
                                    <b-checkbox v-model="checkboxGroup" native-value="online">Available online</b-checkbox>
                                    <b-checkbox v-model="checkboxGroup" native-value="store">Available in store</b-checkbox>
                                    <!--<button class="button is-primary" @click="filterModel">same cat</button>-->
                                    <!--<b-checkbox v-model="checkboxGroup" native-value="model" @click="filterModel">Same category</b-checkbox>-->
                                </span>
                                <div style="overflow: auto; max-height: 400px">
                                    <table class="table"  >

                                        <th> </th>
                                        <th>Id</th>
                                        <th style="min-width: 170px">Photo</th>
                                        <th>Price</th>
                                        <th>Similarity</th>
                                        <th>Name</th>
                                        <th>Quartile</th>
                                        <th>Online, qty.</th>
                                        <th>Fav.store, qty.</th>
                                    <tbody>
                                        <tr v-for="product in current_analogs">
                                            <td>
                                                <b-tooltip label="Send to chat" position="is-right" type="is-light">
                                                    <button class="button is-small is-rounded is-primary" @click="sendCode(product.product, product.product_name, product.product_price)">
                                                        <b-icon
                                                            icon="arrow-right"
                                                            size="is-medium">
                                                        </b-icon>
                                                    </button>
                                                </b-tooltip>
                                            </td>
                                            <td>{{ product.product }}</td>
                                            <td>
                                                <img :src="product.product_url" alt="">
                                            </td>
                                            <td>{{ product.product_price }}</td>
                                            <td>{{ Math.round(product.probability * 100, -2) }} %</td>
                                            <td>{{ product.product_name }}</td>
                                            <td>{{ product.product_quartile }}</td>
                                            <td>{{ product.stock['online'] }}</td>
                                            <td>{{ product.stock['clients_store'] }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </b-tab-item>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
                current_product_id: '',
                checkboxGroup: []
            }
        },
        methods: {
            getCurrentProduct(product_id) {
                this.$store.commit('current_product/getCurrentProduct', product_id)
            },
            getAnalogs () {
                this.$store.commit('current_product/getCurrentAnalogs')
            },
            filterModel () {
                this.$store.commit('current_product/filterModel')
            },
            sendCode (code, name, price) {
                let c_client = this.$store.state.assistant.current_client.username
                this.$store.commit('conversations/sendCode', [c_client, code, name, price, 'me'])
            }
        },
        computed: {
            current_product () {
                return this.$store.state.current_product.current_product
            },
            current_analogs () {
                return this.$store.state.current_product.current_analogs
            }
        }
    }
</script>

<style scoped>

</style>
