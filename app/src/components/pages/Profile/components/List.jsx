import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const List = ({ new_photo, onRemovePhoto }) => {
  return new_photo.map((item) => (
    <Item key={item.id} {...item} onRemovePhoto={onRemovePhoto} />
  ));
};

List.propTypes = {
  new_photo: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default List;
