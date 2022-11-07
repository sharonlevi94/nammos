import error from "~/layouts/error";

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

export const actions = {
  async refreshToken ({commit}) {
    try {
      const cookies = this.$auth.$storage.getCookies()
      const token = cookies['auth._token.local']
      const user = await this.$authApi.refreshUserData({token: token})
      await this.$auth.setUser(user)
      commit('setUser', user)
      commit('setToken', token)
    } catch (e) {
      console.error('refreshToken: ', e)
    }
  }
}
