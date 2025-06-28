<<<<<<< HEAD
import './App.css'
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/TodoItem2';
=======
import { useEffect, useState } from "react";
import { ImRadioUnchecked } from "react-icons/im";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [mainTask, setMainTask] = useState("");
  const [color, setColor] = useState("grey");
  const [isMini, setIsMini] = useState(false);
  const [miniTasksRaw, setMiniTaskRaw] = useState("");
  const [miniTasks, setMiniTasks] = useState([]);

  useEffect(() => {
    addMiniTask();
  }, [miniTasksRaw]);
  const addMiniTask = () => {
    if (!isMini) {
      console.log(miniTasks);
      console.log("another feat")
      setMiniTasks([]);
      return;
    }

    let miniTasksOne = miniTasksRaw.split("\n");
    let miniObjects = [];
    miniTasksOne.forEach((tsk) => {
      let obj = {
        id: Math.random() * 5000,
        miniTask: tsk,
        isDone: false,
      };
      miniObjects.push(obj);
    });
  
    setMiniTasks(miniObjects);
  };

  const addTask = () => {
    let obj = {
      id: Math.random() * 5000,
      mainTask: mainTask,

      color: color,
      miniTasks: miniTasks,
      isDone: false,
    };
    setTasks([...tasks, obj]);
  };
>>>>>>> 6c271807d40b459d0765edde58f9c9b00d8079e7

export default function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItem1/>
      <TodoItem2/>
    </center>
  );
}
