import { useState } from "react"
import { Nav } from 'react-bootstrap'

export default function LoginResturant(updateResturantUser) {
    const [isLogging, setIsLogging] = useState(false)
    const [user, setUser] = useState({ username: '', password: '', token: '' })


    if (isLogging){
        LoginResturant()
    }

    async function LoginResturant(){
        const res = await fetch('',{
            method:"POST",
            headers:{'Content-Type': 'application/login'},
            body: JSON.stringify(user)
        })
        if (res.ok){
            const data = await res.json()
            console.log(data);
            updateResturantUser({token: data.token, username: user.username, password: user.password})
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
        <div className="resturant-login">
            <h1 className="resturantloginheader" >Resturant Login</h1>
            <form action='' id='login-form' className='resturantlogin-user' onSubmit={handleSubmit}>
                <label htmlFor="username"></label><br />
                <input type="text" name="username" placeholder="Username" /><br />
                <label htmlFor="password"></label><br />
                <input type="password" name="password" placeholder="Password"/><br />
                <input type="submit" value={'Login'} />
                <Nav className="resturantCreate" activeKey="/home">
                    <Nav.Link href= '/createrestuarantaccount'>Create an account</Nav.Link>
                    <Nav.Link href="/forgotrestaurantaccountinfo">forgot username/password</Nav.Link>
                </Nav>
            </form>
        </div>
    )
}
