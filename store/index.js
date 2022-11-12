export const state = () => ({
  drawer: false,
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
  setWindowWidth (state, { windowWidth }) {
    state.windowWidth = windowWidth
  },
  setWindowHeight (state, { windowHeight }) {
    state.windowHeight = windowHeight
  },
  setSnackbar (state,  payload ) {
    console.log(payload, 'payload')
    state.snackbarValue = payload?.value
    state.snackbarText = payload?.text
    state.snackbarSuccess = payload?.success || false
    state.snackbarError = payload?.error || false
  }
}
