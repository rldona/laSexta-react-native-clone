import { SET_PLAYER_VISIBLE } from "../actions/types/options";

const initialState = {
  playerIsVisible: false
}

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_VISIBLE:
      return {
        ...state,
        playerIsVisible: action.playerIsVisible
      }

    default:
      return state
  }
}

export default optionsReducer