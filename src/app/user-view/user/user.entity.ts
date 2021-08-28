import {PageTitles} from "../../shared/components/shared-header/shared-header.entity";

const USER_NEW_ROUT = '/user/news';

const USER_CONTACTS_ROUT = '/user/contacts';

const USER_HISTORY_ROUT = '/user/history';

type UserViewRout = typeof USER_NEW_ROUT | typeof USER_CONTACTS_ROUT | typeof USER_HISTORY_ROUT;

const HEADER_USER_MAP: Map<UserViewRout, PageTitles> =
  new Map<UserViewRout, PageTitles>()
    .set(USER_NEW_ROUT, PageTitles.News)
    .set(USER_CONTACTS_ROUT, PageTitles.Contacts)
    .set(USER_HISTORY_ROUT, PageTitles.History);

export {
  UserViewRout,
  USER_NEW_ROUT,
  HEADER_USER_MAP,
  USER_HISTORY_ROUT,
  USER_CONTACTS_ROUT
};
