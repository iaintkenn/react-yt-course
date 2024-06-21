import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';

function App() {
  const client = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={client}> 
        <Router>
            <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<h1>Error 404</h1>}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
      
    </div>
  )
}


// const User = (props) => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>My name is {props.name}</h2>
//       <h3>I am {props.years} years old</h3>
//     </div>
//   )

// }

// const Job = (props) => {
//   return (
//     <div>
//       <h1>{props.position}</h1>
//       <h2>{props.company}</h2>
//       <h2>${props.salary}</h2>
//     </div>

//   )
// }

// // useState Hook: const [var, func] = useState(init_val)
// const [age, setAge] = useState(0); 

// const increaseAge = () => {
//   setAge(age + 1);
// }

// const decreaseAge = () => {
//   setAge(age - 1);
// }

// ------------------------- TODO LIST -------------------------

// function App() {
//   const [todoList, setTodoList] = useState([])
//   const [newTask, setNewTask] = useState("")

//   const deleteTask = (taskID) => {
//     setTodoList(todoList.filter((task) => task.id !== taskID))
//   }

//   const completeTask = (taskID) => {
//     setTodoList(todoList.map((task) => {
//       if (task.id === taskID) {
//         return { ...task, completed: true}
//       }
//       else return task
//     }))
    
//   }

//   return (
//     <div className="App">

//       <div className="addTask">
//         <input type="text" onChange={(event) => {
//           setNewTask(event.target.value)
//         }}/>
//         <button onClick={() => {
//           const task = {
//             id: todoList.length === 0 ? 1 : todoList.length + 1,
//             taskName: newTask,
//             completed: false
//           }
//           setTodoList([...todoList, task])
//         }}>Add Task</button>
//       </div>

//       <div className="list">
//         {todoList.map((todo) => {
//           return <Task 
//             taskName={todo.taskName} 
//             id={todo.id} 
//             isComplete={todo.completed}
//             deleteTask={deleteTask}
//             completeTask={completeTask}
//           />
//         })}
//       </div>

//     </div>
//   );
// }

// ----------------------------------------------------------



// -------------- USING useEffect to fetch data from API ---------------

// function App() {
//   const [excuse, setExcuse] = useState("")

//   const fetchAPI = (excuse) => {
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse${excuse}`)
//       .then((res) => {
//         setExcuse(res.data[0].excuse)
//       })
    
//   }

//   useState(() => {
//     fetchAPI(" ")
//   }, [])

//   return (
//     <div className="App">
//       <h1>Generate an Excuse</h1>
//       <button onClick={() => fetchAPI("/family")}>Family</button>
//       <button onClick={() => fetchAPI("/office")}>Office</button>
//       <button onClick={() => fetchAPI("/college")}>College</button>
//       <button onClick={() => fetchAPI("/funny")}>Funny</button>
//       <button onClick={() => fetchAPI("/unbelievable")}>Unbelievable</button>

//       <p> {excuse} </p>
//     </div>
//   )
// }

// ---------------------------------------------------------------------

export default App;
