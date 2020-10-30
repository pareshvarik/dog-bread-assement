import { getAllDogsList } from "../service/dogApi.service.js";

const state = {
  dogBreedObject: {},
  dogBreedList: [],
};
const mutations = {
  setBreedObject(state, dogBreedList) {
    state.dogBreedObject = dogBreedList;
  },
  setBreedList(state, dogsBreadKey) {
    state.dogBreedList = dogsBreadKey;
  },
};
const actions = {
  async getAllBreadObject(state) {
    let dogBreedListResult = await getAllDogsList();
    let dogBreedList = dogBreedListResult.data["message"];
    state.commit("setBreedObject", dogBreedList);
  },
  async getAllBreadList(state) {
    let respose = await getAllDogsList();
    state.commit("setBreedList", Object.keys(respose.data.message));
  },
};
export default {
  state,
  actions,
  mutations,
};
