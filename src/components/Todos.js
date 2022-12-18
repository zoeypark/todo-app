import React, {useState} from "react";
import styled from 'styled-components';
import { Todo } from './Todo';
import { dummyTodos } from '../static/data';
import { BiPlus } from 'react-icons/bi';
import './Todos.css';
import { CiTrash } from 'react-icons/ci';
import { GiPencil } from 'react-icons/gi';
import { IconContext } from "react-icons";

export const Todos = ()=> {
    
    const [isTodo, setIsTodo] = useState("");
    const [todos, setTodos] = useState(dummyTodos);

    // console.log(isTodo);

    const handleChange = (e) => {
        setIsTodo(e.target.value);
    }

    const handleClick = (e) => {
        const newTodo = {
            id: todos.length + 1,
            content:
                isTodo,
            createdAt: new Date(Date.now()).toLocaleDateString('ko-kr')
        }
        setTodos([newTodo, ...todos]);
        setIsTodo("");
    }

    const handleKeyUp = () => {
      const newTodo = {
        id: todos.length + 1,
        content:
            isTodo,
        createdAt: new Date(Date.now()).toLocaleDateString('ko-kr')
    }
    if (window.event.keyCode === 13) {
      setTodos([newTodo, ...todos]);
    setIsTodo("");
    }
    };

    const handleDelete = (e) => {
      const filteredTodos = todos.filter((el)=> el.id !== Number(e.target.id));
      // console.log(filteredTodos);
      setTodos(filteredTodos);
      // console.log(e.target.id);
      console.log(typeof(e.target.id))
    }

    return (
      <div>
        <div className="todo__addInput">
          <input
            className="todo__input"
            placeholder="할 일을 입력하세요."
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value={isTodo}
          ></input>
          <IconContext.Provider value={{ color: "rgb(207, 207, 207)" }}>
            <div className="plusIconWrapper">
              <BiPlus onClick={handleClick} size={30}/>
            </div>
          </IconContext.Provider>
        </div>
        <ul className="todos">
          {todos.map((el) => {
            return (
              <li className="todo__wrapper">
                <input className="todo__checkBox" type="checkbox"></input>
                <div className="todo__content">
                  <div className="todo__message">{el.content}</div>
                  <div className="todo__date">{new Date(el.createdAt).toLocaleDateString('ko-kr')}</div>
                </div>
                <div className="todo__icons">
                  <div className="editWrapper">
                    <GiPencil id={el.id} />
                  </div>
                  <div className="deleteWrapper">
                    <CiTrash onClick={handleDelete} size={17} id={el.id} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};
