import { useContext, useRef } from "react";

import { todoContext } from "../App";
type todoObject = {
  task: string;
  deadline: Number;
  isChecked: Boolean;
};

type todoProps = {
  setTodo: React.Dispatch<React.SetStateAction<todoObject[]>>;
};
const DisplayTodos = ({ setTodo}: todoProps) => {
  let tasks = useContext(todoContext);

  //const [todos, setTodos] = useState(tasks)
  //   Delete task from list of tasks
  let newTodos;
  const deleteTask = (taskName: string) => {
    newTodos = tasks.filter((todo) => {
      return taskName != todo.task;
    });
    localStorage.setItem("tasks", JSON.stringify(newTodos));
    setTodo(newTodos);
  };

  // toogle iscompleted in todo
  const  handleCheck = (taskName:String) =>{
      
 const updatedTasks = tasks.map(todo=>
    taskName === todo.task?{...todo,isChecked: !todo.isChecked}:todo)
setTodo(updatedTasks)
console.log(updatedTasks)
localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  }

//   const toggleTodo = (id: number) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };


  return (
    <div className=" bg-white mx-5 shadow-lg shadow-black rounded-lg -translate-y-10 md:my-0 md:mx-auto md:w-[50vw] md:-translate-y-24">
      {tasks.map((todo, index) => {
        
        return (
          <section key={index}>
            <div className=" p-5 flex justify-between ">
              <input
                type="checkbox"
                checked  = {todo}
                onChange={() => {
                  handleCheck(todo.task);
                }}
              />
              <h1 key={index} className={todo.isChecked? "line-through":""}>{todo.task}</h1>
              <button
                className="border-2 p-2 rounded-full"
                onClick={() => {
                  deleteTask(todo.task);
                }}
              >
                X
              </button>
            </div>
            <div className="h-[1px] bg-black"></div>
          </section>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
