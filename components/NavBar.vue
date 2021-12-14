<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="info"
    fixed="top"
    :sticky="true"
  >
    <b-navbar-brand href="#">Tienda</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" v-if="!isAuth" right>
          <b-link to="/login" router-tag="li">login</b-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuth", "authUser"]),
  },
};
</script>
<style scoped>
.nuxt-logo {
  height: 180px;
}
</style>
