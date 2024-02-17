import Button from "react-bootstrap/Button"
import {useContext, useEffect} from "react"
import HomeButton from "../HomeButton"
import { UserContext } from "../../contexts/UserContext"
import { useParams } from 'react-router-dom'

export default function UserPortal() {
    const { user } = useContext(UserContext)
    const { username } = useParams()
    console.log(username, 'params');

    useEffect(() => {
        (async () => {
            const res = await fetch('http://127.0.0.1:5000/user/'.concat(username))
            if (res.ok) {
                const data = await res.json()
                console.log(data);
                const { username, posts } = data
                setUser({ username, posts })
            }
        })()
    }, [])

    if (!user) return <Spinner />
    return (
        <div>
            
            <div className="mainOverly"></div>
            <div className="demo" ></div>
            <HomeButton/>
            <div className="user_info">
                <h3>Hello, {user.username } </h3>
            
            </div>
            <div className="demoPage">
                
                <div className="d-grid gap-2">
                
                    <Button variant="secondary" size="lg">
                        See favorite Restaurants
                    </Button>
                    <Button variant="secondary" size="lg">
                        Update user info
                    </Button>
                    
                </div>
                
            </div >
        </div>
    );
}


