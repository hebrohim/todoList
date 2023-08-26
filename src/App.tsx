import { useState } from "react";
import { createContext } from "react";
import DisplayTodos from "./components/DisplayTodos";
type todoObject = {
  task: string;
  deadline: Number;
};



export const todoContext = createContext<todoObject[]>([]);

let tasks;
const App = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<Number>(0);
  const [todo, setTodo] = useState<todoObject[]>([]);
 

  // create a task variable to store in localStorage
  if(localStorage.getItem("tasks") === null){

    tasks  = todo
    
    }
    
    else{
      tasks = JSON.parse(localStorage.getItem("tasks")!)
    }

  
    
  //handle user input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "taskInput") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  //Add task to todo list

  const addTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTodo([...todo, { task: task, deadline: deadline }]);
// add todo to local Storage
    if(localStorage.getItem("tasks") === null){

      tasks  = todo
      
      }
      
      else{
        tasks = JSON.parse(localStorage.getItem("tasks")!)

      }
      tasks.push({task: task, deadline: deadline})
      localStorage.setItem("tasks",JSON.stringify(tasks))
      // console.log(tasks)


      // empty input field after adding task
      setTask("")
      setDeadline(0)
  };
  return (
    <div>
      <todoContext.Provider value={tasks}>
        <form className=" bg-white border-b-2 border-slate-800 p-5 md:py-10 lg:py-12 flex flex-col justify-center items-center md:flex-row ">
          <input
            name="taskInput"
            value= {task}
            className="w-full px-3 py-2 border-[1px] border-slate-800 rounded-md focus:outline-none"
            placeholder="Add task here ..."
            onChange={handleChange}
          />

          <input
          value ={JSON.stringify(deadline)}
            name="deadlineInput"
            type="number"
            className="w-full px-3 py-2 mt-5 border-[1px] border-slate-800 rounded-md focus:outline-none md:mt-0 md:ml-2"
            placeholder="Enter task deadline"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full mt-3 py-2 bg-slate-700 text-white  rounded-md hover:bg-slate-500 md:w-[20%] md:mt-0 md:ml-3"
            onClick={addTask}
          >
            Add Task
          </button>
        </form>

        <DisplayTodos />

        
      </todoContext.Provider>

     
    </div>
  );
};

export default App;
