export const getters = {
  isAuth(state) {
    return state.auth.loggedIn
  },
  authUser(state) {
    return state.auth.user
  },
  isLoading: (state, getters) => {
    return state.loading;
  },

  isAlertDangerVisible: (state, getters) => {
    return state.isAlertDangerVisible;
  },
  errorMessage: (state, getters) => {
    return state.errorMessage;
  },


};

export const state = () => ({
  loading: false,
  isAlertDangerVisible:false,
  errorMessage:""
});

export const mutations = {
  setLoading(state, isLoading) {
    state.loading = isLoading;
  },
  setAlertDangerVisible(state, isVisilble) {
    state.isAlertDangerVisible = isVisilble;
  },
  setErrorMessage(state, message) {
    state.errorMessage = message;
  }
};

