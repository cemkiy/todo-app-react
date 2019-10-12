const reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [ ...state.todos, action.todo ]
      }
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo._id === action.id ? { ...todo, status: action.status } : todo
        )
      }
    case 'SET_TAGS_FILTER':
      return {
        todos: action.todos
      }
    default:
      return state
  }
}

export default reducer
