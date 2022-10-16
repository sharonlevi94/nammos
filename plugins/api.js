export default (context, inject) => {
  inject('authService', {
    getAuth: data => context.$axios.$post('auth/find-one', data)
  })
}
