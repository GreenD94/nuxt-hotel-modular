<template>
  <div class="row align-items-center vh-100" align="center">
    <div class="col-md align-self-center">
      <b-card title="Login" tag="article" style="max-width: 20rem" class="mb-2">
        <b-card-text> Email </b-card-text>
        <b-form-input v-model="email" :type="'email'"></b-form-input>
        <div
          class="alert alert-danger mt-1"
          role="alert"
          v-if="erros.email.length > 0"
        >
          {{ erros.email[0] }}
        </div>
        <b-card-text class="mt-2"> Password </b-card-text>
        <b-form-input v-model="password" :type="'password'"></b-form-input>
        <div
          class="alert alert-danger mt-1"
          role="alert"
          v-if="erros.password.length > 0"
        >
          {{ erros.password[0] }}
        </div>
        <b-button @click="login" class="mt-3">login</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mdbBtn } from "mdbvue";
export default {
  components: {
    mdbBtn,
  },
      middleware({ $routeCan }) {
        $routeCan("create");
    },
  auth: "guest",
  data() {
    return {
      input: {
        email: null,
        password: null,
      },
      erros: { email: [], password: [] },
    };
  },
  methods: {
    login() {
      this.$auth
        .loginWith("laravelSanctum", {
          data: this.input,
        })
        .then((responnse) => {
          let user = responnse.data.data;

          this.$router.push("user");
        })
        .catch((err) => {
          this.erros = err.response.data.data;
        });
    },
    ...mapActions({
      getUsers: "users/getUsers",
    }),
  },
  computed: {
    email: {
      get: function () {
        return this.input.email;
      },
      // setter
      set: function (newValue) {
        this.erros.email = [];
        this.input.email = newValue;
      },
    },
    password: {
      get: function () {
        return this.input.password;
      },
      // setter
      set: function (newValue) {
        this.erros.password = [];
        this.input.password = newValue;
      },
    },
  },
};
</script>
