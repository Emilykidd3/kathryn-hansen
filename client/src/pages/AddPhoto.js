import React from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button } from "reactstrap";

import UploadImage from "../components/UploadImage";

function AddPhoto() {
  return (
    <div>
      <EmptySpace />
      <div style={{ width: "60%" }}>
        <Button id="upload_widget" class="cloudinary-button">
          Upload files
        </Button>
      </div>
    </div>
  );
}

export default AddPhoto;
