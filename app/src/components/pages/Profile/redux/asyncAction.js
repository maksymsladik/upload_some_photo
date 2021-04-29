import RequestApi from "../../../../lib/RequestApi";
import { setNewPhotoAction } from "./actionsTypes";

export const fetchPhotoAction = (dispatch) => {
  RequestApi.get()
    .then((json) => dispatch(setNewPhotoAction(json.data)))
    .catch((e) => console.log(e));
};

export const fetchCreatePhotosAction = (photos) =>
  RequestApi.post({ photos }).catch((e) => console.log(e));

export const fetchDeletePhotoAction = (id) =>
  RequestApi.delete(id).catch((e) => console.log(e));
