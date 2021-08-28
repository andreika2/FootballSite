interface IPaginationModel<T> {
  limit: number;
  offset: number;
  count: number;
  models: T[];
}

export  {
  IPaginationModel
}
