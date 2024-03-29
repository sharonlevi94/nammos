export const state = () => ({
  drawer: false,
  loader: false,
  save: false,
  routeNavigatedFrom: 'home',
  windowWidth: null,
  windowHeight: null,

  snackbarValue: false,
  snackbarText: null,
  snackbarSuccess: false,
  snackbarError: false
})

export const mutations = {
  setDrawer (state) {
    state.drawer = !state.drawer
  },
  setLoader (state, { value }) {
    state.loader = value
  },
  setSaveButton (state, { value }) {
    state.save = value
  },
  setWindowWidth (state, { windowWidth }) {
    state.windowWidth = windowWidth
  },
  setWindowHeight (state, { windowHeight }) {
    state.windowHeight = windowHeight
  },
  setSnackbar (state,  payload ) {
    state.snackbarValue = payload?.value
    state.snackbarText = payload?.text
    state.snackbarSuccess = payload?.success || false
    state.snackbarError = payload?.error || false
  },
  setRouteFrom (state, { route }) {
    state.routeNavigatedFrom = route
  },
}

export const actions = {
  showSnackBar ({state, commit}, payload) {
    commit('setSnackbar', payload)
    setTimeout(() => {
      commit('setSnackbar', {
        value: false,
        text: null,
        success: false,
        error: false
      })
    }, 5000)
  }
}

export const getters = {
  snackbarValue: (state) => state.snackbarValue
}
