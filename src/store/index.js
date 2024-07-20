import { createStore } from "vuex";

export default createStore({
  state: {
    carList: [
      { id: 1, make: "BMW", model: "3 series", color: "Red" },
      { id: 2, make: "BMW", model: "M3", color: "Green" },
      { id: 3, make: "BMW", model: "M5", color: "Blue" },
      { id: 4, make: "VW", model: "Golf", color: "Red" },
      { id: 5, make: "VW", model: "Passat", color: "Green" },
      { id: 6, make: "VW", model: "Jetta", color: "Blue" },
      { id: 7, make: "Jeep", model: "Wrangler", color: "Red" },
      { id: 8, make: "Jeep", model: "Cherokee", color: "Green" },
    ],
  },
  getters: {
    carList(state) {
      return state.carList;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
