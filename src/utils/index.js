import * as CONSTANTS from '../constants';

export const isValidDirection = direction => (CONSTANTS.DIR_ALL.indexOf(direction) > -1);

export const turnBus = (currentDirection, isClockwise = false) => {
  const directionsArray = CONSTANTS.DIR_ALL;
  let index = null;
  directionsArray.forEach((dir, i) => {
    if (dir === currentDirection) {
      index = i;
    }
  });
  if (index == null) {
    return '';
  } else if (isClockwise) {
    return directionsArray[(index + 1) % directionsArray.length];
  }
  return directionsArray[((index + directionsArray.length) - 1) % directionsArray.length];
};

export const moveBus = (currentPosition = {}, isForward) => {
  let direction = currentPosition.direction;
  switch (direction) {
    case CONSTANTS.DIR_NORTH:
      return {
        ...currentPosition,
        posY: currentPosition.posY + 1,
      };
    case CONSTANTS.DIR_SOUTH:
      return {
        ...currentPosition,
        posY: currentPosition.posY - 1,
      };
    case CONSTANTS.DIR_EAST:
      return {
        ...currentPosition,
        posX: currentPosition.posX + 1,
      };
    case CONSTANTS.DIR_WEST:
      return {
        ...currentPosition,
        posX: currentPosition.posX - 1,
      };
    default:
      return currentPosition;
  }
};

export const checkInside = (newPos = {}, parkNum = 0) => {
  if (newPos.posX < 0 || newPos.posY < 0 ||
    newPos.posX >= parkNum || newPos.posY >= parkNum) {
    return false;
  }
  return true;
};