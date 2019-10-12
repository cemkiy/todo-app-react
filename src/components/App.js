import React from 'react'
import TodoList from './TodoList'
import TodoForm from './containers/TodoForm'
import 'semantic-ui-css/semantic.min.css'

const App = () => (
  <div>
    <TodoForm />
    <TodoList />
  </div>
)

export default App
