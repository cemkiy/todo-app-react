const reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push(action.todos)
      return state
    case 'TOGGLE_TODO':
      state.map(todo =>
        todo.id === action.id ? { ...todo, status: action.status } : todo
      )
      return state
    case 'SET_TAGS_FILTER':
      return {
        todos: action.todos
      }
    default:
      return state
  }
}

export default reducer
