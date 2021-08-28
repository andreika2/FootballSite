import {UploaderCaptions} from "ngx-awesome-uploader/lib/uploader-captions";
import {IPhoto} from "../../admin.entity";

type TYNY_MCE_CONFIG_VALUE = string| number | boolean | string[];

const TINY_MCE_DEFAULT_VALUE = "<p>Введите текст новости</p>";

const TINY_MCE_CONFIG: Record<string, TYNY_MCE_CONFIG_VALUE> = {
  height: 500,
  menubar: false,
  language: "ru",
  plugins: [
    'advlist autolink lists link image charmap print',
    'preview anchor searchreplace visualblocks code',
    'fullscreen insertdatetime media table paste',
    'help wordcount'
  ],
  toolbar:
    'undo redo | \
    forecolor backcolor casechange permanentpen | \
    bold italic underline strikethrough |\
     fontselect | formatselect | fontsizeselect|\
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | table |view'
};

const UPLOADER_CAPTIONS: UploaderCaptions = {
  dropzone: {
    title: "Перетащите файл",
    or: "или",
    browse: "Загрузить",
  },
  cropper: {
    crop: "Обрезать",
    cancel: "Отмена"
  },
  previewCard: {
    remove: "Удалить",
    uploadError: "Ошибка загрузки файла",
  }
};

const DEFAULT_FORM_DATA = {} as IFormData;

const DEFAULT_UPLOAD_IMAGE_KEY = "image"

const DEFAULT_CONTROL_VALUE = "";

const SNACK_BOX_MESSAGE = "Новость успешно добавлена";

const REDIRECT_TO_LIST_NEWS_URL = "admin/admin-page/edit-news";

interface IFormData {
  title: string;
  textPreview: string;
  content: string;
  image: IPhoto;
}

export {
  TINY_MCE_DEFAULT_VALUE,
  UPLOADER_CAPTIONS,
  TINY_MCE_CONFIG,
  DEFAULT_FORM_DATA,
  DEFAULT_UPLOAD_IMAGE_KEY,
  DEFAULT_CONTROL_VALUE,
  SNACK_BOX_MESSAGE,
  REDIRECT_TO_LIST_NEWS_URL,
  IFormData
}
