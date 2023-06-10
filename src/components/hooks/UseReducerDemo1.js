import React from "react";
import { useRef } from "react";
import { useReducer } from "react";

const initialTodos = [
  { id: 1, title: "Todo 1", complete: false },
  { id: 2, title: "Todo 2", complete: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

let nextTodoId = 3;

export default function UseReducerDemo1() {
  const [myToDos, dispatch] = useReducer(reducer, initialTodos);
  const myRef = useRef();

  const toggleMyTodo = function (id) {
    const actionObj = { type: "TOGGLE", id: id };
    dispatch(actionObj);
  };
  const deleteMyTodo = function (id) {
    const actionObj = { type: "DELETE", id: id };
    dispatch(actionObj);
  };
  const addNewToDo = function () {
    const actionObj = {
      type: "ADD",
      payload: {
        id: nextTodoId++,
        title: myRef.current.value,
        complete: false,
      }
    };
    dispatch(actionObj);
  };

  return (
    <>
      <h2>Use Reducer Demo</h2>

      <ul>
        {myToDos.map((todo) => {
          return (
            <li>
              <span
                style={{
                  textDecoration: todo.complete ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
              <button className="m-1" onClick={() => toggleMyTodo(todo.id)}>
                Toggle
              </button>
              <button onClick={() => deleteMyTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <input ref={myRef} />
      <button onClick={addNewToDo}>Add ToDo</button>
    </>
  );
}
