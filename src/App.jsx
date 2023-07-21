import Task from "./components/task";
import TaskList from "./components/TaskList";
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Task/>
      <TaskList/>
     
    </div>
  )
}

export default App;
