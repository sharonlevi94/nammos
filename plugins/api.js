export default (context, inject) => {
  inject('authApi', {
    refreshUserData: data => context.$axios.$get('auth/find-one', {params: data})
  })
  inject('usersApi', {
    getUsers: (filter) => context.$axios.$get('users', {params: filter}),
    getUser: id => context.$axios.$get(`users/${id}`),
    addUser: data => context.$axios.$post('users', data),
    updateManyUsers: body => context.$axios.$patch('users', body)
  })
  inject('calendarApi', {
    getAvailableTimes: data => context.$axios.$get('calendar/available-times', {params: data}),
    saveDate: data => context.$axios.$post('calendar', data),
    getEvents: () => context.$axios.$get('calendar')
  })
  inject('boatModelsApi', {
    updateBoatModel: (id, data) => context.$axios.$patch(`boat-models/${id}`,  data),
    addBoatModel: data => context.$axios.$post('boat-models', data),
    getBoatModels: () => context.$axios.$get('boat-models')
  })
  inject('smsApi', {
    sendMessage: data => context.$axios.$post('message-bird/send-sms', data),
  })
  inject('queueApi', {
    getQueue: () => context.$axios.$get('queue'),
    addToQueue: (userId) => context.$axios.$post('queue', {user_id: userId}),
    removeFromQueue: (userId) => context.$axios.$delete(`queue/${userId}`),
  })
}
