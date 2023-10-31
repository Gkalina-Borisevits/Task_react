import { FC, useEffect, useState } from 'react'
import User from './types/User';
//import cn from 'classnames'
import styles from './UserPage.module.css'

const UserPage: FC = () => {

   
        const [users, setUsers] = useState<User[]>([]);
        
        async function UserData(): Promise<void> {
          const res = await fetch("https://fakestoreapi.com/users");
          const arr = await res.json();
          console.log(arr)
          setUsers(arr);
        }
        useEffect(() => {
          UserData();
        }, []);
      

return (
<div>
    <h1>User</h1>
      <ul className={styles.bigContainer}>
        {users.map((user) => (
          <li className={styles.container} key={user.id}>
            <h2>User: {user.username}</h2>
            <ul className={styles.userContainer}>
              <li>ID: {user.id}</li>
              <li>Email: {user.email}</li>
              <li>Phone: {user.phone}</li>
              <li>Password: {user.password}</li>
              <li>
                Name: {user.name.firstname} {user.name.lastname}
              </li>
              <li>Address:</li>
              <ul>
                <li>City: {user.address.city}</li>
                <li>Street: {user.address.street}</li>
                <li>Number: {user.address.number}</li>
                <li>Zipcode: {user.address.zipcode}</li>
                <li>
                  Geolocation: Lat: {user.address.geolocation.lat}, Long: {user.address.geolocation.long}
                </li>
              </ul>
            </ul>
          </li>
        ))}
      </ul>
    </div>
)}

export default UserPage