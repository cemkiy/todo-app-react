import { setTagsFilter, toggleTodo, addTodo } from './actions'

const axios = require('axios').create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

const getTodos = function (dispatch, filter) {
  axios.get('/todos', filter)
    .then(function (response) {
      dispatch(setTagsFilter(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

const patchTodo = function (dispatch, id, status) {
  axios.patch('/todos/' + id, {
    status: status
  })
    .then(function (response) {
      dispatch(toggleTodo(id, status))
    })
    .catch(function (error) {
      console.log(error)
    })
}

const postTodo = function (dispatch, todo) {
  axios.post('/todos', {
    header: todo.header.value,
    description: todo.description.value
  })
    .then(function (response) {
      dispatch(addTodo(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

export {
  getTodos,
  patchTodo,
  postTodo
}
