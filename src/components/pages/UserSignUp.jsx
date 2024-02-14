import RegisterUser from "../forms/RegisterUser"
import HomeButton from '../HomeButton'
export default function UserSignUp() {
  return (
    <>
      <div className="usersignupOverly"></div>
      <div className="user-signup-img" ></div>
      <HomeButton/>
      <div>
        <RegisterUser />
      </div>
    </>
  )
}
