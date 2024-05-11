import React, { useState } from 'react';
import TodoRow from './Component/TodoRow/TodoRow';

function App() {

  const [taskform, setTaskForm] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const itemEvent = (event) => {
    setTaskForm(event.target.value)
  }

  const addItem = () => {
    if (taskform.trim() !== '') {
      setItems((prev) => {
        return [...prev, taskform]
      })
      setTaskForm("");
    }
  };

  return (
    <>
      <div className="w-full h-lvh flex flex-col items-center bg-slate-500">
        <h1 className="text-3xl text-white my-9">Todo List</h1>
        <div className="w-5/12 flex flex-col items-center">

          <TodoRow items={items} taskform={taskform} setItems={setItems} />
          <form onSubmit={handleSubmit} className='flex flex-row'>
            <input type="text" placeholder='Add todo items...'
              className="py-2 px-4 text-xl rounded border-none outline-none"
              value={taskform}
              onChange={itemEvent}
            />
            <button className='add-item bg-green-700 px-5 py-3 rounded' onClick={addItem}>
              Add
            </button>
          </form>
        </div>
      </div >

    </>
  )
}

export default App;
