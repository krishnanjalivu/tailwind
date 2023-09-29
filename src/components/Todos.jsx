import { useState } from "react"
import { useRecoilState } from "recoil"
import { todoState } from "../state/atoms/TodoState.js"
import Todo from "./Todo.jsx";

export default function Todos()
{
    const [todos, settodos]=useRecoilState(todoState)
    const [inputText, setInputText]=useState('');
    function addTodo()
    {
        settodos((prevtodos)=>[...prevtodos,{id:Math.random(),text:inputText}])
        setInputText('')
        console.log(typeof todos)
        
    }
    function handleInputChange(e)
    {
        setInputText(e.target.value)
    }
    function clearTodos()
    {
        settodos([])
    }
   
  
    return(
        
            <main>
            <input value={inputText} onChange={handleInputChange} type="text" id="todoInput"></input>
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearTodos}>Clear Todos</button>
             {
                
                todos.map((todo)=>{
                    return(
                        <Todo key={todo.id} text={todo.text} id={todo.id} />
                       
                    )
                })
             }
            </main>
        
    )
}