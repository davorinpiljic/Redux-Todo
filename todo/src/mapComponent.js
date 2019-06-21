import React from 'react'

const mapComponent = (props) => {
    console.log(props)
            {props.todo.map(element => {
                return(
                    <div>
                        {element.task}
                    </div>)})}
                
            }

export default mapComponent 