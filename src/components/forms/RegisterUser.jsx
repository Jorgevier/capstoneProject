import { useState } from "react"


export default function RegisterUser() {
    const [user, setUser] =useState({first_name:'', last_name:'', email:'', username:'', password:''})

    async function registerUser(){
        const res = await fetch('https://restaurant-review-ywhm.onrender.com/userregister',{
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
        registerUser()
        console.log(user, 'form submitted');
        setUser({first_name:'', last_name:'', email:'', username:'', password:''})
    }
  return (
    <div className="usersignup">
        <h1 className="userSignup">Register</h1>
        <form action="" id='' className="resturantSignup-form" onSubmit={handleSubmit}>
            <label htmlFor="first_name"></label><br/>
            <input type='text' name='first_name' value={user.first_name} placeholder="first name" onChange={(e) => setUser({...user, 'first_name': e.target.value})} required/><br/>
            <label htmlFor="last_name"></label><br/>
            <input type='text' name='last_name' value={user.last_name} placeholder="last name" onChange={(e) => setUser({...user, 'last_name': e.target.value})} required/><br/>
            <label htmlFor="email"></label><br/>
            <input type='email' name='email' value={user.email} placeholder="email" onChange={(e) => setUser({...user, 'email': e.target.value})} required/><br/>
            <label htmlFor="username"></label><br/>
            <input type='text' name='username' value={user.username} placeholder="username" onChange={(e) => setUser({...user, 'username': e.target.value})} required/><br/>
            <label htmlFor="password"></label><br/>
            <input type='password' name='password' value={user.password} placeholder="password" onChange={(e) => setUser({...user, 'password': e.target.value})} required/><br/><br/>
            <input type="submit" href= '/userportal' value={'create my account'} /><br/>
        </form>
    </div>
  )
}
