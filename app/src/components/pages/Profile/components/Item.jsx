import React from "react";
import PropTypes from "prop-types";

const Item = ({ id, photo, onRemovePhoto }) => {
  return <img key={id} src={photo} onClick={() => onRemovePhoto(id)} alt="" />;
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Item;
