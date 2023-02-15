import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListContainer = () => {
    const [todoLists, setTodoLists] = useState([]);

    const addTodoItem = (e) => {
        console.log(e.key, e.target.value)
        if (e.key === "Enter" && e.target.value !== "") {
            axios.post("/api/v1/todo_lists", {
                todo_list: { title: e.target.value, done: false }
            }).then(res => {
                setTodoLists([...todoLists, res.data])
            }).catch(err => console.log(err));
        }
    }
    const fetchTodoLists = () => {
        axios.get("/api/v1/todo_lists")
            .then(res => setTodoLists(res.data))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        fetchTodoLists();
    }, []);

    return (
        <div>
            <div className='taskContainer'>
                <input
                    className='newTask'
                    type='text'
                    placeholder='Input a new task and press Enter'
                    maxLength="75"
                    onKeyDown={addTodoItem}
                />
            </div>
            <div className='wrapItems'>
                <ul className='listItems'>
                    {todoLists.map(tdlist => (
                        <li className='item' tdlist={tdlist} key={tdlist.id}>
                            <input className="itemCheckbox" type="checkbox" />
                            <label className="itemDisplay">{tdlist.title}</label>
                            <span className="removeItemButton">x</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoListContainer;