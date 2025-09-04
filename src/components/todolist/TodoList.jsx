import React, { useEffect, useState } from "react";

export default () => {
  const [ todoList, setTodoList ] = useState([]);

  useEffect(() => {
    fetch('api/todo-list')
      .then(resp => resp.json())
      .then(data => {
        return new Promise(resolve => {
          setTimeout(() => resolve(data), 3000);
        });
      })
      .then(list => setTodoList(list));
  }, []);
  
  return <ul>
    {todoList.length ? 
      todoList.map(item => {
        return <li key={item._id}>{item.text}</li>
      }) :
      "No todos"}
  </ul>
}