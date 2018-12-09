export const makeChangeAction = (form, field, value) => ({
  meta: {
    field,
    form,
    persistentSubmitErrors: false,
    touch: false,
  },
  payload: value,
  type: '@@redux-form/CHANGE',
});
