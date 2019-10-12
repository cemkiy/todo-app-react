import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import TodoList from './containers/TodoList'
import TodoForm from './containers/TodoForm'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer, {todos:[]})

render(
  <Provider store={store}>
    <div>
      <TodoForm />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('root')
)
