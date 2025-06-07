import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // State
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
