import { useState, useContext, useEffect } from "react"
import { Nav } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from 'react-router-dom';

export default function LoginResturant() {
    const [isLogging, setIsLogging] = useState(false)
    const [user, setUser] = useState({ username: '', password: '', token: '' })

    // const {updateResturantUser}
    const { updateUser, user: userState, updateLocalStorage } = useContext(UserContext)
    const navigate = useNavigate()

    if (isLogging){
        resturantLogin()
    }
    useEffect(()=>{
        if(userState.username){
            navigate('/')
        } 
    },[])
        
    //     const localUser = JSON.parse(localStorage.getItem('user'))
    //     console.log(localUser, 'local user');
    //     if( localUser.username && !userState.username ){
    //         console.log('in if =========');
    //         updateUser(localUser)
    //         navigate('/')
    //         return
    //     }
    // },[])
    // async function getUser(username){
    //     const res = await fetch('http://127.0.0.1:5000/user/'.concat(username))
    //     if (res.ok) {
    //         const data = await res.json()
    //         console.log(data);
    //         return data
    //     }
    // }
    async function resturantLogin(){
        const res = await fetch('https://restaurant-review-ywhm.onrender.com/resturantlogin',{
            method:"POST",
            headers:{'Content-Type': 'application/login'},
            body: JSON.stringify(user)
        })
        if (res.ok){
            const data = await res.json()

            if(data.token){
                toast.success(user.username.concat(' logged in!'))
                const userData = await getUser(user.username)

                updateResturantUser({token: data.token, username: user.username, password: user.password})
                updateLocalStorage()
                Navigate('/')
                return
            }
        }
        toast.error('Invalid User Info/ Try Again')
        console.error("Login failed")
        setIsLogging(false)
    }
    function handleSubmit(e){
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        console.log(loginForm.get('password'));
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(username!==''){
        }
        else{
            setUsernameError('username required')
        }
        if(password!==''){
        }
        else{
            setPasswordError('password requi')
        }
    }
    
    return (
        <div className="resturant-login">
            <h1 className="resturantloginheader" >Resturant Login</h1>
            <form action='' id='login-form' className='resturantlogin-user' onSubmit={handleSubmit}>
                <label htmlFor="username"></label><br />
                <input type="text" name="username" placeholder="Username" /><br />
                <label htmlFor="password"></label><br />
                <input type="password" name="password" placeholder="Password"/><br />
                <input type="submit"  value={'Login'} onClick={LoginResturant} />
                <Nav className="resturantCreate"  activeKey="/home">
                    <Nav.Link href= '/createrestuarantaccount'>Create an account</Nav.Link>
                    <Nav.Link href="/forgotrestaurantaccountinfo">forgot username/password</Nav.Link>
                    <Nav.Link href="/restaurantportal">DEMO</Nav.Link>
                </Nav>
            </form>
        </div>
    )
}
