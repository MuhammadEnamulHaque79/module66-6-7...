/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';

const App = () => {
const [users,setUsers] = useState([]);
  const handleAddUser =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // console.log(name,email);
    const user = {name,email};
    console.log(user);
    // form.reset();
//data send from client side to server side via post method;
fetch('http://localhost:5000/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{
    console.log(json);
    //VERY IMPORTANT PART;
    form.reset();
    const newUsers = [...users,json];
    setUsers(newUsers);


  });

};

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      <div>
        {
          users.map(user =><li key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>

          </li>)
        }
      </div>

    </div>
  );
};

export default App;