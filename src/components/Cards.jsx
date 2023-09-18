import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

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
    <section className="parkMain" role="region" aria-label="National Parks">
      <div className="parkContainer">
        {parks?.map((parkReq) => (
          <article key={parkReq.id} className="parkCard shadow-lg rounded-lg" role="article">
            {parkReq.images && parkReq.images.length > 0 && (
              <img
                src={parkReq.images[0].url}
                alt={parkReq.fullName}
                width={600}
                className="rounded-t-lg"
              />
            )}
            <div className="p-5 text-center">
              <h2 className="parkNameDetails">{parkReq.fullName}</h2>
              <p className="parkDetails">{parkReq.latLong}</p>
              <p className="parkDescription">{parkReq.description}</p>
              {parkReq.activities && parkReq.activities.length > 0 && (
                <div className="parkDetails">
                  <h3>Activities:</h3>
                  <ul>
                    {parkReq.activities.slice(0, 3).map((activity) => (
                      <li key={activity.id}>{activity.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              <br />
              <p className="parkDetails">
                Visit Park Website: <br />{' '}
                <a href={parkReq.url} target="_blank" rel="noopener noreferrer">
                  {parkReq.url}
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Cards;
