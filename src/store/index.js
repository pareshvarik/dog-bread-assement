import Vue from "vue";
import Vuex from "vuex";
import { getAllBread } from "../service/dogApi.service.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogBreadList: []
  },
  mutations: {
    SET_ALLBREEDS(state, dogBreadList) {
      state.dogBreadList = dogBreadList;
    },
  },
  actions: {
    async getAllBreadList( state ){
      const dogBreadListResult=await getAllBread()
        const dogBreadList=dogBreadListResult.data['message'];
      state.commit('SET_ALLBREEDS',dogBreadList)
    },

  },
  modules: {}
});
