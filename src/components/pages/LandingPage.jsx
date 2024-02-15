import Header from "../Header"
import ResturantSearch from "../forms/ResturantSearch"

export default function LandingPage({}) {
  return (
    //api key 
  // Client ID
// n-_Boovb5pEzrZbGLkBWAA
    
    <>
      <div className="mainOverly"></div>
      <div className="main-search" ></div>
      <div>
          <Header />
          <ResturantSearch />
      </div>
    </>
  )
}
