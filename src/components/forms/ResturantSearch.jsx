import { useEffect } from "react";
export default function ResturantSearch() {
  const apiKey='UFsV8qMiUjyNOF7l7Iv4g4cEwuSN3oZRdfWa2uzZABS74vEX8EA6gxoFA2m_Sw-s0aRR6H0zqvMP40sL5ZqazCK-4xKpx0ntSxz-oC_rFV8-0P9HmQir_kgHXZDKZXYx';
  const apiUrl='https://api.yelp.com/v3/events/awesome-event'

  function getRestaurantInfo(){
    
    useEffect(() => {
      const fetchData = async() => {
        const result = await fetch(apiUrl)
        result.json().then(json =>{
          console.log(json);
        })
      }
      fetchData();
    }, []);
  }
  function handleSubmit(e){
    e.preventDefault()
    registerUser()
    console.log(user, 'form submitted');
    setUser({'':''})
}



  return (
    <div className="restuarnt-searchMain">
        <h1 className="restSearch"> Restaurant Search</h1>
        <form action='' id='resturant-search' className="resturant-search" onSubmit={handleSubmit} >
            {/* add onSubmit={pass} - once you do the code */}
            <label htmlFor="nameOrType"></label>
            <input type="text" name='nameOrType' placeholder="Name or type of food" /><br />
            <label htmlFor="zip"></label>
            <input type="text" name='zip' placeholder="zip code" /><br />
            <label htmlFor="distance"></label>
            <input type="text" name='miles' placeholder="miles" /><br />
            <button type="submit" value={'search'}>Submit</button>

        </form>
    </div>
  )
}
