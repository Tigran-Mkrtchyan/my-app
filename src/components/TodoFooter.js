import React from "react";

function TodoFooter({todos, onClear}) {
   let doneSize= todos.filter(todo=> todo.isDone).length
    return (
        <div>
            <span> {doneSize}/{todos.length} completed</span>
            <button onClick={onClear}>Clear completed</button>
        </div>)
}




export default TodoFooter