import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex flex-wrap mt-10 screen justify-between gap-5'>
      <div className=' w-[45%]  p-10 bg-red-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>

      </div>
      <div className=' w-[45%]  p-10 bg-blue-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Complete Task</h3>

      </div>
      <div className=' w-[45%]  p-10 bg-green-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold text-black'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium text-black'>Active Task</h3>

      </div>
      <div className=' w-[45%] p-10 bg-yellow-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>FailedTask</h3>

      </div>

    </div>
  )
}

export default TaskListNumbers