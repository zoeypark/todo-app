// import React from "react";
// import styled from 'styled-components';
// import { CiTrash } from 'react-icons/ci';
// import { GiPencil } from 'react-icons/gi';


// import './Todo.css';

// export const Todo = ({todo, todos, setTodos}) => {
//     // console.log(todo);
//     // console.log(todos);
//     const parsedDate = new Date(todo.createdAt).toLocaleDateString('ko-kr');

//     const handleDelete = (e) => {
//         console.log(e.target.id);
//         alert("삭제?");
//         console.log(todos);
//         const filtered = todos.filter((el) => el.id === e.target.id);
//         setTodos(filtered);
    
//         // console.log(todos);
//         console.log(todos);
//         // console.log(e.target.id)
        
//     }
        


//     return (
//         <li className="todo__wrapper">
//             <input className="todo__checkBox" type="checkbox"></input>
//             <div className="todo__content">
//                 <div className="todo__message">{todo.content}</div>
//                 <div className="todo__date">{parsedDate}</div>
//             </div>
//             <div className="todo__icons">
//               <div className='editWrapper'><GiPencil id={todo.id} /></div>
//               <div className='deleteWrapper'><CiTrash onClick={handleDelete} size={17} id={todo.id} /></div>
//             </div>
//         </li>
//     )
// }
