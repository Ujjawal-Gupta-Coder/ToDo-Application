import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {

  const handleInput = (dets) => {
    props.setVal(dets.target.value)
  }
  const addTask = (dets) => {
    dets.preventDefault()
    props.setTask([...props.task, {
        value : props.val,
        id : uuidv4(),
        done : false,
      }])
    props.setVal("")
    props.setBtn("Add")
    let temp = [...props.task, {
      value : props.val,
      id : uuidv4(),
      done : false,
    }]
    localStorage.setItem("todos", JSON.stringify(temp))
  }
  return (
    <div className='flex flex-col items-center mt-5 gap-10 mb-8 px-1'>
      <h1 className='font-bold text-2xl md:text-3xl playwrite-font tracking-wide text-black text-center'>Organize Your Day</h1>
      <form className='border-2 border-black rounded-xl bg-purple-200 w-[85%] flex justify-between overflow-hidden items-center'>
        <input type="text" className='bg-transparent text-gray-800 my-2 mx-3 w-[85%] outline-none h-[10%] text-lg md:text-2xl' value={props.val} onChange={handleInput} placeholder='Describe Task Here'/>
        <button type="submit" className='text-white font-bold text-2xl bg-purple-600 py-2 px-3 disabled:text-gray-400 disabled:bg-purple-900' onClick={addTask} disabled={props.val.length === 0}> {props.btn} </button>
      </form>
    </div>
  )
}

export default TodoForm
