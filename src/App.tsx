import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TodoList } from "./components/TodoList";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col  justify-center items-center font-sans min-h-screen bg-[#f1d4b3]">
      <BackgroundHeading />
      <main
        className="w-[972px] relative h-[610px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
      >
        <Header todos={todos} />
        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <Sidebar todos={todos} handleAddTodo={handleAddTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
