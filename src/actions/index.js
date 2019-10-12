export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
})

export const setTagsFilter = todos => ({
  type: 'SET_TAGS_FILTER',
  todos
})

export const toggleTodo = (id, status) => ({
  type: 'TOGGLE_TODO',
  id,
  status
})
