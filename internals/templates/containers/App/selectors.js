import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const selectForm = (state) => state.get('form');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectFormState = () => createSelector(
  selectForm,
  (formState) => formState
)

export {
  makeSelectLocation,
  makeSelectFormState,
};
