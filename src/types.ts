export type Links = {
  flickr_images: string[] | null;
  __typename: string;
};
export type Flight = {
  links: Links;
  mission_name: string;
  __typename: string;
};
export type LaunchEl = {
  __typename: string;
  title: string;
  id: string;
  flight: Flight;
  // flight: { links: Links; mission_name: string; __typename: string };
};
// export type launchesArr = {
//   histories: launchEl[];
// };

// export interface Links {
//   flickr_images: string[] | null;
//   __typename: string;
// }
// export interface Flight {
//   links: Links;
//   mission_name: string;
//   __typename: string;
// }
// export interface LaunchEl {
//   __typename: string;
//   title: string;
//   id: string;
//   flight: Flight;
// }
// export interface LaunchesArr {
//   histories: LaunchEl[];
// }
