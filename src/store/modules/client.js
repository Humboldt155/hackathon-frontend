

// initial state
// shape: [{ id, quantity }]
const state = {
    client_page: 'https://leroymerlin.ru/catalogue/search/?q=81945552',
    project_models: [
        {name : ' Shower enclosure angle entrance', lon: 18, let: 53, time: 0,buy: 0, watch: 0,warning: 0, size: 'l'},
        {name : ' Thermostatic mixing valve', lon: 27, let: 41, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Shower enclosure with front entrance', lon: 22, let: 52, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Wall-hung toilet pack', lon: 23, let: 63, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Furniture for laundry', lon: 43, let: 41, time: 4,buy: 0,watch: 1,warning: 0, size: 'l'},
        {name : ' PVC tile and plank', lon: 57, let: 67, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Roll of vinyl flooring', lon: 75, let: 83, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Vanity cabinets', lon: 19, let: 75, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Bathroom furniture - under basin cabinet only', lon: 29, let: 43, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Bidet faucet', lon: 24, let: 51, time: 0,buy: 0,watch: 0,warning: 0, size: 'l'},
        {name : ' Door for frame and adjustable frame', lon: 53, let: 100, time: 0,buy: 0,watch: 0,warning: 1, size: 'l'},
        {name : ' Hot water towel dryer', lon: 20, let: 64, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Rail ceiling (spline ceiling)', lon: 36, let: 50, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Bathtub faucet', lon: 10, let: 58, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Under-sink filter', lon: 51, let: 34, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Kitchen faucet', lon: 40, let: 43, time: 4,buy: 0,watch: 1,warning: 0, size: 'm'},
        {name : ' Drawer and kitchen pot holder kit', lon: 50, let: 59, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Shower tray', lon: 0, let: 63, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Faience frieze, fillet and moulding', lon: 32, let: 61, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Washbasin faucet', lon: 8, let: 55, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Wallpaper', lon: 77, let: 73, time: 1,buy: 0,watch: 1,warning: 1, size: 'm'},
        {name : ' Washbasin', lon: 12, let: 48, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Lid for toilet and bidet', lon: 35, let: 39, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Bath and tray panel', lon: 37, let: 53, time: 6,buy: 0,watch: 1,warning: 0, size: 'm'},
        {name : ' Rail for sliding system', lon: 62, let: 57, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Basin', lon: 23, let: 48, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Decorative spotlight with a light source', lon: 64, let: 12, time: 0,buy: 0,watch: 0,warning: 0, size: 'm'},
        {name : ' Bathroom mirror lighting (for installation)', lon: 50, let: 9, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Complete kitchen module', lon: 58, let: 53, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Wall-mounted drying rack', lon: 51, let: 25, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Wall lamp with a light source', lon: 59, let: 20, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Wall photo', lon: 66, let: 53, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Shower bar', lon: 21, let: 31, time: 6,buy: 0,watch: 1,warning: 0, size: 's'},
        {name : ' Kit of shower head and flexible shower hose', lon: 14, let: 48, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Extractor fan', lon: 39, let: 38, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Door handle on rosace', lon: 60, let: 79, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Shower rail accessories', lon: 39, let: 28, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Floor underlay', lon: 83, let: 98, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Spout for sink and washbasin', lon: 28, let: 39, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Shower head', lon: 15, let: 35, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Decorative moulding for wall and ceiling', lon: 87, let: 69, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Antileak caulking', lon: 75, let: 78, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Fixation adhesive', lon: 77, let: 64, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Sheath for CMV or fan', lon: 56, let: 29, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Frieze and cabochon (stoneware and sandstone)', lon: 42, let: 56, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Ceiling adhesive', lon: 87, let: 63, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Skirting board corner', lon: 99, let: 97, time: 0,buy: 0,watch: 0,warning: 0, size: 's'},
        {name : ' Hybrid, laminate flooring', lon: 76, let: 97, time: 1,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Skirting board and floor moulding', lon: 100, let: 99, time: 1,buy: 1,watch: 0,warning: 0, size: 's'},
        {name : ' Oven', lon: 55, let: 48, time: 2,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Hood and suction group', lon: 62, let: 41, time: 3,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Sink', lon: 52, let: 52, time: 3,buy: 1,watch: 0,warning: 0, size: 'm'},
        {name : ' Electric towel dryer (dry heat)', lon: 33, let: 36, time: 4,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Customized worktop', lon: 58, let: 55, time: 4,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Kitchen cabinet', lon: 52, let: 54, time: 4,buy: 1,watch: 0,warning: 0, size: 'm'},
        {name : ' Mirror with built-in lighting', lon: 39, let: 34, time: 5,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Toilet pack for installation', lon: 16, let: 75, time: 5,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Shower panel', lon: 7, let: 45, time: 6,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Bathtub screen 1 shutter', lon: 37, let: 41, time: 6,buy: 1,watch: 0,warning: 0, size: 'l'},
        {name : ' Shower faucet', lon: 1, let: 51, time: 6,buy: 1,watch: 0,warning: 0, size: 'm'},
        {name : ' High head', lon: 11, let: 39, time: 6,buy: 1,watch: 0,warning: 0, size: 'm'}
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
    setClientPage (state, new_url) {
      state.client_page = new_url
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
