import React from 'react'
import { addTodo, toggleTodo } from './actions';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
        }
    }

    handleInput = event => {
        this.setState( {task: event.target.value})
        console.log(this.state.task)
    }

    addTodo = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.task)
        this.setState({task: ''})
    }

    render() {
        return(      <div >
        <Form inline className="form" onSubmit={this.addTodo}>
          <Input
            onChange={this.handleInput}
            placeholder="todo"
            value={this.state.task}
            name="task"
          />
          <Button
            color="primary" 
            type="submit" 
          >Add Todo</Button>
        </Form>
      </div>)
    }
}

const mapState = (state) => {
    return {
        todo: state.todo
    }
}

export default connect(mapState, { addTodo, toggleTodo })(InputForm) 
