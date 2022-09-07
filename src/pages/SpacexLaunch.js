
import React, { useEffect, useState } from "react";
const LAUNCH_QUERY =`
{
  launchesPast(limit: 10) {
    id
    mission_name
  }
}

`

const SpacexLaunch = () => {
    const [launch, setLaunch] =useState([])
    useEffect(() => {
    fetch("https://api.spacex.land/graphql/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({query: LAUNCH_QUERY})
    }).then(Response => Response.json())
    .then(data => setLaunch(data.data.launchesPast))
    
    }, [])
    return (
      <div>
      <h1>SPACEX LAUNCH</h1>
      <ul>
        {launch.map(launch =>(
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
      </div>
    );
}

export default SpacexLaunch