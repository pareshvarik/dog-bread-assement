<template>
  <div class="Home">
    <div v-for="dog in dogBreed" :key="dog.breedName">
      <div class="cardbody">
        <b-card
          :title="dog.breedName | capitalize"
          :img-src="dog.breedImage"
          img-alt="Image"
          img-height="200"
          img-width="200"
          object-fit="cover"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-button @click="searchData(dog.breedName)" variant="primary">
            Get More image
          </b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  getAllDogsList,
  getDogRandomImage,
} from "../service/dogApi.service.js";
// import Search from "../components/Search.vue";
export default {
  name: "Home",
  // components: {
  //   Search,
  // },
  data() {
    return {
      dogsBreadList: [],
      breed: { breedName: "", breedImage: "" },
      dogObject: {},
      searchDogName: [],
      dogBreed: [],
    };
  },
  created() {
    getAllDogsList().then((res) => {
      this.dogsBreadList = Object.keys(res.data.message);
      this.createBreedList(this.dogsBreadList);
    });
  },
  methods: {
    searchData(dogname) {
      this.searchDogName = dogname;
      this.$router.push({
        name: "About",
        params: { name: this.searchDogName },
      });
    },
    async createBreedList(breedsKeys) {
      for (let index = 0; index < breedsKeys.length; index++) {
        let image = await getDogRandomImage(breedsKeys[index]).then((res) => {
          return res.data.message;
        });
        this.Breed = { breedName: breedsKeys[index], breedImage: image };
        this.dogBreed.push(this.Breed);
      }
    },
  },
  watch: {
    subBreedName() {
      this.$router.push({
        name: "About",
        params: { name: this.dogName, subbreedname: this.subBreedName },
      });
    },
  },
};
</script>
<style scoped>
.cardbody {
  width: 300px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin: 50px;
  float: left;
  height: 350px;
}
</style>
