import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return { ...state,
        places: [...state.places, {
          value: action.place,
          key: Math.random().toString(),
          image: { uri: 'https://paulbromford.files.wordpress.com/2013/02/img_0420.jpg' },
        }] };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null,
      };

    case SELECT_PLACE:
      return { ...state, selectedPlace: state.places.find(place => place.key === action.key) };

    case DESELECT_PLACE:
      return { ...state, selectedPlace: null };

    default:
      return state;
  }
};
