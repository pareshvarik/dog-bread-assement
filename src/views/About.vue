<template>
  <div class="about">
    <h1 class="label">
      <i
        >All Images of {{ dogName | capitalize }}
        {{ dogSubBreedName | capitalize }}</i
      >
    </h1>

    <button class="btn btn-secondary" @click="goHome()">Home</button>

    <table>
      <tr v-for="dogImage in dogAllImageArray" :key="dogImage" class="grid">
        <img :src="dogImage" class="dogimage" />
      </tr>
    </table>
  </div>
</template>
<script>
import { getAllDogImage } from "../service/dogApi.service.js";
export default {
  name: "About",
  data() {
    return {
      dogName: this.$route.params.name,
      dogSubBreedName: this.$route.params.subbreedname,
      dogAllImageArray: [],
    };
  },
  created() {
    getAllDogImage(this.dogName, this.dogSubBreedName).then((res) => {
      this.dogAllImageArray = res.data.message;
    });
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.grid {
  width: 300px;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  margin: 50px;
  float: left;
  height: 350px;
}
.dogimage {
  width: 300px;
  height: 350px;
  border: 5px solid white;
}
.about {
  background-color: black;
}
.label {
  color: white;
}
.grid:hover {
  transform: scale(1.5);
}
</style>
