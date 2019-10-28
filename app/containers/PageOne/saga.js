/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/PageOne/selectors';

export function* getRepos() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
export function* getName(objName) {
  try {
    yield put({
      type: 'USER_NAME_SUCCEEDED',
      name: objName.name,
    });
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest('USER_NAME', getName);
}
