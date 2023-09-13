import  { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL
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
    <main className='parkMain'>
      <div className='parkContainer'>
        {parks?.map((parkReq) => (
          <div key={parkReq.id} className='shadow-lg rounded-lg'>
              {parkReq.images && parkReq.images.length > 0 && (
                <img src={parkReq.images[0].url} alt={parkReq.fullName} width={600}
                className='rounded-t-lg' />
              )}
              {/* You can render other park details here */}
              <div className='p-5 text-center'>
                <h1 className='parkNameDetails'>{parkReq.fullName}</h1>
                  <p className='parkDetails'>{parkReq.latLong}</p>
                  <p className='parkDescription'>{parkReq.description}</p>
                  <span className='parkDetails'>{parkReq.activities && parkReq.activities.length > 0 && (
                    <div>
                      <h1>Activities:</h1>
                        <ul>
                          {parkReq.activities.slice(0,3).map((activity) => (
                            <li key={activity.id}>{activity.name}</li>
                          ))}
                        </ul>
                    </div>
                      )}
                  </span>
                <p className='parkDetails'>{parkReq.url}</p>
              </div>
          </div>
          ))}
      </div>
    </main>
  );
};

export default Cards;
