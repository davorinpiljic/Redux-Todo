import React from 'react'
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from './actions';
import { Badge } from 'reactstrap';


class TodoList extends React.Component {

    toggleTodo = (event, key) => {
        this.props.toggleTodo(key)
    }

    deleteTodo = (event, key) => {
        this.props.deleteTodo(key)
    }

    render() {
        return(
            <div >
            {this.props.todo.map((element, key) => {
               return( 
               <div  className="todo" key={key}>
                    <h4  onClick={element => this.toggleTodo(element, key)} 
                         style={element.completed ? { textDecoration: 'line-through', fontSize: '1.4rem', opacity: '.6'} : null}>
                         {element.task}
                    </h4>
                    <Badge  color="danger" 
                            onClick={element => this.deleteTodo(element, key)}>
                            x
                    </Badge>
                </div>)})}  
            </div>)
    }}    
        
const mapState = (state) => {
    return {
        todo: state.todo
    }
}


export default connect(mapState, {toggleTodo, deleteTodo})(TodoList) 
