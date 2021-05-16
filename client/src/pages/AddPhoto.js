import React from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button } from "reactstrap";

import UploadImage from "../components/UploadImage";

function AddPhoto() {
  return (
    <div>
      <EmptySpace />
      <UploadImage />
      <Button id="upload_widget" class="cloudinary-button">
        Upload files
      </Button>
    </div>
  );
}

export default AddPhoto;
