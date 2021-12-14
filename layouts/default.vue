<template>
  <MdbSideBar :hide="!isAuth">
    <template v-slot:nav>
      <NavBar />
    </template>
    <template v-slot:content
      ><LoadingBar />
      <Nuxt  />
      <AlertDanger />
    </template>
    <template v-slot:footer>
      <Footer />
    </template>
    <template v-slot:sidebar>
      <MdbCollapseableItem toggleId="" url="/login">
        <h6 class="">Login</h6>
      </MdbCollapseableItem>
      <MdbCollapseableItem toggleId="users" url="/user">
        <h6 class="">Users</h6>
        <template v-slot:collapseable>
          <MdbCollapseableItem
            toggleId="usersIndex"
            urlExact="/user"
            v-if="$authCan('read')"
          >
            <b-link to="/user" router-tag="li">Lista</b-link>
          </MdbCollapseableItem>
          <MdbCollapseableItem
            toggleId="usersCreate"
            urlExact="/user/create"
            v-if="$authCan('create')"
          >
            <b-link to="/user/create" router-tag="li">Create</b-link>
          </MdbCollapseableItem>
        </template>
      </MdbCollapseableItem>
    </template>
  </MdbSideBar>
</template>
<script>
import { mdbBtn } from "mdbvue";
import { mapGetters } from "vuex";
export default {
  components: {
    mdbBtn,
  },
  computed: {
    ...mapGetters(["isAuth","isLoading"]),
  },
  methods: {},
};
</script>
<style scoped>
</style>