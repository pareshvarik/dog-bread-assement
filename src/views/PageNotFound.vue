<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <h1 class="display-4">404 Error Found</h1>
      <p class="lead">Please enter valid URL</p>
      <hr class="my-4" />
      <p>click on Home to redirect to <strong>Home </strong> page</p>
      <button id="goHome" class="btn btn-primary btn-lg" @click="goHome()">
        Home
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.jumbotron{
      background-color: #ffffff;
}
</style>
