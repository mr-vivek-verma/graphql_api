
import React from "react";
import { useQuery, gql} from "@apollo/client";
import { Query } from "react-apollo";
import "../index.css";
import NEW_QUERY from "../components/query";

const LAUNCH_QUERY = gql`
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
   


    const {data, loading, error } = useQuery(LAUNCH_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
      <div>
      <h1>landPad</h1>
      <div>
        {data.landpads.map(landPad =>(
          <div className="card">
          <p key={landPad.id}>{landPad.details}</p>
          </div>
        ))}
      </div>
      </div> 
//     <div query={NEW_QUERY}>
//     {({ loading, error, data }) => {
//       if (loading) return <div>Fetching data.....</div>;
//       if (error) return <div>Error fetching data..</div>;
//       return (
//         <div>
//        <h1>landPad</h1>
//        <div>
//          {data.landpads.map(landPad =>(
//            <div className="card">
//            <p key={landPad.id}>{landPad.details}</p>
//            </div>
//             ))}
//          </div>
//          </div> 
//       );
//     }}
//   </div>
    ); 
}

export default LandPad