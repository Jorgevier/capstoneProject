import { useEffect, useState } from "react";
export default function ResturantSearch() {

  const apiUrl='https://api.yelp.com/v3/businesses/search?'
  const [zip, setZip] = useState('07208')
  const [submitted, setSubmitted] = useState(false)
  const [category, setCategory] = useState('')
  const [miles, setMiles] = useState('')
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // 'Access-Control-Allow-Origin': '*' ,
      Authorization: 'Bearer TVioWvYyqlIMLJ6QnNNXDMQBM3A_0Ka1ZuM3NUrT8R9CMs2y8yogw8lGUh7gGGPmpgeH4MQbYEeWHuA9dJRDDEJEoJlS-ycSD7uuLTpiIU6bF-8fJZYD7SMBEt7LZXYx'
    }, 
    mode:"no-cors"
  };
    
  useEffect(() => {
    if (submitted) {
    
      fetch(apiUrl + 'location=' + {zip} + '&categories=restaurants&sort_by=best_match&limit=20', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    };
    }, [submitted]);
  
  function handleSubmit(e){
    e.preventDefault()
    setSubmitted(true)
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
            <button type="submit" value={'search'}>Submit</button>

        </form>
    </div>
  )
}
