import { useSetRecoilState } from "recoil"
import { todoState } from "../state/atoms/TodoState"

export default function Todo({text,id})
{
    const settodos=useSetRecoilState(todoState)
    function deleteTodo()
    {
        settodos((prevtodos)=>{
            return prevtodos.filter((todo)=>todo.id!==id) //not gonna include if id is same into settodos
        })
    }
    return (
        <div>
            <p>{text}</p>
            <button onClick={deleteTodo}>X</button>
        </div>
    )
}