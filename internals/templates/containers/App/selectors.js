import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const selectForm = (state) => state.get('form');

const selectConfiguration = (state) => state.getIn(['global', 'configuration']);

const makeSelectConfiguration = () => createSelector(
  selectConfiguration,
  (substate) => substate
)

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectFormState = () => createSelector(
  selectForm,
  (formState) => formState
);

export {
  makeSelectLocation,
  makeSelectFormState,
  makeSelectConfiguration,
};
