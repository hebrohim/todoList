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
  if (localStorage.getItem("tasks") === null) {
    tasks = todo;
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks")!);
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
    if (localStorage.getItem("tasks") === null) {
      tasks = todo;
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks")!);
    }
    tasks.push({ task: task, deadline: deadline });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // console.log(tasks)

    // empty input field after adding task
    setTask("");
    setDeadline(0);
  };

  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let fullDate = new Date();
  let date = fullDate.getDate();
  let day = days[fullDate.getDay()];
  let month = months[fullDate.getMonth()];

  let year = fullDate.getFullYear();

  return (
    <div>
      <todoContext.Provider value={tasks}>
        <form className=" h-[40vh] bg-[ url(./slider2.jpg),linear-gradient(to_bottom_right,#a52a2a84,#a52a2a82)] border-b-2 border-slate-800 p-5 md:py-10 lg:py-12 flex flex-col justify-center items-center md:flex-row md:h-[60vh] ">
          <div className="px-7 py-4 -mt-10 mb-10 outline-dashed outline-slate-800 flex flex-col md:mr-10 bg-[#fffdfdc0] rounded-s-full md:mt-8 md:mb-0 md:py-2">
            <h1 className="text-4xl font-medium">{day}</h1>
            <h1 className="text-sm text-center font-medium">
              {month} {date},{year}
            </h1>
          </div>
          <input
            name="taskInput"
            value={task}
            className="w-full -mt-8 px-3 py-2 border-[1px] border-slate-800 rounded-md focus:outline-none md:w-1/2 md:mt-0"
            placeholder="Add task here ..."
            onChange={handleChange}
          />

          {/* <input
          value ={JSON.stringify(deadline)}
            name="deadlineInput"
            type="number"
            className="w-full px-3 py-2 mt-5 border-[1px] border-slate-800 rounded-md focus:outline-none md:mt-0 md:ml-2"
            placeholder="Enter task deadline"
            onChange={handleChange}
          /> */}
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
