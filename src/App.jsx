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

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="main task"
          onChange={(e) => setMainTask(e.currentTarget.value)}
        />
        <br />
        <input
          type="text"
          placeholder="enter color"
          onChange={(e) => setColor(e.currentTarget.value)}
        />
        <br />
        {isMini && (
          <textarea onChange={(e) => setMiniTaskRaw(e.currentTarget.value)} />
        )}
        <br />
        <button onClick={(e) => setIsMini(!isMini)}>
          {isMini ? "Remove" : "Add"} Mini Tasks
        </button>
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        {tasks.map((tsk) => (
          <div key={tsk.id} style={{ background: tsk.color }}>
            <p>{tsk.mainTask}</p>
            {tsk.miniTasks.map((mTsk) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImRadioUnchecked />
                <p>{mTsk.miniTask}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
