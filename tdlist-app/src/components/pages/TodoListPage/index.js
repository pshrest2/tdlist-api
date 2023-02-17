import React, { useCallback, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import MySpinner from "components/shared/MySpinner";

const TodoListPage = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [fetchingList, setFetchingList] = useState(false);

  const deleteTodoList = useCallback(
    (id) => {
      axios
        .delete(`/api/v1/todo_lists/${id}`)
        .then((res) => {
          const updatedTodoLists = todoLists.filter((list) => list.id !== id);
          setTodoLists(updatedTodoLists);
        })
        .catch((err) => console.log(err));
    },
    [todoLists]
  );

  const updateTodoList = useCallback(
    (id, data) => {
      axios
        .put(`/api/v1/todo_lists/${id}`, {
          todo_list: data,
        })
        .then((res) => {
          const updatedTodoLists = todoLists.map((list) =>
            list.id === id ? res.data : list
          );
          setTodoLists(updatedTodoLists);
        })
        .catch((err) => console.log(err));
    },
    [todoLists]
  );

  const createTodoItem = useCallback(
    (e) => {
      if (e.key === "Enter" && e.target.value !== "") {
        axios
          .post("/api/v1/todo_lists", {
            todo_list: { title: e.target.value, done: false },
          })
          .then((res) => {
            setTodoLists([...todoLists, res.data]);
          })
          .catch((err) => console.log(err));
        setTodoItem("");
      }
    },
    [todoLists]
  );
  const fetchTodoLists = useCallback(async () => {
    axios
      .get("/api/v1/todo_lists")
      .then((res) => setTodoLists(res.data))
      .catch((err) => toast.error(err));
  }, []);

  useEffect(() => {
    setFetchingList(true);
    fetchTodoLists()
      .then(() => setFetchingList(false))
      .catch(() => toast.error("Somethign went wrong while fetching todo list"))
      .finally(() => setFetchingList(false));
  }, [fetchTodoLists]);

  if (fetchingList) return <MySpinner />;

  return (
    <div>
      <div className="taskContainer">
        <input
          className="newTask"
          type="text"
          placeholder="Input a new task and press Enter"
          maxLength={75}
          onKeyDown={createTodoItem}
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
      </div>
      <div className="wrapItems">
        <ul className="listItems">
          {todoLists.map((tdlist) => (
            <li className="item" key={tdlist.id}>
              <Form.Check
                type="checkbox"
                label={tdlist.title}
                onChange={(e) =>
                  updateTodoList(tdlist.id, { data: e.target.checked })
                }
                checked={tdlist.done}
              />
              <div className="buttons-container">
                <Button
                  variant="danger"
                  onClick={() => deleteTodoList(tdlist.id)}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListPage;
