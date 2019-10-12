import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import TodoList from './components/TodoList'
import TodoForm from './containers/TodoForm'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer, {todos:[]})

store.dispatch({
  type: 'SET_TAGS_FILTER',
  filter: {}
})

render(
  <Provider store={store}>
    <TodoForm />
    <TodoList />
  </Provider>,
  document.getElementById('root')
)
