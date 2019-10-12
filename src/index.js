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
    <div className="ui two column stackable grid">
      <div className="column">
        <TodoForm />
      </div>
      <div className="column">
        <TodoList />
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
)
