interface IPagination {
  limit: number;
  offset: number;
}

interface INewsListModel {
  id: number;
  title: string;
  publishDate: string;
}

enum ListNewDisplayColumns {
  PublishDate = "publishDate",
  Title = "title",
  Buttons = "buttons"
}

const DEFAULT_PAGINATION: IPagination = {
  limit: 10,
  offset: 0
}

const DEFAULT_PAGE_OFFSET = 10;

const DEFAULT_ITEM_COUNT = 0;

const SNACK_BOX_DELETE_MESSAGE = "Новость успешно удалена"

export {
  IPagination,
  INewsListModel,
  DEFAULT_PAGINATION,
  DEFAULT_PAGE_OFFSET,
  DEFAULT_ITEM_COUNT,
  SNACK_BOX_DELETE_MESSAGE,
  ListNewDisplayColumns
}
