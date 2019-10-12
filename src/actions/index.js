export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
})

export const setTagsFilter = filter => ({
  type: 'SET_TAGS_FILTER',
  filter
})

export const toggleTodo = (id, status) => ({
  type: 'TOGGLE_TODO',
  id,
  status
})
