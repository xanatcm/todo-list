import React from "react";

//styles
import '../styles/Todo.css'

const Todo = ({title, status, handleCompleteTodo, id}) => {

    return (
        <div className="todo-card">
            <div className="todo-title">
                <p>{title}</p>
            </div>

            <div className="btn-actions">
                <button
                    className={status ? "complete" : "reset"}
                    onClick={() => handleCompleteTodo(id)}
                >
                    {status ? "Reiniciar" : "¡Listo!"}
                </button>
            </div>
        </div>
    )
}

export default Todo;