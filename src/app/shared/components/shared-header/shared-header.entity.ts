enum PageTitles {
  News = "Новости",
  History = "История",
  Contacts = "Контакты"
}

type IClickHeaderFunction = (newPageTitle: PageTitles) => void;

interface ModulesInit {
  headerTitle: PageTitles;
  headerOptionsList: PageTitles[]
  initHeaderTitle(): void;
  toolBarButtonClicked(newHeaderTitle: PageTitles): void;
  redirectToPage(newHeaderTitle: PageTitles): void;
}

export {
  PageTitles,
  ModulesInit,
  IClickHeaderFunction
};
