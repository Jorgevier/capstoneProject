import { useState } from "react"
import { Nav } from 'react-bootstrap'

export default function LoginUser({ updateUser}) {
    const [isLogging, setIsLogging] = useState(false)
    const [user, setUser] = useState ({username:'', password:'', token: ''})

    if (isLogging){
        LoginUser()
    }

    async function LoginUser(){
        const res = await fetch('',{
            method:"POST",
            headers:{'Content-Type': 'application/login'},
            body: JSON.stringify(user)
        })
        if (res.ok){
            const data = await res.json()
            console.log(data);
            updateUser({token: data.token, username: user.username, password: user.password})
        }
        setIsLogging(false)
    }
    function handleSubmit(e){
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }
  return (
    <div className="user-login">
    <h1 className="loginHeader">Login</h1>
    <form action='' id='login-form' className='login-user' onSubmit={handleSubmit}>
        <label htmlFor="username"></label><br />
        <input type="text" name="username" placeholder="Username"/><br/>
        <label htmlFor="password"></label><br />
        <input type="password" name="password" placeholder="Password"/><br/>
        <input type="submit" value={'Login'} /><br/>
        <Nav className="userCreate" activeKey="/home">
            <Nav.Link href= '/createanaccount'>Create an account</Nav.Link>
            <Nav.Link href="/forgotaccountinfo">forgot username/password</Nav.Link>
            <Nav.Link href="/userportal">DEMO</Nav.Link>
        </Nav>

    </form>
    </div>
  )
}
