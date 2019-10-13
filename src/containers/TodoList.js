import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Button, Icon, Table, Header, Divider } from 'semantic-ui-react'

const API = require('../api')

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    API.getTodos(this.props.dispatch, {})
  }

  toggle = (e, {todo}) => {
    let status = 'completed'
    if (todo.status === 'completed') status = 'incompleted'
    API.patchTodo(this.props.dispatch, todo._id, status)
 }

  render() {
    const {todos} = this.props

    return (
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell><Icon  name='idea' />Status</Table.HeaderCell>
            <Table.HeaderCell><Icon circular name='sticky note outline' />Tasks</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {todos.map(todo =>
            <Table.Row key={todo._id}>
              <Table.Cell>
              {todo.status==='completed' ?
              <Button todo={todo} animated onClick={this.toggle}
                color='green'
              >
                <Button.Content hidden>
                  <Icon name='backward' />
                </Button.Content>
                <Button.Content visible>
                  <Icon name='check' />
                </Button.Content>
              </Button> :
              <Button todo={todo} animated onClick={this.toggle}
                color='orange'
              >
                <Button.Content hidden>
                  <Icon name='check' />
                </Button.Content>
                <Button.Content visible>
                  <Icon name='question' />
                </Button.Content>
              </Button>}

              </Table.Cell>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    {todo.header}
                    <Header.Subheader>
                      (<Moment  fromNow>
                          {todo.last_activity_at}
                      </Moment>)<br />
                      {todo.description}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            )}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(
  mapStateToProps
)(TodoList)
