import Vue from "vue";
import Vuex from "vuex";
import { getAllBread, getAllDogsList } from "../service/dogApi.service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogBreedObject: {},
    dogBreedList: [],
  },
  mutations: {
    setBreedObject(state, dogBreedList) {
      state.dogBreedObject = dogBreedList;
    },
    setBreedList(state, dogsBreadKey) {
      state.dogBreedList = dogsBreadKey;
    },
  },

  actions: {
    async getAllBreadObject(state) {
      let dogBreedListResult = await getAllBread();
      let dogBreedList = dogBreedListResult.data["message"];
      state.commit("setBreedObject", dogBreedList);
    },
    async getAllBreadList(state) {
      let respose = await getAllDogsList();
      state.commit("setBreedList", Object.keys(respose.data.message));
    },
  },
  modules: {},
});
