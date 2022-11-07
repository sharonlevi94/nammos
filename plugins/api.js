export default (context, inject) => {
  inject('authApi', {
    refreshUserData: data => context.$axios.$get('auth/find-one', {params: data})
  })
  inject('usersApi', {
    getUsers: () => context.$axios.$get('users'),
    getUser: id => context.$axios.$get(`users/${id}`),
    addUser: data => context.$axios.$post('users', data)
  })
}
