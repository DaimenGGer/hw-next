import { useState, useEffect } from 'react'
import axios from 'axios'
import { FcFullTrash } from "react-icons/fc";


export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='block'>
      <h1>List of Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
            <button onClick={() => handleDelete(user.id)}>
              <FcFullTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

