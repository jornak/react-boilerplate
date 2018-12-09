import { createSelector } from 'reselect';

const selectFormByName = name => state => state.get('form')[name];

export const makeSelectFormByName = name =>
  createSelector(
    selectFormByName(name),
    formState => formState && formState.values,
  );

export const makeValueSelector = (key, formName) => {
  const selectorValue = state => {
    const formData = state.get('form');
    const val =
      formData[formName] &&
      formData[formName].values &&
      formData[formName].values[key];
    return val;
  };

  return createSelector(selectorValue, substate => substate);
};

const selectForm = state => state.get('form');

export const makeSelectFormState = () =>
  createSelector(selectForm, formState => formState);
