export default async  function ({ app }) {
  await app.store.dispatch('auth-users/refreshToken')
}
