export class PageRight {
  page: string = '';
}

export function page(page: string): PageRight {
  return {
    page: page,
  };
}
