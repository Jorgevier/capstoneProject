import HomeButton from '../HomeButton'
import LoginUser from '../forms/LoginUser'

export default function UserPage() {
  return (
    <>
    <div className="userOverly"></div>
    <div className="user-signin-img" ></div>
    <HomeButton/>
    <div>
        <LoginUser />
    </div>
    </>
  )
}
