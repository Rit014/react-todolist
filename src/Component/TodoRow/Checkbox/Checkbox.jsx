import React, { useState } from 'react';

const Checkbox = ({ items, setItems }) => {

    const [hover, setHover] = useState(false);

    const deleteTodos = (id) => {
        const updateTodos = [...items];
        updateTodos.splice(id, 1);
        setItems(updateTodos);
    }

    return (
        <>
            {
                items.map((item, index) => {

                    return (
                        <div key={index}
                            id={index}
                            onSelect={deleteTodos}
                            className="w-7/12 items-center mb-3 flex flex-row justify-between gap-3 bg-white rounded px-5 py-2"
                            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                        >
                            <div className="w-full flex flex-row justify-between">
                                <div className='flex items-center gap-3'>
                                    <input type="checkbox" className='cursor-pointer text-orange-300' />
                                    <span>{item}</span>
                                </div>
                                <button
                                    style={{ visibility: hover === true ? '' : 'hidden' }}
                                    className='bg-green-700 px-3 py-1' onClick={deleteTodos}>
                                    <i className="fa-solid fa-xmark" style={{ color: "white" }} />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Checkbox;