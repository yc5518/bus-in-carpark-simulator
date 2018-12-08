import * as ACTION_TYPES from '../constants/ActionTypes';

export const INIT_STATE = {
  buses: [],
  parkNum: 5,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_NEW_BUS:
      return {
        ...state,
        buses: [...state.buses, { ...action.newBus, id: "1" }],
      };
    case ACTION_TYPES.MOVE_EXISTING_BUS:
      return {
        ...state,
        buses: state.buses.map(bus =>
          ((bus.id === action.busId) ? { ...bus, ...action.newPosition } : bus)),
      };
    case ACTION_TYPES.CLEAR_ALL_BUSES:
      return INIT_STATE;
    default:
      return state;
  }
};
