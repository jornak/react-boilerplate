import {takeLatest, select, call, put} from 'redux-saga/effects';
import {push} from "react-router-redux"
import {
  LOAD_PRIVATE,
  LOAD_PUBLIC
} from "./constants";
import utilsApi from "../../utils/api";
import {
  errorGenericAction
} from "../../containers/App/actions";
import {
  PATHS,
} from "../../containers/App/constants";

function* loadPrivate() {
  /**
   * Space for you private processing
   */
}


function* loadPublic() {
  /**
   * Space for you public processing
   */
}


export default function* defaultSaga() {
  yield takeLatest(LOAD_PRIVATE, loadPrivate)
  yield takeLatest(LOAD_PUBLIC, loadPublic)
}
