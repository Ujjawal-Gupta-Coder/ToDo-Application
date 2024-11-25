import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoContainer from './TodoContainer'

const Card = () => {
    const getLocalData = () => {
        let data = localStorage.getItem("todos");
        if(data) {
          return JSON.parse(data);
        } else {
          return []
        }
      }
    
    const [task, setTask] = useState(getLocalData())
    const [val, setVal] = useState("")
    const [btn, setBtn] = useState("Add")
  return (
    <div className='bg-orange-300 w-[85%] h-[85%] max-w-[500px] rounded-2xl overflow-hidden pb-2 mt-[30px]'>
        <TodoForm task = {task} setTask = {setTask} val={val} setVal={setVal} btn={btn} setBtn={setBtn}/> 
        <TodoContainer task = {task} setTask = {setTask} val={val} setVal={setVal} btn={btn} setBtn={setBtn}/> 
       </div>
  )
}

export default Card
