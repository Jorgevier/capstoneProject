import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Link href= '/loginuser'>User sign in</Nav.Link>
      <Nav.Link href="/loginrestaurant">restaurant sign in</Nav.Link>
    </Nav>
  )
}
