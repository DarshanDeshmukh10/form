import { useState } from 'react';
import './App.css';

function App() {
  const[formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotification:""
  });
  function changeHandler(event){
    const{name, value, checked, type}=event.target;
    setFormData((prev)=>({...prev, [name]: type==="checkbox" ? checked:value}))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Printing Data");
    console.log(formData);
  }
  return (
    <div className="App">
        <form onSubmit={submitHandler}>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input type="text" name='firstName' placeholder='Darshan' value={formData.firstName} id='firstName' onChange={changeHandler}/>

          <br />
          <br />

          <label htmlFor="lastName">Last Name</label>  
          <br />
          <input type="text" name="lastName" id="lastName" placeholder='Deshmukh' value={formData.lastName} onChange={changeHandler}/>
          
          <br />
          <br />

          <label htmlFor="email">Last Name</label>  
          <br />
          <input type="text" name="email" id="email" placeholder='deshmukhdarshan@gmail.com' value={formData.email} onChange={changeHandler}/>

          <br />
          <br />
          <label htmlFor="country">Country</label>
          <br />
          <select name="country" id="country" value={formData.country} onChange={changeHandler}>
            <option>India</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <br />
          <br />

          <label htmlFor="streetAddress">Street Address</label>
          <br />  
          <input type="text" name="streetAddress" id="streetAddress" placeholder='Sundargadhi' value={formData.streetAddress} onChange={changeHandler}/>

          <br />
          <br />

          <label htmlFor="city">city</label>
          <br />  
          <input type="text" name="city" id="city" placeholder='chopda' value={formData.city} onChange={changeHandler}/>

          <br />
          <br />

          <label htmlFor="state">State</label>
          <br />  
          <input type="text" name="state" id="state" placeholder='Maharashatra' value={formData.state} onChange={changeHandler}/>

          <br />
          <br />

          <label htmlFor="postalCode">Postal Code</label> 
          <br /> 
          <input type="text" name="postalCode" id="postalCode" placeholder='425107' value={formData.postalCode} onChange={changeHandler}/>

          <br />
          <br />

          <fieldset>
            <legend>By Email</legend>
            <input type="checkbox" name="comments"  id="comments" checked={formData.comments} onChange={changeHandler}/>
            
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>

            <br />
            <br />
           
            <input type="checkbox" name="candidates"  id="candidates" checked={formData.candidates} onChange={changeHandler}/>
            
            <div>
              <label htmlFor="candidates">candidates</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>

            <br />
            <br />

         
            <input type="checkbox" name="offers"  id="offers" checked={formData.offers} onChange={changeHandler}/>
            
            <div>
              <label htmlFor="offers">offers</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>

          </fieldset>
          

          <br />
          <br />
          <fieldset>
          <legend>Push Notification</legend>
          <p>These are d............phone</p>

          <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler} />
          <label htmlFor="pushEverything">Everything</label>

          <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={changeHandler} />
          <label htmlFor="pushEmail">Same as Email</label>

          <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={changeHandler} />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>
        <button>Save</button>
        </form>
    </div>
  );
}

export default App;
