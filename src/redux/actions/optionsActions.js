import { SET_PLAYER_VISIBLE, SET_PLAYING, SET_CURRENT_ROUTE } from "./types/options";

export function setPlayerVisible(visible) {
  return {
    type: SET_PLAYER_VISIBLE,
    isPlayerVisible: visible
  }
}

export function setPlaying(visible) {
  return {
    type: SET_PLAYING,
    isPlaying: visible
  }
}

export function setCurrentRoute(route) {
  return {
    type: SET_CURRENT_ROUTE,
    currentRoute: route
  }
}
