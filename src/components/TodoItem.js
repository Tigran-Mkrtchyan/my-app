const TodoItem = ({todo, onChange, onDelete}) => {
    return (
        <div>
            <label>
                <input type='checkbox' checked={todo.isDone} onChange={e => {
                    onChange({
                        ...todo,
                        isDone: e.target.checked
                    })
                }}/>
                <span>{todo.title}</span>
                <button onClick={e=>{
                     onDelete(todo)
                }}>X</button>
            </label>
        </div>)
}

export default TodoItem
