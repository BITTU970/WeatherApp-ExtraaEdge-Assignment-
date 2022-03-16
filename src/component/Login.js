import { useState } from "react";
import { useHistory } from "react-router";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();

  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "name"){
      setName(value);
    }
    
   else if(fieldName === "password"){
        setPassword(value);
      }
  }

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(name.trim()==="" || password===""){
      alert("required all fields");
    }
    else{
      e.preventDefault()
      history.push('/Logout');
      setName("");
      setPassword("");
  }
}

  return (
    <div className="App">
     <div className="header"><h1>Login in weather App</h1>
      <form onSubmit={(e)=>{onSubmitHandler(e)}}>
        <div className="container">
      <div class="box">
        <input type="text" value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} placeholder="Enter Username" /> <br/><br/></div>

         <div class="box">
         <input type="password" value={password} onChange={(e)=>{ onChangeHandler("password",e.target.value)}} placeholder="Enter Password" /><br/> <br/></div>
         <button className="btn" type="submit">Login</button>
         </div>
        </form>
        </div>
    </div>
  );
}