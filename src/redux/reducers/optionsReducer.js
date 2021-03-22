import { SET_PLAYER_VISIBLE, SET_PLAYING, SET_CURRENT_ROUTE } from "../actions/types/options";

const initialState = {
  isPlayerVisible: false,
  isPlaying: false,
  currentRoute: ''
}

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_VISIBLE:
      return {
        ...state,
        isPlayerVisible: action.isPlayerVisible
      }

    case SET_PLAYING:
      return {
        ...state,
        isPlaying: action.isPlaying
      }

    case SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.currentRoute
      }

    default:
      return state
  }
}

export default optionsReducer;
