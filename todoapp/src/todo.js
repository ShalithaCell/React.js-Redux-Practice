import React from 'react'

const Todos = ({todos, deleteHandler}) => {

    const todoList = todos.length ? (
        todos.map(item => {
            return(
                <li className="list-group-item" key={item.id} >
                    {item.content}
                    <input type="button" className="btn red darken-1 float-right" value="Remove" onClick={() => {deleteHandler(item.id)}}/>
                </li>
            )
        })
    ) : (
        <p className="center">No toto List......</p> 
    )

    return (
        <div className="todos collection">
            <div className="card">
            <ul className="list-group list-group-flush">
                {todoList}
            </ul>
            </div>
            
        </div>
    )
}

export default Todos;