import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';

axios.defaults.baseURL = 'http://192.168.0.40:8081/api';

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
