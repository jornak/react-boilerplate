import {errorGenericAction, loadingAction} from "../containers/App/actions";
import {makeSelectConfiguration} from "../containers/App/selectors";
import {call, put, select} from "redux-saga/effects";
import {ClientZoneApi, PublicApi, WizardApi, EnumsApi} from "../api";

const options = {headers: {accept: "application/json"}}
const configuration = {basePath: process.env.API_IP || undefined}
const STATUS = {ok: "ok", requestFailed: "requestFailed "}

/**
 *
 * @param data
 * @param apiFactory
 * @returns {load}
 */
function processor(data: { apiFunction: string, sucAction: Function, useAction: boolean }, apiFactory) {
  function* load(action) {
    yield put(loadingAction(true))
    const config = yield select(makeSelectConfiguration());
    const api = apiFactory(config)
    try {
      if (!api[data.apiFunction]) {
        throw `Function '${data.apiFunction}' not found in API ${api}`
      }
      const result = data.useAction ? yield call(api[data.apiFunction].bind(api), action.data, options) : yield call(api[data.apiFunction].bind(api), options);
      yield put(data.sucAction(result));
      yield put(loadingAction(false))
    } catch (err) {
      yield put(errorGenericAction(err));
    }
  }

  return load
}

/**
 *
 * @param apiFunction
 * @param sucAction
 * @param useAction - When true => Action must have parameter named "data".
 * @returns {load}
 */
export function publicProcessor(apiFunction: string, sucAction: Function, useAction: boolean = false) {
  return processor({apiFunction, sucAction, useAction}, (config) => new PublicApi(config))
}

/**
 *
 * @param apiFunction
 * @param sucAction
 * @param useAction - When true => Action must have parameter named "data".
 * @returns {load}
 */
export function clientZoneProcessor(apiFunction: string, sucAction: Function, useAction: boolean = false) {
  return processor({apiFunction, sucAction, useAction}, (config) => new ClientZoneApi(config))
}

export default {options, configuration, STATUS}
