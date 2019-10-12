import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Table, Header, Image } from 'semantic-ui-react'

const Todo = () => (
        <Table.Row>
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
                {this.props.todo.header}
                <Header.Subheader>{this.props.todo.description}</Header.Subheader>
                <Header.Subheader>{this.props.todo.tags}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
)

export default Todo
