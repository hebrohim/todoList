import { useContext } from "react";

import { todoContext } from "../App";
const DisplayTodos = () => {
  const todos = useContext(todoContext);
  let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]

  let fullDate = new Date()
  let date = fullDate.getDate()
   let day = days[fullDate.getDay()]
let month =months[ fullDate.getMonth()]

let year = fullDate.getFullYear()

  return (
    <div className="bg-white mx-5 shadow-lg shadow-black rounded-lg -translate-y-10">
      {todos.map((todo, index) => {
        return (
          <section>
           
            <div className=" p-5 flex justify-between ">
              <input type="checkbox" />
              <h1 key={index}>{todo.task}</h1>
              <span>X</span>
            </div>
            <div className="h-[1px] bg-black"></div>
          </section>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
