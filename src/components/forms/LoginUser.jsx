import { useState, useContext } from "react"
import { Nav } from 'react-bootstrap'
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom";

export default function LoginUser() {
    const [isLogging, setIsLogging] = useState(false)
    const [user, setUser] = useState({ username: '', password: '', token: '' })
    const { updateUser, user: userState, updateLocalStorage } = useContext(UserContext)
    const navigate = useNavigate();
    if (isLogging) {
        Login()
    }

    async function Login() {
        const res = await fetch('https://restaurant-review-ywhm.onrender.com/userlogin', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
            updateUser({ token: data.token, username: user.username, password: user.password })
            navigate('/userportal', {replace:true})
        }
        setIsLogging(false)
    }
    function handleSubmit(e) {
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
            <h2 className="diplay-user">Welcome, {user.username}</h2>
            
            <form action='' id='login-form' className='login-user' onSubmit={handleSubmit}>
                <label htmlFor="username"></label><br />
                <input type="text" name="username" placeholder="Username" /><br />
                <label htmlFor="password"></label><br />
                <input type="password" name="password" placeholder="Password" /><br />
                <input type="submit"  value={'LoginUser'}  /><br />
                <Nav className="userCreate" activeKey="/home">
                    <Nav.Link href='/createanaccount'>Create an account</Nav.Link>
                    <Nav.Link href="/forgotaccountinfo">forgot username/password</Nav.Link>
                    <Nav.Link href="/userportal">DEMO</Nav.Link>
                </Nav>

            </form>
        </div>
    )
}
