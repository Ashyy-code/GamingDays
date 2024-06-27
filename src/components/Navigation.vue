<template>
  <!--Navigation Wrap lol-->
  <div class="nav-wrapper">
    <!--loading panel for the nav because .net framework is slow AF-->
    <div v-if="!navLoaded" class="nav-loader">
      <span>Loading Navigation..</span>
    </div>

    <!--Navigation Itself-->
    <nav v-if="navLoaded">
      <ul>
        <li v-for="navItem in navItems" :key="navItem">
          <button
            :class="extraClass(navItem)"
            @click="this.$router.push(navItem.push); this.$store.state.currentView = navItem.push"
          >
            <span :innerHTML="navItem.icon"></span
            ><span>{{ navItem.name }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
  mounted() {
    //get the nav from the backend
    this.loadNav();
  },
  data() {
    return {
      navLoaded: false,
      navItems: null,
    };
  },
  methods: {
    //load the nav
    async loadNav() {
      await axios.get(store.state.navigation_endpoint_url).then((response) => {
        this.navItems = response.data;
        this.navLoaded = true;
        console.log(this.navItems);
      });
    },
    //method for checking selection
    extraClass(navItem) {
      if (navItem.push == store.state.currentView) {
        return "primary";
      } else {
        return "secondary";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {

}
button {
  span:last-child {
    margin-left: 0.5rem;
  }
}
nav {
  justify-content: center;
}
</style>