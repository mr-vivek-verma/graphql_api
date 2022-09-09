import gql from "graphql-tag";
const NEW_QUERY = gql`
query {
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
`;

export default NEW_QUERY;