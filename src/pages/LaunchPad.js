
import React, { useEffect, useState } from "react";
const LAUNCH_QUERY =`
{
    launchpads(limit: 10) {
      details
      id
      location {
        latitude
        longitude
        name
        region
      }
      name
      status
      successful_launches
    }
  }
  
  

`

const LaunchPad = () => {
    const [launchPad, setLaunchPad] = useState([])
    useEffect(() => {
    fetch("https://api.spacex.land/graphql/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({query: LAUNCH_QUERY})
    }).then(Response => Response.json())
    .then(data => setLaunchPad(data.data.launchpads))
    
    }, [])
    return (
      <div>
      <h1>launchPad</h1>
      <ul>
        {launchPad.map(launchPad =>(
          <li key={launchPad.id}>{launchPad.details}</li>
        ))}
      </ul>
      </div>
    );
}

export default LaunchPad