import React from 'react'
import { addTodo, toggleTodo } from './actions';
import { connect } from 'react-redux';



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
        console.log('clicked')
    }

    render() {
        return(      <div className="form-group">
        <form onSubmit={this.addTodo}>
          <input
            class="form-control"
            onChange={this.handleInput}
            placeholder="todo"
            value={this.state.task}
            name="task"
          />
          <button 
            type="submit" 
            class="btn btn-primary"
          >Submit ToDo</button>
        </form>
      </div>)
    }
}

const mapState = (state) => {
    return {
        todo: state.todo
    }
}

export default connect(mapState, { addTodo, toggleTodo })(InputForm) 
