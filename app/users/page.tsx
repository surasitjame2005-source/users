"use client"
import { useEffect, useState } from "react"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const url = "https://jsonplaceholder.typicode.com/todos"

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setTodos(data.slice(0, 10)) 
        }
        fetchTodos()
    }, [])

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.title} {todo.completed ? "✅" : "❌"}
                </li>
            ))}
        </ul>
    )
}

const User = () => {
    const [users, setUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setUsers(data)
        }
        fetchUser()
    }, [])

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

const UserPage = () => {
  return (
    <>
        <h2>Users</h2>
        <User />
        <h2>Todos</h2>
        <Todo />
    </>
  )
}

export default UserPage