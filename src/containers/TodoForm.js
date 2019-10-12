import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

const API = require('../api')

const TodoForm = ({ dispatch }) => {
  let todo = {}

  return (
    <Form onSubmit={e => {
        e.preventDefault()
        if (!todo.header.value.trim()) {
          return
        }

        API.postTodo(dispatch, todo)
        todo = {}
      }}
    >
      <Form.Field>
        <label>Header</label>
        <input ref={node => (todo.header = node)} placeholder='go to market' />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input ref={node => (todo.description = node)} placeholder='tell us more about todo' />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input ref={node => (todo.tags = node)} placeholder='market,fruit,shopping' />
      </Form.Field>
      <Button className='primary' type='submit'>Add Todo</Button>
    </Form>
    )
}

export default connect()(TodoForm)
