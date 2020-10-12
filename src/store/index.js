import Vue from "vue";
import Vuex from "vuex";
import { getAllBread } from "../service/dogApi.service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogBreadObject: {}
  },
  mutations: {
    SET_ALLBREEDS(state, dogBreadList) {
      state.dogBreadObject = dogBreadList;
    }
  },
  actions: {
    async getAllBreadList(state) {
      const dogBreadListResult = await getAllBread();
      const dogBreadList = dogBreadListResult.data["message"];
      state.commit("SET_ALLBREEDS", dogBreadList);
    }
  },
  modules: {}
});
