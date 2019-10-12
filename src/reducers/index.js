const axios = require('axios').create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

const reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      axios.post('/tasks', {
        header: action.todo.header.value,
        description: action.todo.description.value,
        tags: action.todo.tags.value.split(',')
      })
        .then(function (response) {
          state.todos.push(response.data)
          return state
        })
        .catch(function (error) {
          console.log(error)
          return state
        })
      break
    case 'TOGGLE_TODO':
      axios.patch('/tasks/' + action.id, {
        status: action.status
      })
        .then(function (response) {
          state.map(task =>
            task.id === action.id ? { ...task, status: action.status } : task
          )
          return state
        })
        .catch(function (error) {
          console.log(error)
          return state
        })
      break
    case 'SET_TAGS_FILTER':
      return axios.get('/tasks', {
        params: action.filter
      })
        .then(function (response) {
          return {
            todos: response.data
          }
        })
        .catch(function (error) {
          console.log(error)
          return state
        })
    default:
      return state
  }
}

export default reducer
