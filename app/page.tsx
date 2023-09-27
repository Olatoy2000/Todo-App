import Head from "next/head";
import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl mt-4 ">
      <section className="my-5 flex flex-col gap-4 text-center"  >
        <h1 className="text-2xl font-bold">To do App</h1>
        <AddTask />
      </section>
    </main>
  );
}
