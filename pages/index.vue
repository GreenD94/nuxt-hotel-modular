<template>
  <b-card
    title="home"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >    
    <b-card-text v-if="!isAuth">
     go to login
    </b-card-text>
 <NuxtLink to="/login" v-if="!isAuth">Login</NuxtLink>

    <b-card-text v-if="isAuth">
     go to users
    </b-card-text>
  <NuxtLink to="/user" v-if="isAuth">user</NuxtLink>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['isAuth', 'authUser']),
  },
}
</script>
