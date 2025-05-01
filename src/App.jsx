import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const[count, setCount] = useState(0);
  const[users, setUsers] = useState([])

  useEffect(() => {
    setUsers([
      {
        name: 'Bob the builder',
        age: 21,
        gender: 'Male',
        imgUri: 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg?semt=ais_hybrid',
      },
  
      {
        name: 'Martha Simons',
        age: 22,
        gender: 'Female',
        imgUri: 'https://i.pinimg.com/736x/b4/6a/e8/b46ae88b897482612bca878e26c221e2.jpg',
      },
  
      {
        name: 'Bob the builder',
        age: 21,
        gender: 'Male',
        imgUri: 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg?semt=ais_hybrid',
      },
  
      {
        name: 'Martha Simons',
        age: 22,
        gender: 'Female',
        imgUri: 'https://i.pinimg.com/736x/b4/6a/e8/b46ae88b897482612bca878e26c221e2.jpg',
      },
  
      {
        name: 'Bob the builder',
        age: 21,
        gender: 'Male',
        imgUri: 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg?semt=ais_hybrid',
      },
  
      {
        name: 'Martha Simons',
        age: 22,
        gender: 'Female',
        imgUri: 'https://i.pinimg.com/736x/b4/6a/e8/b46ae88b897482612bca878e26c221e2.jpg',
      },
      {
        name: 'Bob the builder',
        age: 21,
        gender: 'Male',
        imgUri: 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg?semt=ais_hybrid',
      },
  
      {
        name: 'Martha Simons',
        age: 22,
        gender: 'Female',
        imgUri: 'https://i.pinimg.com/736x/b4/6a/e8/b46ae88b897482612bca878e26c221e2.jpg',
      },
      {
        name: 'Bob the builder',
        age: 21,
        gender: 'Male',
        imgUri: 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg?semt=ais_hybrid',
      },
  
      {
        name: 'Martha Simons',
        age: 22,
        gender: 'Female',
        imgUri: 'https://i.pinimg.com/736x/b4/6a/e8/b46ae88b897482612bca878e26c221e2.jpg',
      }
    ])
  },[])

  function decrement(){
    setCount(count-1)
  }

  return (
    <div className="container">
      <h2 style={{background:'red', color:"white", padding: '20px'}}>COUNT : {count}</h2>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={decrement}>-</button>
       <div className="users">
         {
           users.map(user => {
             return (
               <div className="user">
                 <img src={user.imgUri} alt="" />
                 <h2>Name : {user.name}</h2>
                 <h3>Age : {user.age}</h3>
                 <h3>Gender : {user.gender}</h3>
               </div>
             )
           })
         }
        

       </div>
     </div>
  )
}

export default App
