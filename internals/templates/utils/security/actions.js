/*
 *
 * CheckEmail actions
 *
 */

import {
  LOAD_PRIVATE, LOAD_PUBLIC,
} from './constants';

export function loadPublicAction() {
  return {
    type: LOAD_PUBLIC,
  };
}

export function loadPrivateAction() {
  return {
    type: LOAD_PRIVATE,
  };
}
