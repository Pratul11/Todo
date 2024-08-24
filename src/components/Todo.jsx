import React from 'react'
import { useState, useEffect } from 'react'

const Todo = () => {

    const[todo,setTodo] = useState("")
    const[todos,setTodos] = useState([])

    const handleEdit = () => {
        
    }

    const handleDelete = () => {

    }

    const handleAdd = () => {
        setTodos([...todos, {todo, isCompleted: false}])
        setTodo("")
        console.log(todos)
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    // const handleFinish = (e) => {
    // }

    // const [style, setStyle] = useState("nocompleted");
 
    // const changeStyle = () => {
    //     console.log("you just clicked");
    //     if (style !== "nocompleted") setStyle("nocompleted");
    //     else setStyle("completed");
    // };

    return (
        <div>
            <div className="container">
                <div className="todo-head">
                    <h1>TODO LIST</h1>
                </div>
                <div className="todo-body">
                    <input onChange={handleChange} value={todo} type="text" name="task" id="task-input" placeholder="add item..."/>
                    <button onClick={handleAdd} className="task-add-btn">ADD</button><br/>
                    <div className="render-tasks">
                        {/* <div className="finished">
                            <input type="checkbox" name="" id="finish" />
                            <p>Show Finished Task</p>
                        </div> */}
                        {todos.map(item => {
                            return <div className="task">
                                {/* <input onClick={changeStyle} type="checkbox" name="" id="task-check" /> */}
                                <p className="nocompleted" id="task-name">{item.todo} </p>
                                <button onClick={handleEdit}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            .
        </div>
    )
}

export default Todo
