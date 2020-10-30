<template>
  <div class="Search">
    <label class="label">Search Breed </label>
    <select v-model="searchData">
      <option v-for="dogname in $store.state.dogBreedList" :key="dogname">
        {{ dogname }}
      </option>
    </select>
    <span v-if="subBreed.length > 0">
      <label class="label">Please select sub breed of {{ searchData }} </label>
      <select v-model="subBreedName">
        <option v-for="subbread in subBreed" :key="subbread">
          {{ subbread }}
        </option>
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
      subBreedName: "",
    };
  },
  created() {
    this.$store.dispatch("getAllBreadObject");
    this.$store.dispatch("getAllBreadList");
  },
  watch: {
    searchData() {
      if (this.$store.state.dogBreedObject[this.searchData].length > 0) {
        this.subBreed = this.$store.state.dogBreedObject[this.searchData];
      } else {
        this.$router.push({ name: "About", params: { name: this.searchData } });
      }
    },
    subBreedName() {
      this.$router.push({
        name: "About",
        params: { name: this.searchData, subbreedname: this.subBreedName },
      });
    },
  },
};
</script>
