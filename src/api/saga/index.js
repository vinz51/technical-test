import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects'

let id = 1;
const renderId = () => id++;

function* create(type, options) {
  yield put({ type: `${type}/createLoading` });
  const data = {
    "id": renderId(),
    "color": options.color || null,
    "created_at": options.starts_at,
    "updated_at": options.starts_at,
    ...options
  }
  yield put({ type: `${type}/create`, data });
  yield put({ type: `${type}/createLoading` });
}

function* loadUsers() {
  yield put({ type: 'users/loading' });
  const data = [
   {
      "id": 1,
      "name": "Bruce Wayne",
      "created_at": "2021-01-01T15:33:40.090Z",
      "updated_at": "2021-01-01T15:33:40.090Z"
    },
    {
      "id": 2,
      "name": "Klark Kent",
      "created_at": "2021-01-03T15:33:40.090Z",
      "updated_at": "2021-01-03T15:33:40.090Z"
    }
  ];
  yield put({ type: 'users/getAll', data });
  yield put({ type: 'users/loading' });
}

function* watchUser() {
  yield takeEvery('LOAD_USERS', loadUsers);
}

function* createShifts({ options } = {}) {
  yield create('shifts', options);
}

function* loadShifts() {
  yield put({ type: 'shifts/loading' });
  const data = [
    {
      "id": 1,
      "user_id": 1,
      "starts_at": "2021-03-15T10:00:40.090Z",
      "ends_at": "2021-03-15T17:33:40.090Z",
      "color": null,
      "created_at": "2021-03-15T10:01:40.090Z",
      "updated_at": "2021-03-15T10:01:40.090Z"
    }
  ];
  yield put({ type: 'shifts/getAll', data });
  yield put({ type: 'shifts/loading' });
}

function* watchShifts() {
  yield takeEvery('LOAD_SHIFTS', loadShifts);
  yield takeEvery('CREATE_SHIFTS', createShifts);
}

function* saga() {
  yield all([
    watchUser(),
    watchShifts()
  ])
}

export default saga;
