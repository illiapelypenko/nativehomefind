import { put, call, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { fetchProperties } from 'API/properties';

function* getProperties({ payload }) {
  try {
    yield put({ type: 'SET_REQUEST', payload: 'PENDING' });
    const properties = yield call(fetchProperties, payload);
    yield put({ type: 'GET_PROPERTIES', payload: properties });
    yield put({ type: 'SET_REQUEST', payload: 'SUCCESS' });
  } catch (error) {
    yield put({
      type: 'SET_ERROR',
      payload: {
        message: error.message,
        type: 'Search',
      },
    });
    yield put({
      type: 'SET_REQUEST',
      payload: 'ERROR',
    });
  }
}

function* watchGetProperties() {
  yield takeLatest('GET_PROPERTIES_ASYNC', getProperties);
}

export default function* rootSaga() {
  yield all([watchGetProperties()]);
}
