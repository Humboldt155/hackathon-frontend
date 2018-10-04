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
                    Relationships and History <span class="is-success is-outlined is-small">🙂</span>
                </div>
                <div slot="collapse-body">
                    Info about projects
                </div>
            </collapse>

<!-----------------------------------------------------проекты----------------------------------------------------->

            <collapse :selected="false">
                <div slot="collapse-header">
                    Projects
                </div>
                <div slot="collapse-body">
                    Info about projects
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
                    Info about projects
                </div>
            </collapse>
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
        src_frame: "http://52.191.11.99/en-US/embed?s=%2FservicesNS%2Fadmin%2Fsearch%2Fsaved%2Fsearches%2Fgeo_hackathon&oid=5ICR8ghZ%5Eom6JVjnisTcHc9r71QaPPGm%5Evb8YFVFPfgIdq6ZQuQ%5EanGrnIPoFL5D5FqXGrQO7GfJFNC%5EqM_cqBVZ9IkmVh4rHYn6kSC0vQIWHgHygcVlunmkEUTkPkNm9Hjs4o",
        is_activated: true,
        map_selected: false,
        orders: [
            {number: 123456, bu: "/../../src/assets/logos/logo_leroy_merlin.png", date: '04-10-2017', sity: 'Website'},
            {number: 123456, bu: "/../../src/assets/logos/logo_zodio.png", date: '10-08-2017', sity: 'Milano'},

        ]
    }
  },
  methods: {
    activate () {
        this.is_activated = true
    }
  },
  computed: {

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
