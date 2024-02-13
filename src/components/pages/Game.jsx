import { useState } from "react"
import { Placeholder } from "react-bootstrap"

import Container from 'react-bootstrap/Container'


export default function Game() {

    const [resturantChoosen, setResturantChoosen] = useState()
    const resturants = []
    // need to learn the code how to grab resturants from a zip code area and pick a random one
    // garb random resturant from API

    function randomResturant(){
        setResturantChoosen( resturant[Math.floor(Match.random() * resturants.length)])
    }
  return (
    <Container>
        {/* <form action="" id='login-form' onSubmit={Placeholder}>
            <label htmlFor="username"></label><br />
            <input type="email" name='username'>zip code</input><br />
        </form> */}
        <h1>Resturant Game</h1>
        <p>Time to eat at... {resturantChoosen}</p>
        <button onClick={randomResturant}>Spin the Food Wheel</button>
    </Container>

  )
}
