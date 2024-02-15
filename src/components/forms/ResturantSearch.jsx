import { useEffect, useState } from "react";
export default function ResturantSearch() {

  const apiUrl='https://api.yelp.com/v3/businesses/search?'
  const [zip, setZip] = useState('07208')
  const [submitted, setSubmitted] = useState(false)
  const [category, setCategory] = useState('')
  const [miles, setMiles] = useState('')
  const [restaurantData, setRestaurantData] = useState(null)
  
  function handleSubmit(e){
    e.preventDefault()
}
  const reqInfo = async()=>{
    let options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
         }, 
      body:JSON.stringify({zip:zip, category:category, miles:miles })
    };
    const data = await fetch ('http://127.0.0.1:5000/getyelp', options)
    .then(response => response.json())
    .catch(err => console.error(err));
    console.log(data)
    setRestaurantData(data)
  }

function GetSearchResults(){
  const restaurantComponents = []
  for (let i = 0; i < 5; i++){
    restaurantComponents.push(restaurantResult(i))
  }
  return (
    <div>
      {restaurantComponents}
    </div>
  )
}
function restaurantResult(i){
  let restaurant = restaurantData.businesses[i]
  return (
    <div className="searchResults">
      <h4 className="restaurantName">{restaurant.name}</h4>
      <h6 className="restaurantAddress">{restaurant.location.display_address}</h6>
      <h6 className="restaurantTel">{restaurant.display_phone}</h6>
      <h6 className="restaurantType">{restaurant.categories[0].title}</h6><br/>
  </div>
  )
}

  return (
    <div className="restuarnt-searchMain">
        <h1 className="restSearch"> Restaurant Search</h1>
        <form action='' id='resturant-search' className="resturant-search" onSubmit={handleSubmit} >
        
            <label htmlFor="nameOrType"></label>
            <input type="text" value={category} onChange={e => setCategory(e.target.value)} name='nameOrType' placeholder="Name or type of food" /><br />
            <label htmlFor="zip"></label>
            <input type="text" name='zip' value={zip} onChange={e => setZip(e.target.value)} placeholder="zip code" /><br />
            <label htmlFor="distance"></label>
            <input type="text" name='miles'value={miles} onChange={e => setMiles(e.target.value)} placeholder="miles" /><br />
            <button type="submit" value={'search'} onClick={reqInfo}>Submit</button>

        </form>
        {restaurantData && <GetSearchResults/>}
    </div>
  )
}
