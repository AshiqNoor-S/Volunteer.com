import React, { useState, useEffect } from 'react';

const Location = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const NGO_CATEGORY = 'healthcare';
        const GOVERNMENT_CATEGORY = 'office.government';
        const MUMBAI_BOUNDING_BOX = 'rect%3A72.768518%2C19.186134%2C72.986496%2C18.890977';
        const place = await fetch("https://api.geoapify.com/v1/geocode/search?text=Mumbai&apiKey=303f4720094a4172a8ab37549d279277");
        const latlong = await place.json();
        const latitude = latlong.features[0].geometry.coordinates[1];
        const longitude = latlong.features[0].geometry.coordinates[0];
        console.log(latitude);
        console.log(longitude);
        const minLatitude = latitude - 0.03;
        const minLongitude = longitude - 0.03;
        const maxLatitude = latitude + 0.03;
        const maxLongitude = longitude + 0.03;
        const BOUNDING_BOX_FORMAT = `rect:${minLongitude},${minLatitude},${maxLongitude},${maxLatitude}`;
        const response = await fetch("https://api.geoapify.com/v2/places?categories="+GOVERNMENT_CATEGORY+","+NGO_CATEGORY+"&filter="+BOUNDING_BOX_FORMAT+"&limit=20&apiKey=303f4720094a4172a8ab37549d279277");
        const result = await response.json();
        console.log("NGO's");
        console.log(result);
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
