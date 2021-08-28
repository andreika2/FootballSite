import {IPhoto, PhotoFormat} from "../admin.entity";

interface IContactsList {
  contactPersons: IContactItem[];
}

interface IContactItem {
  formalLink: string;
  fullName: string;
  id: number;
  photo: IPhoto;
}

enum ContactsColumn {
  Photo = "photo",
  FormalLink = "formalLink",
  FullName = "fullName",
  Buttons = "buttons"
}

const SNACK_BAR_SUCCESS_UPDATE_MESSAGE = "Участник успешно обновлена";

const SNACK_BAR_SUCCESS_CREATE_MESSAGE = "Участник успешно добавлен";

const SNACK_BAR_SUCCESS_DELETE_MESSAGE = "Участник успешно удален";

const ADD_CONTACT_ELEMENT: IContactItem = {
  formalLink: "",
  photo: {
    fileName: null,
    format: PhotoFormat.PNG,
    fileB64: ""
  },
  id: 0,
  fullName: ""
}

export {
  IContactsList,
  IContactItem,
  ContactsColumn,
  PhotoFormat,
  ADD_CONTACT_ELEMENT,
  SNACK_BAR_SUCCESS_UPDATE_MESSAGE,
  SNACK_BAR_SUCCESS_DELETE_MESSAGE,
  SNACK_BAR_SUCCESS_CREATE_MESSAGE
};
