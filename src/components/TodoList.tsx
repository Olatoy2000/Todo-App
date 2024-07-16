import { useState } from "react";
import DeletButton from "./DeleteButton";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "buy gloceries",
      isCompleted: false,
    },
    {
      id: 2,
      text: "do laundry",
      isCompleted: true,
    },
    {
      id: 3,
      text: "prepare for exam",
      isCompleted: false,
    },
  ]);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                }
                return t;
              })
            );
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : " "}`}
          >
            {todo.text}
          </span>
          <DeletButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
};
