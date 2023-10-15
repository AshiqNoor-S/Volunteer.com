import React, { useState, useEffect } from 'react';

const Location = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const NGO_CATEGORY = 'healthcare';
        const GOVERNMENT_CATEGORY = 'office.government';
        const MUMBAI_BOUNDING_BOX = 'rect%3A72.768518%2C19.186134%2C72.986496%2C18.890977';
        const response = await fetch("https://api.geoapify.com/v2/places?categories="+GOVERNMENT_CATEGORY+","+NGO_CATEGORY+"&filter="+MUMBAI_BOUNDING_BOX+"&limit=20&apiKey=303f4720094a4172a8ab37549d279277");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NGOs and Government organisation nearby</h1>
      {data ? (
        <ul>
          {data.features.map((feature, index) => (
            <li key={index}>{feature.properties.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Location;
