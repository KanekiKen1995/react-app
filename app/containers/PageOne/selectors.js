import { createSelector } from 'reselect';

const pageOneReducer = state => state.PageOne;

const makeSelectUsername = () =>
  createSelector(
    pageOneReducer,
    homeState => homeState.username,
  );

export { pageOneReducer, makeSelectUsername };
