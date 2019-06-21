import React from 'react'
import { connect } from 'react-redux';
import mapComponent from './mapComponent'
import { addTodo, toggleTodo } from './actions';

class TodoList extends React.Component {

    toggleTodo = (event, key) => {
        this.props.toggleTodo(key)
    }

    render() {
        return(
            <div>
            {this.props.todo.map((element, key) => {
               return( <div className="todo"><h4 key={key} onClick={element => this.toggleTodo(element, key)} 
                        style={element.completed ? { textDecoration: 'line-through'} : null}>{element.task}</h4><p>[x]</p></div>)})}
            </div>)
    }}

        
        

const mapState = (state) => {
    return {
        todo: state.todo
    }
}


export default connect(mapState, {toggleTodo})(TodoList) 
