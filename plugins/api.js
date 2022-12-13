export default (context, inject) => {
  inject('authApi', {
    refreshUserData: data => context.$axios.$get('auth/find-one', {params: data})
  })
  inject('usersApi', {
    getUsers: (filter) => context.$axios.$get('users', {params: filter}),
    getUser: id => context.$axios.$get(`users/${id}`),
    addUser: data => context.$axios.$post('users', data)
  })
  inject('calendarApi', {
    getAvailableTimes: data => context.$axios.$get('calendar/available-times', {params: data}),
    saveDate: data => context.$axios.$post('calendar', data),
    getEvents: () => context.$axios.$get('calendar')
  })
}
