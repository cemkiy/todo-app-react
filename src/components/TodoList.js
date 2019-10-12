import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Table, Header, Image } from 'semantic-ui-react'

const TodoList = ({todos}) => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Tasks</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {todos.map(todo =>
        <Table.Row key={todo._id}>
          <Table.Cell>
            <Button animated='vertical'>
              <Button.Content hidden>Shop</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Header as='h4' image>
              <Header.Content>
                {todo.header}
                <Header.Subheader>{todo.description}</Header.Subheader>
                <Header.Subheader>{todo.tags}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
        )}
    </Table.Body>
  </Table>
)

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(
  mapStateToProps
)(TodoList)
