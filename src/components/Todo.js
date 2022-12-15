import React from "react";
import styled from 'styled-components';
import './Todo.css';

export const Todo = ({todo}) => {
    console.log(todo);
    const parsedDate = new Date(todo.createdAt).toLocaleDateString('ko-kr');
    return (
        <li className="todo__wrapper">
            <input className="todo__checkBox" type="checkbox"></input>
            <div className="todo__content">
                <div className="todo__message">{todo.content}</div>
                <div className="todo__date">{parsedDate}</div>
            </div>
            <button className="todo__delete">x</button>
        </li>
    )
}
