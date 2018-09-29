import axios from "axios";

const host = 'http://127.0.0.1:5000/'
const urlGetAnalogsProduct = host + 'analogs_product/'
const urlGetProduct = host + 'getproduct/'

// initial state
// shape: [{ id, quantity }]
const state = {
    current_product: {
        date_created: null,
        department: null,
        is_stm: null,
        model_adeo: null,
        model_name: null,
        product: null,
        product_name: null,
        product_price: null,
        product_quartile: null,
        product_url: null,
        stock: {'online': 0, 'clients_store': 0, 'clients_sity': 0}
    },
    current_analogs: [
        {
            date_created: null,
            department: null,
            is_stm: null,
            model_adeo: null,
            model_name: null,
            probability: null,
            product: null,
            product_name: null,
            product_price: null,
            product_url: null,
            stock: {'online': 0, 'clients_store': 0, 'clients_sity': 0}
        },
    ]
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
    getCurrentProduct (state, product_id) {
      axios({
          url: urlGetProduct + product_id.toString(),
          method: 'GET'
        })
        .then(resp => {
            let product = resp.data
            state.current_product = product
        })
            .catch(err => {
            console.log(err)
        })
    },
    getCurrentAnalogs (state) {
        axios({
          url: urlGetAnalogsProduct + state.current_product.product.toString() + '/20/1',
          method: 'GET'
        })
        .then(resp => {
            let analogs = resp.data
            // state.current_analogs = analogs['analogs']
            state.current_analogs = analogs['analogs'].filter(analog => analog.model_adeo == state.current_product.model_adeo)
        })
            .catch(err => {
            console.log(err)
        })
    },
    filterModel (state) {
        state.current_analogs = state.current_analogs.filter(analog => analog.model_adeo == state.current_product.model_adeo)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
