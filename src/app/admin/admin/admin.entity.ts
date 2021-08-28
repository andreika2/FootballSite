enum PageTitles {
  News = "Новости",
  Contacts = "Контакты"
}

const NEWS_ROUT = "/admin/admin-page/edit-news";

const CONTACTS_ROUT = "/admin/admin-page/edit-contacts";

type RoutsAdmin = typeof NEWS_ROUT | typeof CONTACTS_ROUT;

const HEADERS_MAP: Map<RoutsAdmin, PageTitles> =
  new Map<RoutsAdmin, PageTitles>()
    .set(NEWS_ROUT, PageTitles.News)
    .set(CONTACTS_ROUT, PageTitles.Contacts);

export {
  NEWS_ROUT,
  CONTACTS_ROUT,
  HEADERS_MAP,
  RoutsAdmin,
  PageTitles
};
