import { SET_NEW_PHOTO } from "./actionsTypes";

export const initialState = {
  new_photo: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_PHOTO: {
      return {
        ...state,
        new_photo: action.photo,
      };
    }

    default:
      return state;
  }
}
