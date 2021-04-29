import Resizer from "react-image-file-resizer";

export const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      250,
      250,
      "JPEG",
      30,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
