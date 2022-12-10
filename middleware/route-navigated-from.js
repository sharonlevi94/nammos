export default function (context) {
  if (process.client) {
    const { from, store } = context
    store.commit('setRouteFrom', {route: from?.name})
  }
}
