import * as ACTION_TYPES from '../constants/ActionTypes';
import * as Utils from '../utils';

export const createNewBus = position => ({
  type: ACTION_TYPES.CREATE_NEW_BUS,
  newBus: position,
});

export const moveExistingBus = (position, id) => ({
  type: ACTION_TYPES.MOVE_EXISTING_BUS,
  newPosition: position,
  busId: id,
});

export const clearAllBuses = () => ({
  type: ACTION_TYPES.CLEAR_ALL_BUSES,
});

export const placeBus = (position,id) => (dispatch, getState) => {
  if (id) {
    console.log("Move id " + id + " TO " + position.posX + ", " + position.posY)
    dispatch(moveExistingBus(position, id));
  } else if (Utils.isValidDirection(position.direction)) {
    dispatch(clearAllBuses());
    dispatch(createNewBus(position));
  } 
};



