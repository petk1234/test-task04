import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development",
  queryDeduplication: true,
});
// client
//   .query({
//     query: gql`
//       query GetLocations {
//         histories(limit: 10) {
//           flight {
//             links {
//               flickr_images
//             }
//             mission_name
//           }
//           id
//           title
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
export default client;
