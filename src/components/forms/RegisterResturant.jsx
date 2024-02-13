import { useState } from "react"

export default function RegisterResturant() {
    const [user, setUser] =useState({resturant_name:'', resturant_address:'', resturant_tel:'', tax_id:'', email:'', username:'', password:''})

    async function registerNewResturant(){
        const res = await fetch('https://restaurant-review-ywhm.onrender.com/resturantregister',{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        if(res.ok){
            const data = await res.json()
            console.log(data);
        }    
    }

    function handleSubmit(e){
        e.preventDefault()
        registerNewResturant()
        console.log(user, 'form submitted');
        setUser({resturant_name:'', resturant_address:'', tax_id:'', email:'', username:'', password:''})
    }
  return (
    <div className="restaurantsignup">
        <h1 className="restSignupheader">Register</h1>
        <form action=" " id="resturant-signup" className="resturantSignup-form" onSubmit={handleSubmit}>
            <label htmlFor="resturant_name"></label><br/>
            <input type='text' name='resturant_name' value={user.resturant_name} placeholder="Restaurant name" onChange={(e) => setUser({...user, resturant_name: e.target.value})} required /><br/>
            <label htmlFor="resturant_address"></label><br/>
            <input type='text' name='resturant_address' value={user.resturant_address} placeholder="restaurant address" onChange={(e) => setUser({...user, resturant_address: e.target.value})} required/><br/>
            <label htmlFor="resturant_tel"></label><br/>
            <input type='text' name='resturant_tel' value={user.resturant_tel} placeholder="restaurant telephone#" onChange={(e) => setUser({...user, resturant_tel: e.target.value})} required/><br/>
            <label htmlFor="tax_id"></label><br/>
            <input type='tax_id' name='tax_id' value={user.tax_id} placeholder="tax id#" onChange={(e) => setUser({...user, tax_id: e.target.value})} required/><br/>
            <label htmlFor="email"></label><br/>
            <input type='email' name='email' value={user.email} placeholder="email" onChange={(e) => setUser({...user, email: e.target.value})} required/><br/>
            <label htmlFor="username"></label><br/>
            <input type='text' name='username' value={user.username} placeholder="username" onChange={(e) => setUser({...user, username: e.target.value})} required/><br/>
            <label htmlFor="password" href='/landingpage'></label><br/>
            <input type='password' name='password' value={user.password} placeholder="password" onChange={(e) => setUser({...user, password: e.target.value})} required/><br/><br/>
            <input type="submit" value={'create my account'} /><br/>
        </form>
    </div>
  )
}
