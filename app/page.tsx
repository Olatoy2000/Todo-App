import Head from "next/head";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos()
  console.log(tasks)
  return (
    <main className="mx-auto max-w-4xl mt-4 ">
      <section className="my-5 flex flex-col gap-4 text-center"  >
        <h1 className="text-2xl font-bold">To do App</h1>
        <AddTask />
      </section>
      <TodoList />
    </main>
  );
}
