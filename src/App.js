import { useState } from 'react';
import './App.css';

function App() {
  const[formData,setFormData]=useState({
    firstName:""
  });
  function changeHandler(event){
    const{name, value, checked, type}=event.target;
    setFormData((prev)=>({...prev, [name]:value}))
  }
  return (
    <div className="App">
        <form >
          <label htmlFor="firstName">First Name</label>
          <input type="text" name='firstName' placeholder='Darshan' value={formData.firstName} id='firstName' onChange={changeHandler}/>

          <br />
          <br />
          
        </form>
    </div>
  );
}

export default App;
