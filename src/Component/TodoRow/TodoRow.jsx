import React from 'react';
import Checkbox from './Checkbox/Checkbox';


const TodoRow = ({ items, taskform, setItems }) => {

    return (
        <>
            <Checkbox items={items} taskform={taskform} setItems={setItems} />
        </>
    )
}

export default TodoRow;