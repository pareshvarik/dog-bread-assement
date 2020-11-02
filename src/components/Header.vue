<template>
  <div class="header">
    <!-- <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Dog Breed Application</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <search />
        </b-navbar-nav>
      </b-navbar> -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          Dog Breed Application
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search">
              </b-form-input> -->
              <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button> -->
              <Search />
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
export default {
  name: "Header",
  components: {
    Search,
  },
};
</script>
