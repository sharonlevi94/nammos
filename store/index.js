export const state = () => ({
  drawer: false,
  windowWidth: null,
  windowHeight: null,
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
}
