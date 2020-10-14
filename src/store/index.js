import Vue from "vue";
import Vuex from "vuex";
import { getAllBread } from "../service/dogApi.service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogBreedObject: {},
  },
  mutations: {
    setBreedObject(state, dogBreedList) {
      state.dogBreedObject = dogBreedList;
    }
  },
  
  actions: {
    async getAllBreadList(state) {
      let dogBreedListResult = await getAllBread();
      let dogBreedList = dogBreedListResult.data["message"];
      state.commit("setBreedObject", dogBreedList);
    }
  },
  modules: {}
});
