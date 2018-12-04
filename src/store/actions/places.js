import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';

export const addPlace = place => ({
  type: ADD_PLACE,
  place,
});

export const deletePlace = key => ({
  type: DELETE_PLACE,
  key: key,
});

export const selectPlace = key => ({
  type: SELECT_PLACE,
  key,
});

export const deselectPlace = () => ({
  type: DESELECT_PLACE,
});
