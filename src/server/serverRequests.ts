import { gql, useQuery } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches {
    histories(limit: 18) {
      flight {
        links {
          flickr_images
        }
        mission_name
      }
      id
      title
    }
  }
`;
