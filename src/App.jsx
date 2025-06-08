import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  // State
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar X",
      description: "Estudar X é bom para resolver Y",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Y",
      description: "Estudar X é bom para resolver Y",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Z",
      description: "Estudar X é bom para resolver Y",
      isCompleted: false,
    },
  ]);
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      return task;
    });
    setTasks(newTasks);
  }
  function onTaskDelete(taskId) {
    const toDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(toDelete);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
