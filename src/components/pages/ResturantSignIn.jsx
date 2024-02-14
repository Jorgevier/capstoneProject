import LoginResturant from '../forms/LoginResturant'
import HomeButton from '../HomeButton'


export default function ResturantSignIn() {
  return (
    <>
      <div className="restLoginOverly"></div>
      <div className="resturant-signin-img" ></div>
      <HomeButton/>
      <div>
        <LoginResturant />
      </div>
    </>
  )
}