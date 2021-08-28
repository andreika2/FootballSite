import {MatSnackBarConfig} from "@angular/material/snack-bar/snack-bar-config";

const SNACK_BOX_POSITION_CONFIG: MatSnackBarConfig = {
  horizontalPosition: "center",
  verticalPosition: "bottom",
  duration: 3000
};

interface IPhoto {
  fileName: string | null;
  format: PhotoFormat;
  fileB64: string;
}

enum PhotoFormat {
  PNG = 1,
  JPG = 2
}

const AVAILABLE_FILE_TYPES = ".jpg, .png"

const LOCAL_STORAGE_KEY = "accessToken";

export {
  IPhoto,
  PhotoFormat,
  LOCAL_STORAGE_KEY,
  AVAILABLE_FILE_TYPES,
  SNACK_BOX_POSITION_CONFIG
}
