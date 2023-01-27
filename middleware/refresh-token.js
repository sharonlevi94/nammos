export default async  function ({ app }) {
  if( !app.store.state["auth-users"].user) {
    await app.store.dispatch('auth-users/refreshToken')
  }
}
