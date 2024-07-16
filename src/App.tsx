import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col  justify-center items-center font-sans min-h-screen bg-[#f1d4b3]">
      <BackgroundHeading />
      <main
        className="w-[972px] relative h-[610px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
      >
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;