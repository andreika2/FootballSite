interface ILoginFormData {
  username: string;
  password: string;
}

interface IAccessToken {
  accessToken: string;
  lifetime: number;
  username: string;
}

const LOGIN_REDIRECT_URL = 'admin/admin-page/edit-news';

const DEFAULT_LOGIN_FORM_DATA = {} as ILoginFormData;

export {
  ILoginFormData,
  DEFAULT_LOGIN_FORM_DATA,
  LOGIN_REDIRECT_URL,
  IAccessToken
};
