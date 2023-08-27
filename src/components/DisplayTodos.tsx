import { useContext ,useState} from "react";

import { todoContext } from "../App";
const DisplayTodos = () => {
  const tasks = useContext(todoContext);

const [todos, setTodos] = useState(tasks)
//   Delete task

const deleteTask = (taskName:string) =>{

let newTodos = todos.filter((todo)=>{
return   taskName != todo.task
})
// console.log(newTodos)
setTodos(newTodos)
localStorage.setItem("tasks",JSON.stringify(newTodos))
}
  return (
    <div className=" bg-white mx-5 shadow-lg shadow-black rounded-lg -translate-y-10 md:my-0 md:mx-auto md:w-[50vw] md:-translate-y-24">
      {todos.map((todo, index) => {
        return (
          <section key={index}>
            <div className=" p-5 flex justify-between ">
              <input type="checkbox" />
              <h1 key={index}>{todo.task}</h1>
              <button className="border-2 p-2 rounded-full" onClick={()=>{deleteTask(todo.task)}}>X</button>
            </div>
            <div className="h-[1px] bg-black"></div>
          </section>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
