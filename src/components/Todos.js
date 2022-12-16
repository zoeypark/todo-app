import React, {useState} from "react";
import styled from 'styled-components';
import { Todo } from './Todo';
import { dummyTodos } from '../static/data';
import './Todos.css';

export const Todos = ()=> {
    
    const [isTodo, setIsTodo] = useState("");
    const [todos, setTodos] = useState(dummyTodos);

    // console.log(isTodo);

    const handleChange = (e) => {
        setIsTodo(e.target.value);
    }

    const handleAdd = (e) => {
        const newTodo = {
            id: todos.length+1,
            content:
                isTodo,
            createdAt: new Date(Date.now()).toLocaleDateString('ko-kr')
        }
        setTodos([newTodo, ...todos]);
        console.log(newTodo);
        setIsTodo("");
    }

    return (
      <div>
        <div className="todo__addInput">
          <input
            className="todo__input"
            placeholder="Add todos..."
            onChange={handleChange}
            value={isTodo}
          ></input>
          <button className="todo__addBtn" onClick={handleAdd}>
            +
          </button>
        </div>
        <ul className="todos">
          {todos.map((el) => {
            return <Todo key={el.id} todo={el}/>;
          })}
        </ul>
      </div>
    );
};
