import { useState } from "react"
import Container from "react-bootstrap/Container"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Game from "./components/pages/Game"
import Intro from "./components/Intro"
import ResturantPage from "./components/pages/ResturantPage"
import SearchResult from "./components/pages/SearchResult"
import UserPage from "./components/pages/UserSignIn"
import Body from "./components/Body"
import Resturants from "./components/Resturants"
import SinglePost from "./components/SinglePost"
import UserPosts from "./components/UserPosts"
import Users from "./components/Users"
import LoginUser from "./components/forms/LoginUser"
import LoginResturant from "./components/forms/LoginResturant"
import RegisterUser from "./components/forms/RegisterUser"
import RegisterResturant from "./components/forms/RegisterResturant"
import ResturantSignUp from "./components/pages/ResturantSignUp"
import LandingPage from "./components/pages/LandingPage"
import ResturantSearch from "./components/forms/ResturantSearch"
import ResturantSignIn from "./components/pages/ResturantSignIn"
import UserSignUp from "./components/pages/UserSignUp"
import { ToastContainer } from "react-toastify"


export default function App() {
  
  return(
<Container fluid data-bs-theme='dark' className='app'>
    <Routes>
        <Route path="/" element={<Intro>
          <Intro/>
        </Intro>}/>
        <Route path="/landingpage" element={<LandingPage>
          
          <ResturantSearch/>
        </LandingPage>}/>
        <Route path="/loginuser" element={<UserPage>
        </UserPage>}/>
        <Route path="/loginrestaurant" element={<ResturantSignIn>
        </ResturantSignIn>}/>
        <Route path="/createrestuarantaccount" element={<ResturantSignUp>
        </ResturantSignUp>}/>
        <Route path="/createanaccount" element={<UserSignUp>
        </UserSignUp>}/>

    </Routes>
</Container>

  )

}
