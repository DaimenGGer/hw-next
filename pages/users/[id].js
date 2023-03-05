import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function User() {
  const [user, setUser] = useState({})
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => setUser(response.data))
        .catch(error => console.log(error))
    }
  }, [id])

  return (
    <div className='block'>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Address:</p>
      <ul>
        <li>Street: {user.address?.street}</li>
        <li>Suite: {user.address?.suite}</li>
        <li>City: {user.address?.city}</li>
        <li>Zipcode: {user.address?.zipcode}</li>
      </ul>
      <p>Company:</p>
      <ul>
        <li>Name: {user.company?.name}</li>
        <li>Catch Phrase: {user.company?.catchPhrase}</li>
        <li>BS: {user.company?.bs}</li>
      </ul>
    </div>
  )
}
// addressElement.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
// companyElement.textContent = `Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`;
