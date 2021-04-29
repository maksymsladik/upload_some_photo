import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "./components/List";
import MaterialUiBtn from "./components/MaterialUiBtn";
import { resizeFile } from "../../../lib/resizeFile";
import {
  fetchPhotoAction,
  fetchCreatePhotosAction,
  fetchDeletePhotoAction,
} from "./redux/asyncAction";

const Profile = (props) => {
  const { fetchPhoto, fetchCreatePhotos, fetchDeletePhoto, new_photo } = props;

  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchPhoto(), []);

  const onChange = async (e) => {
    await setValue(e.target.value);

    const files = await e.target.files;

    for (var i = 0; i < files.length; i++) {
      const res = await resizeFile(files[i]);
      await fetchCreatePhotos(res);
    }

    await fetchPhoto();
    setValue("");
  };

  const onRemovePhoto = async (id) => {
    await fetchDeletePhoto(id);
    fetchPhoto();
  };

  return (
    <div className="container">
      <div className="block">
        <div className="block__btn">
          <label className="label">
            <input
              onChange={(e) => onChange(e)}
              value={value}
              style={{ display: "none" }}
              type="file"
              multiple={true}
            />

            <MaterialUiBtn type="upload" />
          </label>
        </div>
      </div>

      <List new_photo={new_photo} onRemovePhoto={onRemovePhoto} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: () => fetchPhotoAction(dispatch),
    fetchCreatePhotos: (photos) => fetchCreatePhotosAction(photos),
    fetchDeletePhoto: (id) => fetchDeletePhotoAction(id),
  };
};

const mapStateToProps = (state) => {
  return {
    new_photo: state.photo.new_photo,
  };
};

Profile.propTypes = {
  fetchPhoto: PropTypes.func.isRequired,
  fetchCreatePhotos: PropTypes.func.isRequired,
  new_photo: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
