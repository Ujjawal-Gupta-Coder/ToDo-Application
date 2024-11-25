import React, { useEffect, useState } from 'react'

function TodoItems(props) {
  const [isComplete, setComplete] = useState(false);
  useEffect(() => {
    props.task.map((elem) => {
      if(elem.id === props.id) {
        setComplete(elem.done)
      } 
    })
  })
  const handleCheck = () => {
    const newTask = props.task.map((elem) => {
      if(elem.id === props.id) {
        elem.done = !elem.done
      }
      return elem
    })
    props.setTask(newTask)
    localStorage.setItem("todos", JSON.stringify(newTask))
  }
  const handleEdit = () => {
    const newTask = props.task.filter((elem) => {
      if(elem.id === props.id) {
        props.setVal(elem.value); 
        props.setBtn("Save")   
        return false
      }
      return true
    })
   props.setTask(newTask)
   localStorage.setItem("todos", JSON.stringify(newTask))
  }
  const handleDelete = () => {
    const newTask = props.task.filter((elem) => {
      return (props.id !== elem.id)
    })
    props.setTask(newTask)
    localStorage.setItem("todos", JSON.stringify(newTask))
  }
  return (
      
      <div className= {`my-5 w-[85%] mx-auto border-2 border-black rounded-lg h-[60px] min-h-[60px] flex items-start md:items-center flex-col md:flex-row  px-2 ${isComplete ? 'bg-green-500 line-through' : 'bg-sky-200' } hover:text-white `} >

        <p className='w-[100%] md:w-[75%] overflow-scroll text-nowrap scroll-hide text-xl'>{props.value}</p>
        
        <div>
        <i className={isComplete ? 'fa-solid fa-circle-xmark md:text-2xl cursor-pointer mx-1 hover:text-red-600' : 'fa-solid fa-circle-check md:text-2xl cursor-pointer mx-1 hover:text-green-600' }onClick={handleCheck}></i>
        <i className="fa-solid fa-pen-to-square md:text-2xl cursor-pointer mx-1 hover:text-purple-600" onClick={handleEdit}></i>
        <i className="fa-solid fa-trash md:text-2xl cursor-pointer mx-1 hover:text-red-600" onClick={handleDelete}></i>
        </div>
    </div>
    
  )
}

export default TodoItems
