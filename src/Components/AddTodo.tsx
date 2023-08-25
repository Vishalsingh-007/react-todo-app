import React, { FormEvent, useState } from 'react'
import { useTodos } from '../context/context';
import { useSearchParams } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import { AiTwotoneDelete } from 'react-icons/ai';

const AddTodo = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo, handleAddToDo } = useTodos();

  const [searchParams] = useSearchParams();
  let todos̥Data = searchParams.get("todos");
  const [todo, setTodo] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo)
    setTodo("")
  }
  let filterData = todos;

  if (todos̥Data === "active") {
    filterData = filterData.filter((task) => !task.completed)
  }

  if (todos̥Data === "completed") {
    filterData = filterData.filter((task) => task.completed)
  }


  return (
    <>
      <div className='w-[35%] mt-5'>
        <form onSubmit={handleFormSubmit}>
          <div className="relative flex h-10 w-full mb-2">
            <input
              type="text"
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
              className={`${todo.length ===0 ? "peer" : ""}  h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
              placeholder=""
              required
            />
            <button
              className="!absolute flex items-center right-1 top-1 z-10 select-none rounded bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
             <IoIosCreate className="mr-2"/> Add
            </button>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
              Write Your Todo
            </label>
          </div>
        </form>
        <div className={`overflow-y-auto scrollbar-dark h-[250px]`}>
        {filterData.map((fildata) => {
          return <div className='flex items-center justify-center' key={fildata.id}>
            <ul className="items-center w-full text-sm font-medium text-black bg-transparent  sm:flex  ">
              <li className="w-full ">
                <div className="flex items-center pl-3">
                  <input id={`todo-${fildata.id}`} checked={fildata.completed} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-blue-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " onChange={() => toggleTodoAsCompleted(fildata.id)} />
                  <label htmlFor={`todo-${fildata.id}`} className={`${fildata.completed ? "line-through" : ""} w-full py-3 ml-2 text-sm font-medium text-black `}>{fildata.task}</label>
                </div>
              </li>
              {fildata.completed && <button type="button" className="text-white mt-2 flex bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => handleDeleteTodo(fildata.id)}><AiTwotoneDelete className='mr-2'/> Delete</button>}
            </ul>
          </div>
        })}
        </div>
      </div>
    </>
  )
}
export default AddTodo