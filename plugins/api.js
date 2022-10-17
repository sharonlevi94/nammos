export default (context, inject) => {
  inject('authApi', {
    getAuth: data => context.$axios.$post('auth/find-one', data)
  })
  inject('usersApi', {
    getUsers: () => context.$axios.$get('users'),
    getUser: id => context.$axios.$get(`users/${id}`),
    addUser: data => context.$axios.$post('users', data)
  })
}
