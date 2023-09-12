import  { useState, useEffect } from 'react';

const API_URL =
  'https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=12&api_key=Bl3vA3Q4DHvtAmqR526K0S6mnC82skGhSKaNhh3Y';

const Cards = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParks(data.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <main className='container mx-auto py-20 px-8'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {parks?.map((parkReq) => (
          <div key={parkReq.id} className='shadow-lg rounded-lg'>
              {parkReq.images && parkReq.images.length > 0 && (
                <img src={parkReq.images[0].url} alt={parkReq.fullName} width={600}
                className='rounded-t-lg' />
              )}
              {/* You can render other park details here */}
              <div className='p-5 text-center'>
                <h2 className='text-3xl font-bold text-slate-700 mb-3'>{parkReq.fullName}</h2>
                <p className='text-sm font-normal text-gray-600 mb-3'>{parkReq.latLong}</p>
                <p className='text-lg font-normal text-gray-600 mb-3'>{parkReq.description}</p>
                <p className='text-sm font-normal text-gray-600 mb-3'>{parkReq.activities && parkReq.activities.length > 0 && (
                  <div>
                    <h3>Activities:</h3>
                      <ul>
                        {parkReq.activities.slice(0,3).map((activity) => (
                          <li key={activity.id}>{activity.name}</li>
                        ))}
                      </ul>
                  </div>
                )}</p>
                <p className='text-sm font-normal text-gray-600 mb-3'>{parkReq.url}</p>
              </div>
          </div>
          ))}
      </div>
    </main>
  );
};

export default Cards;
