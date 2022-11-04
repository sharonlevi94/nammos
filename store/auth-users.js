export const state = () => ({
  token: null,
  user: null
})

export const mutations = {
  setToken (state, value) {
    state.token = value
  },
  setUser (state, value) {
    state.user = value
  }
}
