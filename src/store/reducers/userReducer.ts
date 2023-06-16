import {
  CHANGE_USER_PHOTO,
  CHANGE_USER_DATA,
  ChangePhotoAction,
  ChangeDataAction,
} from "../actions/userActions";

interface UserState {
  name: string;
  age: number;
  gender: string;
  about: string;
  photo: string | null;
}

type UserAction = ChangeDataAction | ChangePhotoAction;

const initialState: UserState = {
  name: "",
  age: 0,
  gender: "",
  about: "",
  photo: "",
};
export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_USER_PHOTO:
      return { ...state, photo: action.payload };
    default:
      return state;
  }
};
