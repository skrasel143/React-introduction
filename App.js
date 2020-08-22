import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const products = [
    {name: 'Html Tutorial', price:'$20', details: 'Wanna learn how to write to code and build a website? then here you are to the right place. So without amy further do lets get Started!'},
    {name: 'Css Tutorial', price:'$10', details: 'Wanna learn how to write to code and build a website? then here you are to the right place. So without amy further do lets get Started!'},
    {name: 'Javascript Tutorial', price:'$20', details: 'Wanna learn how to write to code and build a website? then here you are to the right place. So without amy further do lets get Started!'},
    {name: 'React Tutorial', price:'$250', details: 'Wanna learn how to write to code and build a website? then here you are to the right place. So without amy further do lets get Started!'}
  ]
  return (
    <div className="App">
      <header className="App-header">
       <h1>My first app</h1>
        <Counter></Counter>
       <Users></Users>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Members Name</h3>
      <ul style={{listStyle:'none', background:'#3B5998', width:'300px', borderRadius:'20px', padding:'20px'}}>
      {
        users.map(user => <li>{user.name}</li>)
      }
      </ul>
      <h3>Members Email</h3>
      <ul style={{listStyle:'none', background:'green', width:'300px', borderRadius:'20px', padding:'20px'}}>
      {
        users.map(user => <li>{user.name}</li>)
      }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    textAlign: 'left',
    paddingLeft: '5px',
    color: '#333',
    background: 'yellow',
    borderRadius: '20px',
    border: '2px solid gray',
    width: '300px', 
    margin: '10px'
  }
  const {name, price, details} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p style={{fontSize:'10px'}}>{details}</p>
      <button style={{margin:'10px', background:'lightgreen', borderRadius:'5px'}}>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  const addQuantity = () => {setCount(count + 1)}
  return(
  <div>
    <h3> Count- {count}</h3>
    <button onClick={addQuantity} style={{margin:'10px', background:'#00FF00', borderRadius:'5px', padding:'5px'}}>Add Quantity</button>
  </div>
  )
}

export default App;
