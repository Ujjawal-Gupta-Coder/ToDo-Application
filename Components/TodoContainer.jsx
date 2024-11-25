import React from 'react'
import Todoitem from './TodoItems'
import Swal from 'sweetalert2'
function TodoContainer(props) {
  
  const handleClear = () => {
    Swal.fire({
      title: 'Are you sure?',
      text : 'This will remove all the Task!',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes, Delete all',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if(result.isConfirmed) {
        Swal.fire("Deleted", 'All Task Deleted Successfully', 'success')
        props.setTask([])
        localStorage.clear()
      }
    })
  }
  return (
    <div className='overflow-scroll h-[66%] scroll-hide flex flex-col items-center'>
    {props.task.length == 0 && <h3 className='text-center'>No Task to display</h3>}
    {props.task.map((elem) => {
      return <Todoitem  key={elem.id} value={elem.value} id={elem.id} task={props.task} setTask={props.setTask} val={props.val} setVal={props.setVal} btn={props.btn} setBtn={props.setBtn}/> 
    })}
    {props.task.length >= 1 && <button className='text-sm bg-red-500 text-center py-2 px-3 border-2 border-black rounded-md text-white font-bold cursor-pointer hover:bg-red-700' onClick={handleClear}>Clear All Task</button>}
    </div>
  )
}

export default TodoContainer
