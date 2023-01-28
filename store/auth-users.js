
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
      if (!token) {
        return this.$auth.logout()
      }
      const user = await this.$authApi.refreshUserData({token: token})
      if (user?.response?.message === 'jwt expired') {
        return this.$auth.logout()
      }
      console.log(this.$auth.user, 'this.$auth.user')
      await this.$auth.setUser(user)
      console.log(this.$auth.user, 'this.$auth.user')
      commit('setUser', user)
      commit('setToken', token)
    } catch (e) {
      console.error('refreshToken: ', e)
    }
  }
}
