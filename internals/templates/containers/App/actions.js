import {
  SET_LOADING,
  ERROR_GENERIC,
} from './constants';

export function errorGenericAction(error) {
  return {
    type: ERROR_GENERIC,
    error,
  };
}

export function loadingAction(isLoading) {
  return {
    type: SET_LOADING,
    isLoading
  };
}
