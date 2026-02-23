import React, { useState } from "react";

export default function Profile(){
  const [user,setUser] = useState(null);
  const [form,setForm] = useState({name:"",email:"",password:""});

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleLogin = (e)=>{
    e.preventDefault();
    setUser(form);
  };

  return (
    <div style={{padding:"40px",maxWidth:"500px",margin:"auto"}}>
      <h1 style={{color:"gold",textAlign:"center"}}>👤 Profile Login</h1>

      {!user ? (
        <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",gap:"15px"}}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            onChange={handleChange}
            style={inputStyle}
          />

          <button style={btnStyle}>Login</button>

          {/* Google Button UI */}
          <button
            type="button"
            style={{...btnStyle, background:"#4285F4", color:"#fff"}}
            onClick={()=>alert("Google login demo")}
          >
            Login with Google
          </button>
        </form>
      ) : (
        <div style={{textAlign:"center"}}>
          <h2>Welcome, {user.name} 🎉</h2>
          <p>Email: {user.email}</p>
          <button style={btnStyle} onClick={()=>setUser(null)}>Logout</button>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding:"12px",
  borderRadius:"8px",
  border:"none"
};

const btnStyle = {
  padding:"12px",
  borderRadius:"25px",
  border:"none",
  background:"gold",
  fontWeight:"bold",
  cursor:"pointer"
};
