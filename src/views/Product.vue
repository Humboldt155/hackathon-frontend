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
                          <div class="card" style="max-width: 200px">
                              <div class="card-image">
                                  <figure class="image is-128x128">
                                      <img :src="current_product.product_url" alt="Placeholder image">
                                  </figure>
                              </div>
                              <div class="card-content has-text-left" style="text-align: left">
                                  <p>
                                      <span class="subtitle is-7">code:</span> <span class="title is-6 is-primary">{{ current_product.product }}</span>
                                  </p>
                                  <p>
                                      <span class="subtitle is-7">name:</span> <span class="title is-7 is-primary">{{ current_product.product_name }}</span>
                                  </p>
                                  <p>
                                      <span class="subtitle is-7">price:</span> <span class="title is-6 is-primary">{{ current_product.product_price }}</span>
                                  </p>
                                  <p>
                                      <span class="subtitle is-7">quartile:</span>
                                      <span v-if="current_product.product_quartile == current_quartile" class="button is-warning">{{ current_product.product_quartile }}</span>
                                      <span v-else class="button">{{ current_product.product_quartile }}</span>
                                  </p>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;
            <div class="column column is is-four-fifths">
<!------------------------------------------ Tabs  ---------------------------------->
                <b-tabs v-model="activeTab">
                    <b-tab-item label="complementary">
                            <table class="table"  >
                                <th> </th>
                                <th> </th>
                                <th style="min-width: 170px"> </th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                                <tbody>
                                <tr>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                </tbody>
                            </table>

                        <div style="overflow: auto; max-height: 600px">
                                <div class="tile is-vertical">
                                    <div v-for="model in current_complements">
                                        <br>
                                        <div class="subtitle">{{ model.model_name }}</div>
                                        <div class="tile box">
                                            <div class="columns">
                                                <div v-for="product in model.products" class="column">
                                                    <div class="card" style="max-width: 250px; ">
                                                        <!--<div class="card-image">-->
                                                            <!---->
                                                        <!--</div>-->
                                                        <div class="card-content has-text-left" style="text-align: left">
                                                            <figure class="image is-64x64">
                                                                <img :src="product.product_url" alt="Placeholder image">
                                                        </figure>
                                                        <p>
                                                            <span class="subtitle is-7">probability:</span> <span class="title is-7 is-primary">{{ Math.round(product.probability *100) / 100 }} %</span>
                                                        </p>
                                                        <p>
                                                            <span class="subtitle is-7">code:</span> <span class="title is-7 is-primary">{{ product.product }}</span>
                                                        </p>
                                                        <p>
                                                            <span class="subtitle is-7">name:</span> <span class="title is-7 is-primary">{{ product.product_name }}</span>
                                                        </p>
                                                        <p>
                                                            <span class="subtitle is-7">price:</span> <span class="title is-7 is-primary">{{ product.product_price }}</span>
                                                        </p>
                                                        <p>
                                                            <span class="subtitle is-7">quartile:</span>
                                                                <span v-if="product.product_quartile == current_quartile" class="button is-warning is-small">{{ product.product_quartile }}</span>
                                                                <span v-else class="button is-small">{{ product.product_quartile }}</span>
                                                            &nbsp;&nbsp;
                                                            <button class="button is-small is-rounded is-light" @click="sendCode(product.product, product.product_name, product.product_price)">
                                                            <b-tooltip label="Send to chat" position="is-right" type="is-light">
                                                                <b-icon
                                                                        icon="arrow-right"
                                                                        size="is-small">
                                                                </b-icon>
                                                            </b-tooltip>
                                                            </button>
                                                            &nbsp;&nbsp;
                                                            <button class="button is-small is-rounded is-light" @click="sendCode(product.product, product.product_name, product.product_price)">
                                                            <b-tooltip label="Send to chat" position="is-right" type="is-light">
                                                                <b-icon
                                                                        icon="arrow-right"
                                                                        size="is-small">
                                                                </b-icon>
                                                            </b-tooltip>
                                                            </button>
                                                        </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </b-tab-item>
<!------------------------------------------ Analogs  ---------------------------------->
                    <b-tab-item label="Analogs" class="has-text-left">
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
                                            <button class="button is-small is-rounded is-light" @click="sendCode(product.product, product.product_name, product.product_price)">
                                                <b-icon
                                                        icon="arrow-right"
                                                        size="is-small">
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
                                    <td v-if="product.product_quartile == current_quartile">
                                        <a class="button is-warning">{{ product.product_quartile }}</a>
                                    </td>
                                    <td v-else>
                                        <a class="button">{{ product.product_quartile }}</a>
                                    </td>
                                    <td>{{ product.stock['online'] }}</td>
                                    <td>{{ product.stock['clients_store'] }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-tab-item>
<!------------------------------------------ Product complementary  ---------------------------------->

                </b-tabs>
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
                checkboxGroup: [],
                // activeTab: "Analogs",
            }
        },
        methods: {
            getCurrentProduct(product_id) {
                this.$store.commit('current_product/getComplements', product_id)
                this.$store.commit('current_product/getCurrentProduct', product_id)
                // this.$store.commit('current_product/getCurrentAnalogs')
            },
            // getAnalogs () {
            //     this.$store.commit('current_product/getCurrentAnalogs')
            // },
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
            },
            current_quartile () {
                return this.$store.state.assistant.current_client.quartile
            },
            current_complements () {
                return this.$store.state.current_product.current_complements
            }
        }
    }
</script>

<style scoped>

</style>
