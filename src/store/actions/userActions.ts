export const CHANGE_USER_PHOTO = "CHANGE_USER_PHOTO";
export const CHANGE_USER_DATA = "CHANGE_USER_DATA";

export interface ChangeDataAction {
  type: typeof CHANGE_USER_DATA;
  payload: {
    name?: string;
    age?: number;
    gender?: string;
    about?: string;
  };
}
export interface ChangePhotoAction {
  type: typeof CHANGE_USER_PHOTO;
  payload: string;
}

export const changeUserData = (userData: {
  name?: string;
  age?: number;
  gender?: string;
  about?: string;
}): ChangeDataAction => ({
  type: CHANGE_USER_DATA,
  payload: userData,
});

export const changePhoto = (photo: string): ChangePhotoAction => ({
  type: CHANGE_USER_PHOTO,
  payload: photo,
});
