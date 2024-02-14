import RegisterResturant from "../forms/RegisterResturant"
import HomeButton from '../HomeButton'

export default function ResturantSignUp() {
  return (
    <>
      <div className="restsignupOverly"></div>
      <div className="resturant-signup-img" ></div>
      <HomeButton/>
      <div>
        <RegisterResturant />
      </div>
    </>
  )
}
