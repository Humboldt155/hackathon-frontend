<template>
  <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <span class="title is-5" style="color: #029e9a">Magic Hat</span>
            </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
      <br>
      <br>
     <div v-if="!is_activated" class="tile is-ancestor">
         <div class="tile box">
             <p class="subtitle">Identify the client</p>
             <div class="has-text-left">
                    <b-field label="by Telephone number">
                        <b-input placeholder="Telephone"
                            icon="phone">
                        </b-input>
                    </b-field>
                    <b-field label="by Email">
                        <b-input placeholder="Email"
                            icon="email">
                        </b-input>
                    </b-field>
                 <b-field label="by Loyalty card number">
                     <b-input
                             placeholder="Loyalty card №"
                              icon="credit-card">
                            </b-input>
                        </b-field>
                 <b-field label="Scan loyalty card">
                     <a class="button is-info is-outlined" style="width: 100%">
                         <b-icon
                                 icon="camera">
                         </b-icon>
                     </a>
                 </b-field>
             </div>
             <br>
             <br>
             <a class="button is-primary is-outlined" @click="activate">accept</a>  &nbsp;&nbsp;&nbsp;<a class="button is-primary is-warning is-outlined" @click="activate">create</a>
             <br>
         </div>

     </div>
    <div v-else class="tile is-ancestor">
        <div class="tile has-text-left" style="padding-left: 20px">
            <a class="subtitle is-6">Client's profile</a>
        </div>
        <div class="tile box">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <figure class="image is-128x128">
                                <img src="../../src/assets/veronica.png" alt="Avatar">
                            </figure>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="title is-4">Veronika</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Favorite store</p>
                            <p class="title is-5">Nova
                                <span class="subtitle is-6"> (Milano)
                                </span>
                                <b-icon
                                     icon="map-marker">
                                </b-icon>
                            </p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Quartile</p>
                            <p class="title is-5">
                                <a class="button is-warning">3</a>
                            </p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Loyalty</p>
                            <p class="title is-5">
                                <a class="button is-success"> 4.2 </a>    <span class="subtitle is-3"> 🙂</span>
                            </p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Current projects:</p>
                            <p class="title is-5">
                            <p class="title is-5">Kitchen: <span class="subtitle is-5">76% </span><span>
                            <b-icon
                                icon="arrow-down"
                                style="color: orange;"
                                size="is-small">
                            </b-icon>
                        </span></p>
                            <p class="title is-5">Flooring: <span class="subtitle is-5">90% </span><span>
                                <b-icon
                                    icon="arrow-up"
                                    style="color: darkgreen;"
                                    size="is-small">
                                </b-icon>
                            </span></p>
                        </div>
                    </div>
                </nav>
        </div>
        <div>


<!-----------------------------------------------------заказы----------------------------------------------------->
            <collapse :selected="false">
                <div slot="collapse-header">
                    Orders <span class="button is-danger is-outlined is-small">2</span>
                </div>
                <div slot="collapse-body">
                    <table class="table"  >
                                <th></th>
                                <th>Where</th>
                                <th>№</th>
                                <th>BU</th>
                                <th>date</th>
                                <tbody>
                                    <tr style="background-color: rgba(255,68,60,0.28)">
                                        <td>
                                            <a class="title is-6">
                                                <b-icon
                                                     icon="web">
                                             </b-icon>
                                            </a>
                                        </td>
                                        <td><a class="subtitle is-6">Home delivery</a></td>
                                        <td>123</td>
                                        <td>
                                            <figure class="image is-32x32">
                                                <img src="../../src/assets/logos/logo_leroy_merlin.png" alt="Avatar">
                                            </figure>
                                        </td>
                                        <td><span class="subtitle is-7">03-10-2017</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="title is-6">
                                                <b-icon
                                                     icon="home-map-marker">
                                             </b-icon>
                                            </a>
                                        </td>
                                        <td><a class="subtitle is-6">LM Milano</a></td>
                                        <td>321</td>
                                        <td>
                                            <figure class="image is-32x32">
                                                <img src="../../src/assets/logos/logo_zodio.png" alt="Avatar">
                                            </figure>
                                        </td>
                                        <td><span class="subtitle is-7">04-10-2017</span></td>
                                        <!--<td></td>-->
                                    </tr>
                                </tbody>
                            </table>
                </div>
            </collapse>

