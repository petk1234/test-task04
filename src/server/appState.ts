import { atom } from "recoil";
import { LaunchEl } from "../types";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
const state = atom({
  key: "fetchedLaunches",
  default: <LaunchEl[]>[],
});
const favsState = atom({
  key: "favouriteLaunches",
  default: <LaunchEl[]>[],
  effects_UNSTABLE: [persistAtom],
});
const currentPage = atom({
  key: "currentPage",
  default: <string>"",
});
export { state, favsState, currentPage };
