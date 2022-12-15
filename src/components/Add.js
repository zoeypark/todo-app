// import React , { useState } from "react";
// import styled from "styled-components";
// import './Add.css'
// import { dummyTodos } from '../static/data';

// const AddWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
// `

// export const Add = () => {

//     const [isTodo, setIsTodo] = useState("");
//     const [todos, setTodos] = useState(dummyTodos);

//     // console.log(isTodo);

//     const handleChange = (e) => {
//         setIsTodo(e.target.value);
//     }

//     const handleClick = (e) => {
//         const newTodo = {
//             id: dummyTodos.length,
//             content:
//                 isTodo,
//             createdAt: new Date(Date.now()).toLocaleDateString('ko-kr')
//         }
//         setTodos([newTodo, ...todos]);
//         console.log(newTodo);
//         console.log(todos);
//     }


//     return (
//         <AddWrapper>
//             <input className="todo__input" placeholder="Add todos..." onChange={handleChange}></input>
//             <button className="todo__addBtn" onClick={handleClick}>+</button>
//         </AddWrapper>
//     )
// };
