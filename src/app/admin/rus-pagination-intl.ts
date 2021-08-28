import { MatPaginatorIntl } from '@angular/material/paginator';

const rusRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 из ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} из ${length}`;
}


export function getRusPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Новостей на каждой странице:';
  paginatorIntl.nextPageLabel = 'К следующей странице';
  paginatorIntl.previousPageLabel = 'К предыдущей странице';
  paginatorIntl.getRangeLabel = rusRangeLabel;

  return paginatorIntl;
}
