import React, { useState } from "react";

export default function Checkout(){
  const [step,setStep] = useState(1);
  const [form,setForm] = useState({
    name:"", email:"", phone:"",
    address:"", city:"", pincode:"",
    payment:"card"
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  return (
    <div style={{padding:"40px",maxWidth:"600px",margin:"auto"}}>
      <h1 style={{color:"gold",textAlign:"center"}}>🧾 Checkout</h1>

      {/* Step 1 - Personal Details */}
      {step===1 && (
        <>
          <h2>Personal Details</h2>
          <input name="name" placeholder="Full Name" onChange={handleChange} style={input}/>
          <input name="email" placeholder="Email" onChange={handleChange} style={input}/>
          <input name="phone" placeholder="Phone Number" onChange={handleChange} style={input}/>
          <button style={btn} onClick={()=>setStep(2)}>Next ➡️</button>
        </>
      )}

      {/* Step 2 - Address */}
      {step===2 && (
        <>
          <h2>Delivery Address</h2>
          <input name="address" placeholder="Street Address" onChange={handleChange} style={input}/>
          <input name="city" placeholder="City" onChange={handleChange} style={input}/>
          <input name="pincode" placeholder="Pincode" onChange={handleChange} style={input}/>
          <button style={btn} onClick={()=>setStep(3)}>Next ➡️</button>
        </>
      )}

      {/* Step 3 - Payment Options */}
      {step===3 && (
        <>
          <h2>Select Payment Method</h2>

          <label><input type="radio" name="payment" value="card" onChange={handleChange}/> 💳 Card</label><br/>
          <label><input type="radio" name="payment" value="upi" onChange={handleChange}/> 📱 UPI</label><br/>
          <label><input type="radio" name="payment" value="crypto" onChange={handleChange}/> 🪙 Crypto</label><br/>
          <label><input type="radio" name="payment" value="cod" onChange={handleChange}/> 🚚 Cash on Delivery</label>

          <button style={btn} onClick={()=>setStep(4)}>Confirm Order</button>
        </>
      )}

      {/* Step 4 - Success Page */}
      {step===4 && (
        <div style={{textAlign:"center",marginTop:"40px"}}>
          <h2 style={{color:"lime"}}>🎉 Order Placed Successfully!</h2>
          <p>Thank you, <b>{form.name}</b></p>
          <p>Payment Mode: <b>{form.payment.toUpperCase()}</b></p>
          <p style={{marginTop:"20px",fontSize:"18px"}}>
            🚚 Delivery within <b>6 hours</b> ⏱️
          </p>
        </div>
      )}
    </div>
  );
}

const input = {
  width:"100%",
  padding:"12px",
  margin:"10px 0",
  borderRadius:"8px",
  border:"none"
};

const btn = {
  padding:"12px 30px",
  borderRadius:"30px",
  border:"none",
  background:"gold",
  fontWeight:"bold",
  cursor:"pointer",
  marginTop:"15px"
};
