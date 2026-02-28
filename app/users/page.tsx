"use client"
import { useEffect, useState } from "react"

const Todo =()=>{
   const [todos, setTodos] = useState([])
    const url ="https://jsonplaceholder.typicode.com/todos";
    
    useEffect(()=>{
        const fetchTodo = async() =>{
            const res = await fetch (url);
            const data = await res.json()
            console.log(data) 
            setTodos(data);
        };
        fetchTodo();
    },[]);

    return (
        <ul>
           {todos.map((todo)=>(<li key={todo.id}>{todo.title}</li>))}
        </ul>
    )

}

const User = () => {
    const [users, setUsers] = useState([])
    const url ="https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        const fetchUser = async() =>{
            const res = await fetch (url);
            const data = await res.json()
            console.log(data) 
            setUsers(data);
        };
        fetchUser();
    },[]);

    return (
        <ul>
           {users.map((user)=>(<li key={user.id}>{user.name}</li>))}
        </ul>
    )

}

const UserPage = () => {
  return (
    <>
      <h1 className="bg-green-500 text-white p-2">Users</h1>
      <User />

      <h1 className="bg-green-500 text-white p-2">Todos</h1>
      <Todo />
    </>
  )
}
export default UserPage
