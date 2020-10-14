<template>
  <div class="Search">
    <label class="label">Search Breed </label>
    <select v-model="searchData">
      <option v-for="dogname in dogBreadName" :key="dogname">{{
        dogname
      }}</option>
    </select>
    <span v-if="subBreed.length > 0">
      <!-- <br /> -->
      <label class="label">Please select sub breed of {{ searchData }} </label>
      <select v-model="subBreedName">
        <option v-for="sb in subBreed" :key="sb">{{ sb }}</option>
      </select>
    </span>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchData: "",
      subBreed: [],
      subBreedName: ""
    };
  },
  created () {
    console.log(this.dogObjectDatails);;
  },
  props: {
    dogBreadName: {
      type: Array
    },
    dogObjectDatails: {
      type: Object
    }
  },
  watch: {
    searchData() {
      if (this.dogObjectDatails[this.searchData].length > 0) {
        console.log(this.searchData);
        this.subBreed = this.dogObjectDatails[this.searchData];
        console.log(this.subBreed);
      } else {
        this.$router.push({ name: "About", params: { name: this.searchData } });
      }
    },
    subBreedName() {
      if (this.subBreed.length > 0) {
        this.$router.push({
          name: "About",
          params: { name: this.searchData, subbreedname: this.subBreedName }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
