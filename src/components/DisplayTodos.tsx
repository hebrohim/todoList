import { useContext } from "react";

import { todoContext } from "../App";
const DisplayTodos = () => {
  const todos = useContext(todoContext);
 
  return (
    <div className="bg-white mx-5 shadow-lg shadow-black rounded-lg -translate-y-10">
      {todos.map((todo, index) => {
        return (
          <section key={index}>
           
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
