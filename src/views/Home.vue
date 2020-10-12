<template>
  <div class="home">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Dog Breed Application</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <search :dogBreadName="dogsBreadList" :dogObjectDatails="$store.state.dogBreadObject" />
      </b-navbar-nav>
    </b-navbar>
    <div v-for="(dog, index) in dogsBreadList" :key="index">
      <div class="cardbody">
        <b-card
          :title="dog | capitalize"
          :img-src="dogRandomImage[index]"
          img-alt="Image"
          img-height="200"
          img-width="200"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-button @click="searchData(dog)" variant="primary"
            >Get More image</b-button
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  getAllDogsList,
  getDogRandomImage
} from "../service/dogApi.service.js";
import Search from "../views/Search.vue";
export default {
  name: "Home",
  components: {
    Search
  },
  data() {
    return {
      dogsBreadList: [],
      dogRandomImage: [],
      dogObject: {},
      searchDogName: []
    };
  },
  created() {
    this.$store.dispatch("getAllBreadList")
    getAllDogsList().then(res => {
      this.dogsBreadList = Object.keys(res.data.message);
      // this.dogObject = res.data.message;
      this.dogsBreadList.map(dogname => {
        getDogRandomImage(dogname).then(res => {
          this.dogRandomImage.push(res.data.message);
        });
      });
    });
  },
  methods: {
    searchData(dogname) {
      this.searchDogName = dogname;
      this.$router.push({
        name: "About",
        params: { name: this.searchDogName }
      });
    }
  },
  watch: {
    subBreedName() {
      this.$router.push({
        name: "About",
        params: { name: this.dogName, subbreedname: this.subBreedName }
      });
    }
  }
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