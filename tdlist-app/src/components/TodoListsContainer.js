import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListContainer = () => {
    const [todoItem, setTodoItem] = useState('');
    const [todoLists, setTodoLists] = useState([]);

    const updateTodoList = (id, done) => {
        axios.put(`/api/v1/todo_lists/${id}`, {
            todo_list: { done }
        }).then(res => {
            const updatedTodoLists = todoLists.map(list => list.id === id ? res.data : list);
            setTodoLists(updatedTodoLists);
        }).catch(err => console.log(err));
    }
    const addTodoItem = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            axios.post("/api/v1/todo_lists", {
                todo_list: { title: e.target.value, done: false }
            }).then(res => {
                setTodoLists([...todoLists, res.data])
            }).catch(err => console.log(err));
            setTodoItem('')
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
                    value={todoItem}
                    onChange={e => setTodoItem(e.target.value)}
                />
            </div>
            <div className='wrapItems'>
                <ul className='listItems'>
                    {todoLists.map(tdlist => (
                        <li className='item' tdlist={tdlist} key={tdlist.id}>
                            <input className="itemCheckbox" type="checkbox" onChange={(e) => updateTodoList(tdlist.id, e.target.checked)} checked={tdlist.done} />
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