import { useContext } from "react"

import { todoContext } from "../App"
const DisplayTodos = () => {

    const todos = useContext(todoContext)
    
    
  return (
    <div>


        {
            todos.map((todo,index)=>{
return <h1 key={index}>{todo.task}</h1>
            })
        }
    </div>
  )
}

export default DisplayTodos