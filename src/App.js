import {useState} from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import TodoContent from './components/TodoContent';
import TodoForm from './components/TodoForm'

function App() {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            title: "Learn Js",
            isDone: false
        },
        {
            id: Math.random(),
            title: "Learn Css",
            isDone: false
        }
    ])

    return (
        <div className="App">

            <TodoHeader/>
            <TodoForm onAdd={(text) => {
                if (text === "") return;
                setTodos([
                    ...todos,
                    {
                        id: Math.random(),
                        title: text,
                        isDone: false
                    }
                ])
            }}/>
            <TodoContent todos={todos}
                         onChange={(changedTodo) => {
                             setTodos(todos.map(todo => {
                                 if (todo.id === changedTodo.id) {
                                     return changedTodo;
                                 }
                                 return todo;
                             }));
                         }}
                         onDelete={removedTodo => {
                                setTodos(todos.filter(todo => {
                                 return todo.id !== removedTodo.id
                             }))
                         }}
            />
            <TodoFooter todos={todos} onClear={() => {
                setTodos(todos.filter(todo => !todo.isDone))
            }}/>
        </div>
    );
}

export default App;
