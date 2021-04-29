import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useStyles } from "./makeStyles";

const MaterialUiBtn = ({ type }) => {
  const classes = useStyles();

  switch (type) {
    case "upload":
      return (
        <Button
          variant="contained"
          color="default"
          component="span"
          className={classes.btn__upload}
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      );

    default:
      return null;
  }
};

MaterialUiBtn.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MaterialUiBtn;
