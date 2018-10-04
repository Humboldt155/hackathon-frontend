<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isCardModalActive = true">
            Start analysis
        </button>
        <b-modal :active.sync="isCardModalActive" :width="960" scroll="keep">
            <div class="box" style="min-width: 90%; min-height: 90%; position: fixed; left: 5%; top: 5%">
                <div class="media-content">
                    <p class="title is-4">Veronika's</p>
                    <p class="subtitle is-6">project</p>
                    <div class="field is-grouped">
                        <div v-for="c in colors_l">
                            <div :style="{background: c, width: '60px', height: '30px'}"></div>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div style="width: 60px; height: 30px">month</div>
                        <div style="width: 60px; height: 30px">now</div>
                        <div style="width: 60px; height: 30px">-2</div>
                        <div style="width: 60px; height: 30px">-3</div>
                        <div style="width: 60px; height: 30px">-4</div>
                        <div style="width: 60px; height: 30px">-5</div>
                        <div style="width: 60px; height: 30px">-6</div>
                    </div>
                    <div v-for="item in project_models">
                        <div :style="{position: 'fixed', left: item.lon*0.75 + 5 + '%', top: item.let*0.85 + 5 + '%'}">
                            <button v-if="item.size=='s'" class="button is-small ":style="{background: colors[item.time]}">
                                {{ item.name}}
                            </button>
                            <button v-else-if="item.size=='m'" class="button is-medium":style="{background: colors[item.time]}">
                                {{ item.name}}
                            </button>
                            <button v-else class="button":style="{background: colors[item.time]}">
                                {{ item.name}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
    export default {
        name: "Project",
      data() {
          return {
              isCardModalActive: false,
              colors: {
                  0: 'offset',
                  1: '#f8aba8',
                  2: '#f0c7a6',
                  3: '#f0e056',
                  4: '#c1f0ae',
                  5: '#b1f0eb',
                  6: '#91baf0'
              },
              colors_l: [
                  'offset',
                  '#f8aba8',
                  '#f0c7a6',
                  '#f0e056',
                  '#c1f0ae',
                  '#b1f0eb',
                  '#91baf0'
              ],
              items: [
                  {name: 'test1', size: 'sm', lon: 0.8, lat: 0.4, color: 0.2},
                  {name: 'test2', size: 'md', lon: 0.5, lat: 0.2, color: 0.2},
                  {name: 'test2', size: 'md', lon: 0.2, lat: 0.65, color: 0.5},
                  {name: 'test2', size: 'md', lon: 0.34, lat: 0.89, color: 0.5},
                  {name: 'test2', size: 'md', lon: 0.45, lat: 0.43, color: 0.67},
                  {name: 'test2', size: 'md', lon: 0.76, lat: 0.58, color: 0.80},
                  {name: 'test2', size: 'md', lon: 0.35, lat: 0.12, color: 1},
                  {name: 'test2', size: 'md', lon: 0.38, lat: 0.14, color: 1},
                  {name: 'test2', size: 'md', lon: 0.44, lat: 0.27, color: 1}
              ]
            }
        },
        computed: {
            project_models () {
                return this.$store.state.client.project_models
            },
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
