
import React, { useEffect, useState } from "react";
const LAUNCH_QUERY =`
{
    landpads(limit: 10) {
      details
      full_name
      id
      landing_type
      location {
        latitude
        longitude
        name
        region
      }
    }
  }
  
  
  

`

const LandPad = () => {
    const [landPad, setLandPad] = useState([])
    useEffect(() => {
    fetch("https://api.spacex.land/graphql/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({query: LAUNCH_QUERY})
    }).then(Response => Response.json())
    .then(data => setLandPad(data.data.landpads))
    
    }, [])
    return (
      <div>
      <h1>landPad</h1>
      <ul>
        {landPad.map(landPad =>(
          <li key={landPad.id}>{landPad.details}</li>
        ))}
      </ul>
      </div>
    );
}

export default LandPad