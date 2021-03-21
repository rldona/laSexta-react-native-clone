import { SET_PLAYER_VISIBLE } from "./types/options";

export function setPlayerVisible(visible) {
  return {
    type: SET_PLAYER_VISIBLE,
    playerIsVisible: visible
  }
}
