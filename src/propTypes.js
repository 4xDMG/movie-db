import { bool, func, number, oneOf, shape, string } from 'prop-types';

export const historyType = shape({
  length: number,
  action: oneOf(['POP', 'PUSH', 'REPLACE']),
  location: shape({
    pathname: string,
    search: string,
    hash: string,
    state: shape({}),
  }),
  createHref: func,
  push: func,
  replace: func,
  go: func,
  goBack: func,
  goForward: func,
  block: func,
  listen: func,
});

export const matchType = shape({
  path: string,
  url: string,
  isExact: bool,
  params: shape({}),
});
