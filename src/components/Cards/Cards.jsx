import {useState, useEffect} from 'react';
import Parks from "../Cards/Parks";


const API_URL = "https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=12&api_key=Bl3vA3Q4DHvtAmqR526K0S6mnC82skGhSKaNhh3Y"

const Cards = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) =>res.json())
    .then(data => {
      console.log(data);
      setParks(data.data);
    })
    .catch((error) => {
      console.log('Error fetching data:', error)
    })
  }, [])


  return (
    <div>
      {parks?.map((parkReq) => <Parks key={parkReq.id} {...parkReq}/>)}
    </div>
  )
}

export default Cards