<!-----------------------------------------------------проекты----------------------------------------------------->

            <collapse :selected="false">
                <div slot="collapse-header">
                    Relationships and History <span class="is-success is-outlined is-small">🙂</span><span class="button is-danger is-outlined is-small">!</span>
                </div>
                <div slot="collapse-body">
                  <div class="box has-text-left">
                    <p><span class="subtitle is-6">date: </span><span class="title is-6">02.10.18</span></p>
                    <p><span class="subtitle is-6">product: </span><span class="title is-6">17815716</span></p>
                    <p><span class="subtitle is-6">rate: </span><span class="title is-6" style="color: #ff0009;">2</span></p>
                    <p>Delivery was not on time, I was very upset (((</p>
                      <br>
                    <p><span class="subtitle is-6">issue: </span><span class="title is-6">Delivery</span></p>

                      <div v-if="!replied">
                        <p><span class="subtitle is-6">reply was done: </span><span class="title is-6"><a class="button is-danger is-outlined">No</a></span></p>
                        <br>
                        <a class="button is-primary is-outlined" @click="make_reply">Make a reply</a>
                       </div>
                      <div v-else>
                          <p><span class="subtitle is-6">reply was done: </span><span class="title is-6"><a class="button is-success is-outlined">Yes</a></span></p>
                      </div>
                  </div>
                  <div class="box has-text-left">
                    <p><span class="subtitle is-6">date: </span><span class="title is-6">14.09.18</span></p>
                    <p><span class="subtitle is-6">product: </span><span class="title is-6">18669343</span></p>
                    <p><span class="subtitle is-6">rate: </span><span class="title is-6" style="color: #00ad1c;">5</span></p>
                    <p>Very cool replacement for ordinary paints that need to be applied with a brush. Shook, opened, sprayed. Used for painting iron construction </p>
                    <p><span class="subtitle is-6">issue: </span><span class="title is-6">Quality</span></p>
                    <p><span class="subtitle is-6">reply was done: </span><span class="title is-6"><a class="button is-success is-outlined">Yes</a></span></p>
                  </div>
                  <div class="box has-text-left">
                    <p><span class="subtitle is-6">date: </span><span class="title is-6">12.09.18</span></p>
                    <p><span class="subtitle is-6">product: </span><span class="title is-6">18649852</span></p>
                    <p><span class="subtitle is-6">rate: </span><span class="title is-6" style="color: #7cbb01;">4</span></p>
                    <p>I really liked this one, everything was great! Price is good</p>
                    <p><span class="subtitle is-6">issue: </span><span class="title is-6">Price</span></p>
                    <p><span class="subtitle is-6">reply was done: </span><span class="title is-6"><a class="button is-success is-outlined">Yes</a></span></p>
                  </div>
                  <div class="box has-text-left">
                    <p><span class="subtitle is-6">date: </span><span class="title is-6">10.09.18</span></p>
                    <p><span class="subtitle is-6">product: </span><span class="title is-6">12692243</span></p>
                    <p><span class="subtitle is-6">rate: </span><span class="title is-6" style="color: #00ad1c;">5</span></p>
                    <p>Very good thing! Many ways to use. Can be used as a decor in a vase. The main thing is not to forget to water it, otherwise they are reduced in size) I add it to the pot with soil when transplanting a flower.</p>
                    <p><span class="subtitle is-6">issue: </span><span class="title is-6">Quality</span></p>
                    <p><span class="subtitle is-6">reply was done: </span><span class="title is-6"><a class="button is-success is-outlined">Yes</a></span></p>
                  </div>
                  <div class="box has-text-left">
                    <p><span class="subtitle is-6">date: </span><span class="title is-6">08.08.18</span></p>
                    <p><span class="subtitle is-6">product: </span><span class="title is-6">16708311</span></p>
                    <p><span class="subtitle is-6">rate: </span><span class="title is-6" style="color: #00ad1c;">5</span></p>
                    <p>I bought it for husband, a very convenient set in the case, there are all the standard sizes that the husband most often uses. Well fit in a case. We have been using for more than a year.</p>
                    <p><span class="subtitle is-6">issue: </span><span class="title is-6">Quality</span></p>
                    <p><span class="subtitle is-6">reply was done: </span><span class="title is-6"><a class="button is-primary is-outlined">Yes</a></span></p>
                  </div>
                </div>
            </collapse>

<!-----------------------------------------------------проекты----------------------------------------------------->

            <collapse :selected="false">
                <div slot="collapse-header">
                    Projects
                </div>
                <div slot="collapse-body">
                    <collapse v-for="project in projects" :selected="false">
                        <div slot="collapse-header">
                            <span v-if="project.time===0" :style="{backgroundColor: project.color}"><span class="subtitle is-7">0</span></span>
                            <span v-else :style="{backgroundColor: project.color}"><span class="subtitle is-7">{{ project.time}}</span></span>
                            <span class="title is-6">{{ project.name }}</span> {{project.percent}} %<span href="" class="subtitle is-7"><p>quartile: </p><a class="button is-warning"><p></p>{{ project.quartile }}</a></span>
                        </div>
                        <div slot="collapse-body">
                            <div v-if="project.name==='Bathroom'">
                                    <div>
                                        <span class="subtitle">Categories</span>
                                        <table class="table">
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <tbody>
                                                <tr @click="show" v-for="category in project.categories" style="width: 300px">
                                                    <td><span class="title is-6"></span>{{ category.name }}</td>
                                                    <td>
                                                        <b-icon
                                                             :icon="category.icon">
                                                     </b-icon>
                                                    </td>
                                                    <td><b-checkbox></b-checkbox></td>
                                                </tr>
                                                <div v-if="show_products">
                                                    <div style="width: 300px">
                                                        <table class="table">
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>quartile</th>
                                                            <th>qty</th>
                                                            <tbody>
                                                                <tr v-for="prod in products_bathroom">
                                                                    <td>
                                                                        <figure class="image is-64x64">
                                                                            <img :src="prod.photo_url" alt="Avatar">
                                                                        </figure>
                                                                    </td>
                                                                    <td>{{ prod.name}}</td>
                                                                    <td>{{ prod.price}}€</td>
                                                                    <td>
                                                                        <div v-if="prod.quartile==3">
                                                                            <a class="button is-warning">
                                                                                {{ prod.quartile}}
                                                                            </a>
                                                                        </div>
                                                                        <div v-else>
                                                                            <a class="button is-outlined">
                                                                                {{ prod.quartile}}
                                                                            </a>
                                                                        </div>

                                                                    </td>
                                                                    <td>{{ prod.qty}}pcs</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                            <div v-else></div>
                        </div>
                    </collapse>
                </div>
            </collapse>
<!-----------------------------------------------------карта----------------------------------------------------->
            <collapse :selected="false">
                <div slot="collapse-header">
                    Sessions Map
                </div>
                <div slot="collapse-body">
                    <iframe :src="src_frame" width="100%" height="650px" frameborder="1"> </iframe>
                </div>
            </collapse>
<!-----------------------------------------------------найти аналоги----------------------------------------------------->

            <collapse :selected="false">
                <div slot="collapse-header">
                    Product search
                </div>
                <div slot="collapse-body">
                    <div class="tile is-ancestor">
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
                      </div >
                        <div class="tile is-child box">
                            {{ current_product }}
                            {{ current_analogs }}
                        </div>
                    </div>
                </div>
            </collapse>

<!-----------------------------------------------------проекты----------------------------------------------------->
            
        </div>
    </div>
  </div>
</template>

<script>

import Collapse from 'vue-collapse'
import Product from './Product.vue'
import ClientInfo from "./ClientInfo";
import Project from "./Project";
import Statistics from "./Statistics";
import Proposal from "./Proposal";
import ClientMap from "./ClientMap";

  export default {
  name: 'mobile',
  data() {
    return {
        src_frame: "http://52.191.11.99/en-US/embed?s=%2FservicesNS%2Fadmin%2Fsearch%2Fsaved%2Fsearches%2Fgeo_milan&oid=FtiCrWO%5ERb8bmFaL5AemI_O%5EWtxMo%5EHG77BOWiobtkX2zBZXNn0mvAx6x7tw4ExXy%5EpOZ7VEhZItRWeK_9pfPZSM9fcFun%5E3kUm6Z4e0wvEGBB3RNPOyXXjrgB4_PWa",
        is_activated: true,
        current_product_id: 17926555,
        show_products: false,
        current_quartile: 3,
        replied: false,
        map_selected: false,
        orders: [
            {number: 123456, bu: "/../../src/assets/logos/logo_leroy_merlin.png", date: '04-10-2017', sity: 'Website'},
            {number: 123456, bu: "/../../src/assets/logos/logo_zodio.png", date: '10-08-2017', sity: 'Milano'},

        ],
        products_bathroom: [
            {name: 'Shower faucet Sensea Docce', photo_url: 'https://res.cloudinary.com/lmru/image/upload/w_130,h_130,c_pad,b_white,d_photoiscoming.png/LMCode/14251337.jpg', price: '40', quartile: '1', qty: '1'},
            {name: 'Shower faucet Sensea Namari', photo_url: 'https://res.cloudinary.com/lmru/image/upload/w_130,h_130,c_pad,b_white,d_photoiscoming.png/LMCode/15610557.jpg', price: '69', quartile: '3', qty: '2'},
            {name: 'Shower faucet Hansgrohe Oasis', photo_url: 'https://res.cloudinary.com/lmru/image/upload/w_130,h_130,c_pad,b_white,d_photoiscoming.png/LMCode/15610581.jpg', price: '170', quartile: '4', qty: '7'},
            {name: 'Shower faucet Grohe Aqua', photo_url: 'https://res.cloudinary.com/lmru/image/upload/w_130,h_130,c_pad,b_white,d_photoiscoming.png/LMCode/17405346.jpg', price: '50', quartile: '2', qty: '9'},
        ],
        projects: [
            {name: 'Flooring', color: '#f09375', quartile: 3, time: 0, percent: 15},
            {name: 'Bathroom', color: '#f09375', quartile: 3, time: -1, percent: 60, categories: [
                    {name : ' Shower enclosure angle entrance', icon: 'cart', color: ''},
                    {name : ' Thermostatic mixing valve', icon: 'alert-circle-outline', color: ''},
                    {name : ' Bidet faucet', icon: 'alert-circle-outline', color: ''},
                    {name : ' Bathtub faucet', icon: 'cart', color: ''},
                    {name : ' Bathtub screen 1 shutter', icon: 'eye', color: ''},
                    {name : ' Shower faucet', icon: 'alert-circle-outline', color: ''}
            ]},
            {name: 'Kitchen', color: '#f0c86e', quartile: 4, time: -2, percent: 90},
            {name: 'Garden', color: '#c7bec1', quartile: 2, time: -4, percent: 56},
            {name: 'Heating system', color: '#91BAF0', quartile: 3, time: -6, percent: 45},
            {name: 'Water system', color: '#91BAF0', quartile: 3, time: -6, percent: 70},
        ]
    }
  },
  methods: {
    activate () {
        this.is_activated = true
    },
      make_reply () {
        this.replied = true
      },
      getCurrentProduct(product_id) {
                this.$store.commit('current_product/getComplements', product_id)
                this.$store.commit('current_product/getCurrentProduct', product_id)
                // this.$store.commit('current_product/getCurrentAnalogs')
            },
            show () {
                this.show_products = !this.show_products
            }
  },
  computed: {
      current_product () {
                return this.$store.state.current_product.current_product
            },
      current_analogs () {
                return this.$store.state.current_product.current_analogs
            },
      current_complements () {
                return this.$store.state.current_product.current_complements
            }

  },
  components: {
      Proposal,
      Statistics,
      Project,
      ClientInfo,
      Product,
      ClientMap,
      Collapse
  }
}
</script>

<style>

</style>
